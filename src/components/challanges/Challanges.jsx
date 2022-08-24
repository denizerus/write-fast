import React from 'react';
import AddChallange from './AddChallange';
import ChallangeList from './ChallangeList';

export const Challanges = () => {
  return (
    <React.Fragment>
      <AddChallange />
      <hr />
      <ChallangeList />
    </React.Fragment>
  );
};
