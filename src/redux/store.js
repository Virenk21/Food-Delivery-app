import { createstore, applyMiddleware, compose } from 'redux';
import { configureStore } from "@reduxjs/toolkit";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: {},
});
