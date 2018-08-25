import {
  SORT_BY_NAME,
  SORT_BY_EMAIL,
  SORT_BY_PHONE,
  SORT_BY_COMPANY
} from 'types';

const initialState = {
  sortType: localStorage.getItem('sortType') || 'Name',
  direction: JSON.parse(localStorage.getItem('direction'))
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_BY_NAME:
      return {
        ...state,
        sortType: 'Name',
        direction: action.payload
      };
    case SORT_BY_EMAIL:
      return {
        ...state,
        sortType: 'Email',
        direction: action.payload
      };
    case SORT_BY_PHONE:
      return {
        ...state,
        sortType: 'Phone',
        direction: action.payload
      };
    case SORT_BY_COMPANY:
      return {
        ...state,
        sortType: 'Company',
        direction: action.payload
      };
    default:
      return state;
  }
};
