import { ADD_COMMENT, SORT_OLDEST } from './../constants.js';

export const addNewComment = text => {
  const action = {
    type: ADD_COMMENT,
    text
  }

  return action;
}

export const sortOldest = () => {
  const action = {
    type: SORT_OLDEST
  }

  return action;
}
