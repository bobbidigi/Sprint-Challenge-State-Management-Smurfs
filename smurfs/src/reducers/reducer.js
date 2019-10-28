import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_ERROR,
  } from "../actions/actions";

  const initialState = {
    // our "success" state
    smurfs: [],
    // want to make sure we account for all possible states,
    // including the loading and error states
    isLoading: false,
    error: null,
    location: '',
    type: ''
  };

  export function reducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_SMURF_START:
            return {
                ...state,
                isLoading: true
              };
      case FETCH_SMURF_SUCCESS:
          return {
              ...state,
              isLoading: false,
              smurfs: [...action.payload]
          }
        case FETCH_SMURF_ERROR:
                return {
                    ...state,
                    error: action.payload,
                    isLoading: false
                  };
        // case ADD_SMURF:
        //     return {
        //         ...state,
        //         smurfs: [...action.payload]
        //     }          
        default:
            return state;    
    }
    }