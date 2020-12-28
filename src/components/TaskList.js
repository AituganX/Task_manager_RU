import React from "react";
import Task from "./Task";

// we gonna write properties of title, descriprion and we gonna reach the state of the store with props
const TaskList = (props) => {
  return (
    <div>
      <div className="card-header text-uppercase text-center font-weight-bold">
        {props.status}
      </div>
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onStatusChange={props.onStatusChange}
          onRemoveTask={props.onRemoveTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
