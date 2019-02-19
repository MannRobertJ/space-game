import * as request from "superagent";
import { baseUrl } from "../constants";
import { logout } from "./users";
import { isExpired } from "../jwt";

export const CHANGE_MOVEMENT = "CHANGE_MOVEMENT";

export const UPDATE_GAME_SUCCESS = "UPDATE_GAME_SUCCESS";

const changeMovementAction = (x, y) => {
  return { type: CHANGE_MOVEMENT, movement: { x, y } };
};

// Using Thunk here to dispatch action to make later communication through the socket simpler.

const updateGameSuccess = () => ({
  type: "MOVEMENT_CHANGED"
});
/* 
export const changeMovement = (gameId, x, y) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  console.log(gameId, x, y);

  request
    .patch(`${baseUrl}/move/${gameId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .send({ horizontal: x, vertical: y })
    .then(_ => dispatch(updateGameSuccess()))
    .catch(err => console.error(err));
}; */

export const changeMovement = (gameId, x, y) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  console.log(jwt);

  request
    .patch(`${baseUrl}/move/${gameId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .send({ horizontal: x, vertical: y })
    .catch(err => console.error("oh no!", err));
};
