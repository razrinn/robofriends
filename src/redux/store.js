import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchRobots, requestRobots } from "./reducers";

const reducers = combineReducers({ searchRobots, requestRobots });
const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

export default store;
