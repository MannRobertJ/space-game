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
  type: UPDATE_GAME_SUCCESS
});

export const changeMovement = (gameId, x, y) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.currentUser.jwt;

  if (isExpired(jwt)) return dispatch(logout());

  request
    .patch(`${baseUrl}/games/${gameId}`)
    .set("Authorization", `Bearer ${jwt}`)
    .send({ horizontal: x, vertical: y })
    .then(_ => dispatch(updateGameSuccess()))
    .catch(err => console.error(err));
};
