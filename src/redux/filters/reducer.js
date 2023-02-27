import { FILTER_COLOR_CHANGED, FILTER_STATUS_CHANGED } from "./actionTypes";

import initialState from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case FILTER_COLOR_CHANGED:
      const { changeType, color } = action.payload;

      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "removed":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filterReducer;
