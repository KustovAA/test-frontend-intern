import {
  SORT_BY_NAME,
  SORT_BY_EMAIL,
  SORT_BY_PHONE,
  SORT_BY_COMPANY
} from 'types';

export const sortByName = direction => ({
  type: SORT_BY_NAME,
  payload: direction
});

export const sortByEmail = direction => ({
  type: SORT_BY_EMAIL,
  payload: direction
});

export const sortByPhone = direction => ({
  type: SORT_BY_PHONE,
  payload: direction
});

export const sortByCompany = direction => ({
  type: SORT_BY_COMPANY,
  payload: direction
});
