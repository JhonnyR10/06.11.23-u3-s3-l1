import { GET_JOBS } from "../actions";

const initialState = {
  stock: [], // questo array ospiterà i libri risultanti dalla fetch effettuata su /food-books
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        stock: action.payload, // un array pieno di libri!
      };

    default:
      return state;
  }
};

export default jobsReducer;
