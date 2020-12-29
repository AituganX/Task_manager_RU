import React, { useState } from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = ["Не начато", "В процессе", "Завершено"];

const TasksPage = (props) => {
  const [cardForm, showCardForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeTask = (e, y) => {
    setTitle(e.target.value);
    setDescription(y.target.value);
  };

  const formToggler = () => {
    showCardForm(!cardForm);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    showCardForm(false);
  };

  // now we will create task method
  const onCreateTask = (e) => {
    e.preventDefault();
    props.onCreateTask({
      title,
      description,
    });
    resetForm();
  };

  // now we need to create task render method
  const renderTaskLists = () => {
    const { tasks } = props;
    return TASK_STATUSES.map((status, id) => {
      const statusTasks = tasks.filter((task) => task.status === status);
      return (
        <div className="col-md-3 card m-2 p-0" key={id}>
          <TaskList
            key={status}
            status={status}
            tasks={statusTasks}
            onStatusChange={props.onStatusChange}
            onRemoveTask={props.onRemoveTask}
            onChangeTask={props.onChangeTask}
          />
        </div>
      );
    });
  };

  return (
    <div className="container my-5">
      <div className="jumbotron py-3">
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-success m-3" onClick={formToggler}>
              Создать заметку
            </button>
          </div>
          <div className="col-md-8">
            <h2 className="display-4 d-flex justify-content-around text-uppercase m-3">
              Заметки
            </h2>
          </div>
        </div>
        {/* Input Forms */}
        {cardForm && (
          <form onSubmit={onCreateTask}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Название"
                onChange={onChangeTitle}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Содержимое"
                onChange={onChangeDescription}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Добавить
            </button>
          </form>
        )}
      </div>
      <div
        className="row d-flex justify-content-center position-relative"
        style={{ background: "#e9ecef" }}
      >
        {renderTaskLists()}
      </div>
    </div>
  );
};

export default TasksPage;
