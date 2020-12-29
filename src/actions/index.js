import { CHANGE_TASK, CREATE_TASK, EDIT_TASK, REMOVE_TASK } from "./types";
import uuid from "react-uuid";

// first of all we go to actions and create an action
export const editTask = (id, params = {}) => {
  return {
    type: EDIT_TASK,
    payload: {
      id,
      params,
    },
  };
};

export const changeTask = ({ title, description }) => {
  return {
    type: CHANGE_TASK,
    payload: {
      title,
      description,
    },
  };
};

export const createTask = ({ title, description }) => {
  return {
    type: CREATE_TASK,
    payload: {
      id: uuid(),
      title,
      description,
      status: "Не начато",
    },
  };
};

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id,
  };
};
