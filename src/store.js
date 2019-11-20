import { createStore , applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Intial state of the App
const intialState = {};
const middleware = [thunk];

// Global Store for the App
const store = createStore(
    rootReducer,
    intialState,
    applyMiddleware(...middleware)
)

export default store;



