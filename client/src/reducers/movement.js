import { CHANGE_MOVEMENT, UPDATE_GAME_SUCCESS } from "../actions/movement";

export default function(state = {}, { type, payload }) {
  switch (type) {
    case UPDATE_GAME_SUCCESS:
      console.log(type, payload);
      return {
        ...state,
        [payload.id]: payload
      };

    default:
      return state;
  }
}
