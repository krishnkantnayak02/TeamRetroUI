import { createStore, combineReducers } from "redux"

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
};

const store = createStore(
    combineReducers(),
    applyMiddleware(myLogger,createLogger())
);

store.subscribe(() => {
    console.log("store state is ")
})
