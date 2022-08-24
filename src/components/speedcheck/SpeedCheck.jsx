import React, {Component} from 'react';
import Info from './Info';
import ChallangeInput from './ChallangeInput'
import Score from './Score';
import SelectChallange from './SelectChallange';

const initState = {
  result : null
}

class SpeedCheck extends Component {
  state = initState

  setResult = (result) => {
    this.setState({
      result
    })
  }
  render() {
    const {result} = this.state;
    return (
      <React.Fragment>
        <SelectChallange/>
        <hr/>
        <Info/>
        <hr />
        <ChallangeInput setResult={this.setResult}/>
        <hr />
        {result !== null ? <Score values={this.state.result}/> : ""}
      </React.Fragment>
    );
  }
}

export default SpeedCheck;
