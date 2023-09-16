import { combineReducers } from "@reduxjs/toolkit";
import modals from "../slices/modals";
import user from "../slices/user";
const reducers = {
    modals: modals,
    user: user,
};
const combinedReducer = combineReducers(reducers);
export default combinedReducer;
