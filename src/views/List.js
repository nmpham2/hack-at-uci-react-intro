import { useState } from "react";

import "./List.css";

function List(props) {
    // The List component takes in an object with 3 values:
    // title as a String and 2 headers as Strings
    console.log(props);

    const title = props.data.title;
    const header1 = props.data.header1;
    const header2 = props.data.header2;

    console.log(title, header1, header2);

    const [rows, updateRows] = useState([]);
    const [col1, setCol1] = useState("");
    const [col2, setCol2] = useState("");
    const [rowsToDelete, setRowsToDelete] = useState([]);

    function addItem() {
        updateRows((rows) => [
        ...rows,
        { col1: col1, col2: col2 },
        ]);
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
        updateRows(rows.filter((item) => !rowsToDelete.includes(item)));
        setRowsToDelete([]);
    }

    return (
        <div className="list">
        <h1>{ title }</h1>
        <div className="list-content">
            <div className="table">
            <table>
                <thead>
                <tr>
                    <th>✅</th>
                    <th>{ header1 }</th>
                    <th>{ header2 }</th>
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
            <button className="button" onClick={onDelete}>
                Delete Completed Items
            </button>
            </div>
            
            <div className="mini-container">
            <form
                onSubmit={(event) => {
                addItem();
                event.preventDefault();
                }}
            >
                <div>
                <h4>New { header1 }</h4>
                <input
                    type="text"
                    value={col1}
                    onChange={(event) => {
                    setCol1(event.target.value);
                    }}
                />
                </div>
                <div>
                <h4>New { header2 }</h4>
                <textarea
                    value={col2}
                    onChange={(event) => {
                    setCol2(event.target.value);
                    }}
                />
                </div>
                <input className="button self" type="submit" value="Add Item" />
            </form>
            </div>
        </div>
        </div>
    );
}

export default List;
