import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./commentSlice";

const rootReducers = {
	comment: commentReducer,
};

const store = configureStore({
	reducer: rootReducers,
});

export default store;
