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
  // TODO: Reuse the Home component to render the list view
  return <h1>This is the Grocery page!</h1>;
}

export default Grocery;
