import {GET_PEOPLE} from '../actions/types';

const initialState = {
  people: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default peopleReducer;
