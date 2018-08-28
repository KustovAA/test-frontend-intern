import { SORT } from 'types';

export const sort = ({ type, direction }) => ({
  type: SORT,
  payload: { type, direction }
});
