import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TASK_STATUSES = ["Не начато", "В процессе", "Завершено"];

// we need to add the value of reducer
const Task = (props) => {
  // now we need to create the method to use functionality of options
  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }

  function onRemoveTask() {
    props.onRemoveTask(props.task.id);
  }

  return (
    // we need to pass the state of our title and description
    <div className="border rounded">
      <div>
        <form onChange={onStatusChange} className="m-2">
          <select defaultValue={props.task.status}>
            {TASK_STATUSES.map((status) => (
              <option value={status} key={status}>
                {status}
              </option>
            ))}
          </select>
        </form>
        <h2
          className="card-title mt-3 text-uppercase px-2"
          style={{ color: "#3a4" }}
        >
          {props.task.title}
        </h2>
        <p className="card-text mb-3 text-muted font-weight-bold px-2">
          {props.task.description}
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="float-right m-2"
            style={{ color: "tomato", cursor: "pointer" }}
            onClick={() => onRemoveTask(props.task.id)}
          />
        </p>
        {/* <FontAwesomeIcon
          icon={faTrashAlt}
          className="float-right m-3"
          style={{ color: "tomato", cursor: "pointer"}}
          onClick={() => onRemoveTask(props.task.id)}
        /> */}
      </div>
    </div>
  );
};

export default Task;
