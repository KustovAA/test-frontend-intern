import { SORT } from 'types';

const initialState = {
  sortType: localStorage.getItem('sortType') || 'Name',
  direction: JSON.parse(localStorage.getItem('direction'))
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT:
      return {
        ...state,
        sortType: action.payload.type,
        direction: action.payload.direction, 
      };
    default:
      return state;
  }
};
