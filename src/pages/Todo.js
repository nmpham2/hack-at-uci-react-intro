import Home from "../views/Home";

/* 
  We are storing our title and headers into an object for easy
  deconstruction when we pass them as props to our Home component.
  See Grocery.js for comparison.
*/
const todoList = {
  title: "Todo List",
  header1: "Task",
  header2: "Description",
};

function Todo() {
  return <Home listType={todoList} />;
}

export default Todo;
