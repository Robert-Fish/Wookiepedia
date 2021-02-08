import {GET_SPECIES_FAILURE, GET_SPECIES_SUCCESS} from '../actions/types';

const initialState = {
  species: [],
  loading: true,
  error: '',
};

const speciesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPECIES_SUCCESS:
      return {
        ...state,
        species: action.payload,
        loading: false,
      };
    case GET_SPECIES_FAILURE:
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

export default speciesReducer;
