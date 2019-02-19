export const CHANGE_MOVEMENT = "CHANGE_MOVEMENT";

const changeMovementAction = (x, y) => {
  return { type: CHANGE_MOVEMENT, movement: { x, y } };
};

// Using Thunk here to dispatch action to make later communication through the socket simpler.

export const changeMovement = (x, y) => dispatch => {
  dispatch(changeMovementAction(x, y));
};
