import { CREATE_TASK, EDIT_TASK, REMOVE_TASK } from "../actions/types";

const initialState = [
  // {
  //   id: 1,
  //   title: "Learn ReactJS",
  //   description: "Let's learn ReactJS today!",
  //   status: "In progress",
  // },
  // {
  //   id: 2,
  //   title: "Learn Redux",
  //   description: "Let's learn Redux today!",
  //   status: "In progress",
  // },
  // {
  //   id: 3,
  //   title: "Learn anti-bamboo technic",
  //   description: "Let's learn anti-bamboo technic today!",
  //   status: "In progress",
  // },
];

const tasks = (state = { tasks: initialState }, action) => {
  //                          This is if else version
  // if (action.type === EDIT_TASK) {
  //   const { payload } = action;
  //   return {
  //     tasks: state.tasks.map((task) => {
  //       if (task.id === payload) {
  //         return Object.assign({}, task, payload.params);
  //       }
  //       return task;
  //     }),
  //   };
  // }
  //                             SWITCH VERSION
  const { payload } = action;
  switch (action.type) {
    case EDIT_TASK: {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === payload.id) {
            return Object.assign({}, task, payload.params);
          }
          return task;
        }),
      };
    }
    case CREATE_TASK: {
      return {
        tasks: state.tasks.concat(action.payload),
      };
    }
    case REMOVE_TASK: {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default tasks;
