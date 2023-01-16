import Home from "../views/Home";

const groceryList = {
  title: "Grocery List",
  header1: "Food",
  header2: "Quantity",
};

function Grocery() {
  return <Home listType={groceryList} />;
}

export default Grocery;
