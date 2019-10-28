import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";

export function fetchSmurfs() {
  // this is our "thunk" function. redux-thunk middleware
  // automatically gives us access to the dispatcher as a parameter
  return dispatch => {
    // we can kick off as many actions as we want,
    // whenever we want. allows our action creator to be asyncronous.
    dispatch({ type: FETCH_SMURF_START });

    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
        // Code for handling API response
        console.log("smurfs", res.data)
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data});
    })
    .catch(function() {
        // Code for handling errors
    });
  };
}

