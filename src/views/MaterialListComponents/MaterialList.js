import { useState } from "react";

// Our imports from Material UI! (there's a lot)
import {
  Button,
  Checkbox,
  Input,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

function MaterialList(props) {
  /*
    The MaterialList component takes in an object with 3 values:
    title as a String and 2 headers as Strings then displays them.
    Compare this file with List.js
  */
  const { title, header1, header2 } = props.listType;

  /*
    Here, we are storing our rows as a list which we will later iterate through
    and display in our table. We are also storing col1 and col2 as Strings (these
    are used in our addItem function to store the values the user inputs). The
    rowsToDelete variable is used to store rows the user selects. 
  */
  const [rows, setRows] = useState([]);
  const [col1, setCol1] = useState("");
  const [col2, setCol2] = useState("");
  const [rowsToDelete, setRowsToDelete] = useState([]);

  function addItem() {
    /*
      This function adds a new entry into our rows variable using the 
      values that are inputted into the addItem form. The syntax may look a bit
      funky, but basically we are appending the {col1: col1, col2: col2} object
      into what we already are storing in our rows. We reset col1 and col2 to
      be empty after we've added our value.
    */
    setRows((rows) => [...rows, { col1: col1, col2: col2 }]);
    setCol1("");
    setCol2("");
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
    <Stack spacing={4} pt={4} px={4} textAlign="center">
      <Typography variant="h1">{title}</Typography>
      <Stack direction="row" flexWrap="wrap">
        <Stack
          spacing={4}
          alignItems="center"
          justifyContent="center"
          flexGrow="1"
        >
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>✅</TableCell>
                  <TableCell>{header1}</TableCell>
                  <TableCell>{header2}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((item) => {
                  return (
                    <TableRow key={item.col1}>
                      <TableCell>
                        <Checkbox onClick={() => onSelect(item)} />
                      </TableCell>
                      <TableCell>{item.col1}</TableCell>
                      <TableCell>{item.col2}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            onClick={onDelete}
            sx={{ borderRadius: 10 }}
          >
            Delete Completed Items
          </Button>
        </Stack>

        <Stack spacing={4} alignItems="center" flexGrow="1">
          <h4>New {header1}</h4>
          <Input
            value={col1}
            onChange={(event) => {
              setCol1(event.target.value);
            }}
          />
          <h4>New {header2}</h4>
          <TextField
            multiline
            value={col2}
            onChange={(event) => {
              setCol2(event.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={addItem}
            sx={{ borderRadius: 10 }}
          >
            Add Item
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MaterialList;
