import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favourites";
import queryReducer from "../reducers/query";
import jobsReducer from "../reducers/jobs";

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  search: queryReducer,
  job: jobsReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
