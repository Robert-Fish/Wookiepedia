import {GET_PEOPLE} from '../actions/types';

const initialState = {
  people: [],
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default peopleReducer;
