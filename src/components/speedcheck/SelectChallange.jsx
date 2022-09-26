import React, {useContext} from 'react';
import {ChallangeContext} from '../../contexts/ChallangeContex';
import {ThemeContext} from '../../contexts/ThemeContext';

const SelectChallange = () => {
  const theme = useContext(ThemeContext).getTheme();

  console.log ( "theme",theme)
  const {challanges, selected, dispatch} = useContext(ChallangeContext);
  const challangeList = challanges.map((c) => {
    return (
      <option
        key={c.id}
        value={c.id}
      >{`${c.text} | ${c.difficulty} | ${c.text.length}`}</option>
    );
  });
  const selectOnChangeHandler = (e) => {
    dispatch({type: 'SET_SELECTED', selected: Number(e.target.value)});
    //setSelected(Number(e.target.value))
  };
  return (
    <React.Fragment>
      <h5 style={{marginTop: "20px", marginBottom: "20px", color: `${theme.h5}`}}>Testini yapmak istediğiniz metni seçiniz</h5>
      <select
        className="form-control"
        name="chl"
        id="chl"
        value={selected}
        onChange={selectOnChangeHandler}
      >
        {challangeList}
      </select>
    </React.Fragment>
  );
};

export default SelectChallange;
