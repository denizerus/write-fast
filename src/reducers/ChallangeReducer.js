export const ChallangeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CHALLANGE':
        let newChallange = {
            ...action.challange, id : state.index
        }
        return {
            ...state,
            challanges: [...state.challanges, newChallange],
            index : state.index + 1
        }
    case 'SET_SELECTED':
      return {...state, selected: action.selected};
      default:
        break;
  }
};
