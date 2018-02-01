import {render} from "react-dom";
import React from "react";
import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import {Provider} from "react-redux";

import App from "./js/components/App";

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                age: action.payload
            };
            break;
    }
    return state;
};

const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
};

const store = createStore(
    combineReducers({math: mathReducer, user: userReducer}),
    {},
    applyMiddleware(myLogger,createLogger())
);

store.subscribe(() => {
    // console.log("Store updated!", store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
window.document.getElementById('root'));