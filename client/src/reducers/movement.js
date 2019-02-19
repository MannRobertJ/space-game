import { CHANGE_MOVEMENT, UPDATE_GAME_SUCCESS } from "../actions/movement";

export default (state = { x: 0, y: 0 }, { type, payload }) => {
  switch (type /* 
    case CHANGE_MOVEMENT:
      return payload; */) {
    case UPDATE_GAME_SUCCESS:
      return {
        ...state,
        [payload.id]: payload
      };

    default:
      return state;
  }
};
