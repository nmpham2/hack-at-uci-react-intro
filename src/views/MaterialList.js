import { useState } from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function MaterialList(props) {
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
        <Stack spacing={4} pt={4} px={4} alignItems="center">
            <Typography variant="h1">{ title }</Typography>
            <Stack direction="row" spacing={15}>
                <Stack spacing={4}>
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>✅</TableCell>
                        <TableCell>{ header1 }</TableCell>
                        <TableCell>{ header2 }</TableCell>
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
                <Button variant="contained" onClick={onDelete} sx={{ borderRadius: 10 }}>
                    Delete Completed Items
                </Button>
                </Stack>
                
                <Stack spacing={4}>
                <h4>New { header1 }</h4>
                <Input
                    value={col1}
                    onChange={(event) => {
                    setCol1(event.target.value);
                    }}
                />
                <h4>New { header2 }</h4>
                <TextField
                    multiline
                    value={col2}
                    onChange={(event) => {
                    setCol2(event.target.value);
                    }}
                />
                <Button variant="contained" onClick={addItem} sx={{ borderRadius: 10 }}>
                    Add Item
                </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default MaterialList;
