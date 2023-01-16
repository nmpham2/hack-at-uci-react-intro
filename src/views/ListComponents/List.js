import { useState } from "react";

import "./List.css";

function List(props) {
  // The List component takes in an object with 3 values:
  // title as a String and 2 headers as Strings
  const { title, header1, header2 } = props.listType;

  const [rows, setRows] = useState([]);
  const [col1, setCol1] = useState("");
  const [col2, setCol2] = useState("");
  const [rowsToDelete, setRowsToDelete] = useState([]);

  function addItem() {
    setRows((rows) => [...rows, { col1: col1, col2: col2 }]);
    setCol1("");
    setCol2("");
  }

  function onSelect(row) {
    let index = rowsToDelete.indexOf(row);
    if (index === -1) {
      // if the value is not in rowsToDelete already, add it
      setRowsToDelete((rowsToDelete) => [...rowsToDelete, row]);
    } else {
      // if the value is already in rowsToDelete, remove it
      rowsToDelete.splice(index, 1);
      setRowsToDelete(
        rowsToDelete.filter((row) => !rowsToDelete.includes(row))
      );
    }
  }

  function onDelete() {
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
                  <tr key={item.col1}>
                    <td>
                      <input
                        type="checkbox"
                        className="checkbox"
                        onClick={() => onSelect(item)}
                      />
                    </td>
                    <td>{item.col1}</td>
                    <td>{item.col2}</td>
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
                value={col1}
                onChange={(event) => {
                  setCol1(event.target.value);
                }}
              />
            </div>
            <div>
              <h4>New {header2}</h4>
              <textarea
                value={col2}
                onChange={(event) => {
                  setCol2(event.target.value);
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
