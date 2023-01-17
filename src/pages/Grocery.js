import Home from "../views/Home";

/* 
  We are storing our title and headers into an object for easy
  deconstruction when we pass them as props to our Home component.
  See Todo.js for comparison.
*/
const groceryList = {
  title: "Grocery List",
  header1: "Food",
  header2: "Quantity",
};

function Grocery() {
  return <Home listType={groceryList} />;
}

export default Grocery;
