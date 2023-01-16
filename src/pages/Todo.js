import Home from "../views/Home";

const todoList = {
  title: "Todo List",
  header1: "Task",
  header2: "Description",
};

function Todo() {
  return <Home listType={todoList} />;
}

export default Todo;
