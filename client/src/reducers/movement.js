import { CHANGE_MOVEMENT } from "../actions/movement";

export default (state = { x: 0, y: 0 }, action = {}) => {
  switch (action.type) {
    case CHANGE_MOVEMENT:
      return action.movement;
    default:
      return state;
  }
};
