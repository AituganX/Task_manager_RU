import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskPage from "./components/TaskPage";
import { changeTask, createTask, editTask, removeTask } from "./actions";

function App(props) {
  const onStatusChange = (id, status) => {
    props.dispatch(editTask(id, { status }));
  };

  // lets create a dispatch method so we can dispatch
  const onCreateTask = ({ title, description }) => {
    props.dispatch(createTask({ title, description }));
  };

  const onRemoveTask = (id) => {
    props.dispatch(removeTask(id));
  };

  const onChangeTask = ({ title, description }) => {
    props.dispatch(changeTask({ title, description }));
  };

  return (
    <>
      {/* we will need to pass the state of our store */}
      <TaskPage
        tasks={props.tasks}
        onStatusChange={onStatusChange}
        onCreateTask={onCreateTask}
        onRemoveTask={onRemoveTask}
        onChangeTask={onChangeTask}
      />
    </>
  );
}

// this is new method
const mapStateToProps = (state) => {
  return {
    // so we create an object tasks and we pass the value - the state gonna be the tasks
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(App);
