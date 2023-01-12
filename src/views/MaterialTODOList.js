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

function MaterialTODOList() {
  const [taskList, updateTaskList] = useState([
    {
      name: "do dishes",
      deadline: "1/20/2023",
      description: "your sink is filled to the brim smh",
    },
    {
      name: "ics53 hw",
      deadline: "1/12/2023",
      description: "this was due a week ago bruh",
    },
    {
      name: "workout",
      deadline: "1/19/2023",
      description: "new years resolution",
    },
  ]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const tasksToDelete = [];

  function addTask() {
    updateTaskList((taskList) => [
      ...taskList,
      { name: name, description: description },
    ]);
    setName("");
    setDescription("");
  }

  function onSelect(task) {
    let index = tasksToDelete.indexOf(task);

    if (index === -1) {
      // if the value is not in tasksToDelete already, add it
      tasksToDelete.push(task);
    } else {
      // if the value is already in tasksToDelete, remove it
      tasksToDelete.splice(index, 1);
    }
  }

  function onDelete() {
    updateTaskList(taskList.filter((task) => !tasksToDelete.includes(task)));
    tasksToDelete = [];
  }

  return (
    <Stack spacing={4} pt={4} px={4} alignItems="center">
      <Typography variant="h1">TODO List</Typography>
      <Stack direction="row" spacing={15}>
        <Stack spacing={4}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Task</TableCell>
                  <TableCell>Deadline</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {taskList.map((task) => {
                  return (
                    <TableRow key={task.name}>
                      <TableCell>
                        <Checkbox onClick={() => onSelect(task)} />
                      </TableCell>
                      <TableCell>{task.name}</TableCell>
                      <TableCell>{task.deadline}</TableCell>
                      <TableCell>{task.description}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" onClick={onDelete} sx={{ borderRadius: 10 }}>
            Delete Completed Tasks
          </Button>
        </Stack>
        
        <Stack spacing={4}>
          <h4>New Task</h4>
          <Input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <h4>New Description</h4>
          <TextField
            multiline
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <Button variant="contained" onClick={addTask} sx={{ borderRadius: 10 }}>
            Add Task
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MaterialTODOList;
