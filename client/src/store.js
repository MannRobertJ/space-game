/* import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import { storeJwt, socketIo } from "./middleware";
import SocketIO from "./socketio";
import io from "socket.io-client";

const reducer = combineReducers(reducers);

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f;

//const socket = new SocketIO()

const enhancer = compose(
  applyMiddleware(ReduxThunk, storeJwt, socketIo(socket)),
  devTools
);

const store = createStore(reducer, enhancer);

const socket = io.connect("http://localhost4000:");
socket.connect("action", payload => store.dispatch(payload));

// when JWT was coming from localStorage, connect via websockets
const initialCurrentUser = store.getState().currentUser;
if (initialCurrentUser) {
  socket.connect(store.dispatch, initialCurrentUser.jwt);
}

export default store; */

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";

const reducer = combineReducers(reducers);

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const enhancer = compose(
  applyMiddleware(ReduxThunk),
  devTools
);
const store = createStore(reducer, enhancer);

export default store;
