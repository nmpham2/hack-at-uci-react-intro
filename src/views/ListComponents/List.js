import { useState } from "react";

/* 
  Since this component utilizes CSS rather than Material UI
  components, we have to import our own CSS file.
*/
import "./List.css";

function List(props) {
  /*
    The List component takes in an object with 3 values:
    title as a String and 2 headers as Strings then displays them.
    Compare this file with MaterialList.js.
  */
  const { title, header1, header2 } = props.listType;

  /*
    Here, we are storing our rows as a list which we will later iterate through
    and display in our table. We are also storing addCol1 and addCol2 as Strings (these
    are used in our addItem function to store the values the user inputs). The
    rowsToDelete variable is used to store rows the user selects. 
  */
  const [rows, setRows] = useState([]);
  const [addCol1, setAddCol1] = useState("");
  const [addCol2, setAddCol2] = useState("");
  const [rowsToDelete, setRowsToDelete] = useState([]);

  function addItem() {
    /*
      This function adds a new entry into our rows variable using the 
      values that are inputted into the addItem form. The syntax may look a bit
      funky, but basically we are appending the {addCol1: addCol1, addCol2: addCol2} object
      into what we already are storing in our rows. We reset addCol1 and addCol2 to
      be empty after we've added our value.
    */
    setRows((rows) => [...rows, { addCol1: addCol1, addCol2: addCol2 }]);
    setAddCol1("");
    setAddCol2("");
  }

  function onSelect(row) {
    /*
      This function handles what occurs when a user selects a row in the
      table. 
    */
    let index = rowsToDelete.indexOf(row);
    if (index === -1) {
      // If the value is not in rowsToDelete already, we add it
      setRowsToDelete((rowsToDelete) => [...rowsToDelete, row]);
    } else {
      // If the value is already in rowsToDelete, we remove it
      rowsToDelete.splice(index, 1);
      setRowsToDelete(
        rowsToDelete.filter((row) => !rowsToDelete.includes(row))
      );
    }
  }

  function onDelete() {
    /*
      This function handles what occurs when a user selects the 
      delete button. It removes the items that the user selected from our
      rows variable which causes a re-render and removes the rows from 
      our table. We reset rowsToDelete after to make sure we don't try
      to delete an already deleted row.
    */
    setRows(rows.filter((item) => !rowsToDelete.includes(item)));
    setRowsToDelete([]);
  }

  return (
    <div className="List">
      <h1>{title}</h1>
      <div className="listContainer">
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>✅</th>
                <th>{header1}</th>
                <th>{header2}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item) => {
                return (
                  <tr key={item.addCol1}>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox"
                        onClick={() => onSelect(item)}
                      />
                    </td>
                    <td>{item.addCol1}</td>
                    <td>{item.addCol2}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="btn" onClick={onDelete}>
            DELETE COMPLETED ITEMS
          </button>
        </div>
        <div className="addContainer">
          <form
            onSubmit={(event) => {
              addItem();
              event.preventDefault();
            }}
          >
            <div>
              <h4>New {header1}</h4>
              <input
                type="text"
                value={addCol1}
                onChange={(event) => {
                  setAddCol1(event.target.value);
                }}
              />
            </div>
            <div>
              <h4>New {header2}</h4>
              <textarea
                value={addCol2}
                onChange={(event) => {
                  setAddCol2(event.target.value);
                }}
              />
            </div>
            <input className="btn" type="submit" value="ADD ITEM" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default List;
