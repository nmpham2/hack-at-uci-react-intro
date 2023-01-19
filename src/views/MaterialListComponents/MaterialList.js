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
      TODO: This function adds a new entry into our rows variable using the 
      values that are inputted into the addItem form.

      (3 lines of code)

      HINT: You need to use setRows to change the rows on the table
    */
  }

  function onSelect(row) {
    /*
      TODO: This function handles what occurs when a user selects a row in the
      table.

      (~7 lines of code)

      HINT: Selecting rows indicate that we want to potentially delete items in our list.
      Use rowsToDelete and setRowsToDelete to track which items are selected.
    */
  }

  function onDelete() {
    /*
      TODO: This function handles what occurs when a user selects the 
      delete button. It removes the items that the user selected from our
      rows variable which causes a re-render and removes the rows from 
      our table.

      (2 lines of code)

      HINT: You need to use setRows to change the rows on the table
    */
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
                  <TableCell>Not a good header</TableCell>
                  <TableCell>Also not a good header</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((item) => {
                  return (
                    <TableRow key={item.addCol1}>
                      <TableCell>
                        <Checkbox onClick={() => onSelect(item)} />
                      </TableCell>
                      <TableCell>{item.addCol1}</TableCell>
                      <TableCell>{item.addCol2}</TableCell>
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
            value={addCol1}
            onChange={(event) => {
              setAddCol1(event.target.value);
            }}
          />
          <h4>New {header2}</h4>
          <TextField
            multiline
            value={addCol2}
            onChange={(event) => {
              setAddCol2(event.target.value);
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
