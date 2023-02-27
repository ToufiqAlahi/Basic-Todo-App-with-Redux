import { FILTER_COLOR_CHANGED, FILTER_STATUS_CHANGED } from "./actionTypes";

export const filterStatusChanged = (status) => {
  return {
    type: FILTER_STATUS_CHANGED,
    payload: {
      status,
    },
  };
};

export const filterColorChanged = (changeType, color) => {
  return {
    type: FILTER_COLOR_CHANGED,
    payload: {
      changeType,
      color,
    },
  };
};
