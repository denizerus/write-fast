import React, {useContext} from 'react';
import { ChallangeContext } from '../../contexts/ChallangeContex';
import {ScoreTypes} from '../data/Types';
import ScoreCard from './ScoreCard';

const Score = ({values}) => {
  const {addResult, selected} = useContext(ChallangeContext);
  const clickHandler = () => {
    addResult({id : new Date().getTime(), challangeId : selected, scores: values})
  }
  return (
    <React.Fragment>
      <div className="card-deck">
        {Object.entries(values).map(([key, value]) => {
          return <ScoreCard type={ScoreTypes[key]} key={key} value={value} />;
        })}
      </div>
      <button className="btn btn-outline-info btn-block" onClick={clickHandler}>KAYDET</button>
    </React.Fragment>
  );
};

export default Score;
