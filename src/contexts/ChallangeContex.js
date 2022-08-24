import React, {createContext, useState, useReducer, useEffect} from 'react';
import {ChallangeReducer } from '../reducers/ChallangeReducer'

export const ChallangeContext = createContext();
const initState = {
  challanges: [
    {
      id: 1,
      text: 'Denizer Keskiner',
      difficulty: 'easy',
    },
    {
      id: 2,
      text: 'Merve Yılmaz',
      difficulty: 'medium',
    },
    {
      id: 3,
      text: 'Oğuz Sudaş',
      difficulty: 'hard',
    },
  ],
  selected: 1,
  index: 4,
};
const initResult = [
  {
    id: 1,
    challangeId: 2,
    scores: {
      duration: 2.5,
      accuracy: 83,
      wordsPerMinute: 69,
    },
  },
];

const ChallangeContextProvider = (props) => {
  const [state, dispatch] = useReducer(ChallangeReducer,initState, () => {
    const data = localStorage.getItem('challanges');
    return data ? JSON.parse(data) : initState;
  })

  const data = localStorage.getItem('results');

  const [results, setResults] = useState(data ? JSON.parse(data) : initResult);
  //const [state, setChallanges] = useState(initState);

// asagidaki fonksiyonlar ustteki stateden geliyordu


  // const addChallange = (challange) => {
  //   let id = state.index;
  //   const newChallange = {...challange, id};
  //   setChallanges({
  //     ...state,
  //     challanges: [...state.challanges, newChallange],
  //     index: id + 1,
  //   });
  // };

  // const setSelected = (id) => {
  //   setChallanges({...state, selected: id});
  // };

  useEffect(() => {
    localStorage.setItem('challanges', JSON.stringify(state));
  }, [state])

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(results));
  }, [results])

  const addResult = (result) => {
    setResults([...results, result]);
  };

  return (
    <ChallangeContext.Provider
      value={{
        ...state,
        results : [...results],
        addResult: addResult,
        dispatch
      }}
    >
      {props.children}
    </ChallangeContext.Provider>
  );
};

export default ChallangeContextProvider;
