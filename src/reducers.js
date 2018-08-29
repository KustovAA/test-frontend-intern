import { SORT } from 'types';
import * as profiles from 'profiles';

const sort = (a, b, sortType, direction) => {
  localStorage.setItem('direction', direction);
  localStorage.setItem('sortType', sortType);

  const arg_a = a[sortType].toLowerCase().split(/\(|\)/).join('');
  const arg_b = b[sortType].toLowerCase().split(/\(|\)/).join('');
  if (arg_a < arg_b) {
    return direction ? -1 : 1;
  }
  if (arg_a > arg_b) {
    return direction ? 1 : -1;
  }

  return 0;
}

const profiles_toState = profiles.sort((a, b) => sort(
    a, 
    b, 
    localStorage.getItem('sortType') || 'Name', 
    JSON.parse(localStorage.getItem('direction')) ? JSON.parse(localStorage.getItem('direction')) : true
));

const initialState = {
  profiles: profiles_toState,
  sortType: localStorage.getItem('sortType') || 'Name',
  direction: JSON.parse(localStorage.getItem('direction'))
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT:
      return {
        ...state,
        profiles: profiles.sort((a, b) => sort(a, b, action.payload.type, action.payload.direction)),
        sortType: action.payload.type,
        direction: action.payload.direction, 
      };
    default:
      return state;
  }
};
