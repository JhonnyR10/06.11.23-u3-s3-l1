export const ADD_TO_FAV = "ADD_TO_FAV";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const SET_QUERY = "SET_QUERY ";
export const GET_JOBS = "GET_JOBS";

export const addToFavAction = (data) => {
  return {
    type: ADD_TO_FAV,
    payload: data,
  };
};

export const removeFromFavAction = (i) => {
  return {
    type: REMOVE_FROM_FAV,
    payload: i,
  };
};

export const setQueryAction = (query) => {
  return {
    type: SET_QUERY,
    payload: query,
  };
};

export const getJobsAction = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search="
      );
      if (resp.ok) {
        let fetchedJobs = await resp.json();
        dispatch({
          type: GET_JOBS,
          payload: fetchedJobs,
        });
      } else {
        throw new Error("errore nel recupero dei libri");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
