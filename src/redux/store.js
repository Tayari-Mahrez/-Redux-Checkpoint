import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import todosReducer from "./todo/todoReducer";
import { thunk } from "redux-thunk";
const store = createStore(todosReducer,applyMiddleware(logger,thunk));
export default store