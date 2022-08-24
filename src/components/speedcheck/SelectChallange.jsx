import React, {useContext} from 'react'
import { ChallangeContext } from '../../contexts/ChallangeContex';

const SelectChallange = () => {
    const {challanges, selected, dispatch} = useContext(ChallangeContext);
    const challangeList = challanges.map(c => {
        return <option key={c.id} value={c.id}>{`${c.text} | ${c.difficulty} | ${c.text.length}`}</option>
    })
    const selectOnChangeHandler = (e) => {
        dispatch({type: 'SET_SELECTED', selected : Number(e.target.value)})
        //setSelected(Number(e.target.value))
    }
    return (
        <select className='form-control' name="chl" id="chl" value={selected} onChange={selectOnChangeHandler}>
            {challangeList}
        </select>
    );
}

export default SelectChallange;