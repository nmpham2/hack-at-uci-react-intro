import { useState } from "react";

import {
  Button,
  Checkbox,
  Container,
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
  // The MaterialList component takes in an object with 3 values:
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
