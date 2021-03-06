import {GET_PEOPLE_SUCCESS, GET_PEOPLE_FAILURE} from '../actions/types';

const initialState = {
  people: [],
  loading: true,
  error: '',
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        people: action.payload,
        loading: false,
      };
    case GET_PEOPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default peopleReducer;
