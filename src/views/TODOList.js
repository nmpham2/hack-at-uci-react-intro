import { useState } from "react";

import "./TODOList.css";

function TODOList() {
  const [taskList, updateTaskList] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tasksToDelete, setTasksToDelete] = useState([]);

  function addTask() {
    updateTaskList((taskList) => [
      ...taskList,
      { name: name, description: description },
    ]);
    setName("");
    setDescription("");
  }

  function onSelect(task) {
    let index = tasksToDelete.indexOf(task);
    if (index === -1) {
      // if the value is not in tasksToDelete already, add it
      setTasksToDelete((tasksToDelete) => [...tasksToDelete, task]);
    } else {
      // if the value is already in tasksToDelete, remove it
      tasksToDelete.splice(index, 1);
      setTasksToDelete(
        tasksToDelete.filter((task) => !tasksToDelete.includes(task))
      );
    }
  }

  function onDelete() {
    updateTaskList(taskList.filter((task) => !tasksToDelete.includes(task)));
    tasksToDelete = [];
  }

  return (
    <div className="list-content">
      <h1>TODO List</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task) => {
            return (
              <tr key={task.name}>
                <td>
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick={() => onSelect(task)}
                  />
                </td>
                <td>{task.name}</td>
                <td>{task.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <form
        onSubmit={(event) => {
          addTask();
          event.preventDefault();
        }}
      >
        <h4>New Task</h4>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <h4>New Description</h4>
        <textarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input className="button" type="submit" value="Add Task" />
      </form>
      <button className="button" onClick={onDelete}>
        Delete Completed Tasks
      </button>
    </div>
  );
}

export default TODOList;
