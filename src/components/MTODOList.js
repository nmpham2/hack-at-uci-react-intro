import { useState } from 'react';
import Item from './Item.js';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { ThemeProvider, createTheme  } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#00363B'
      },
      secondary: {
        main: '#83c5be'
      }
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: 14,
      h1: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        fontSize: 36,
        fontWeight: 'bold',
      }
    }
});

function MTODOList() {
    const header = { name: 'Task', deadline: 'Deadline', description: 'Description'};

    const [taskList, updateTaskList] = useState([
        { name: 'do dishes', deadline: '1/20/2023', description: 'your sink is filled to the brim smh' },
        { name: 'ics53 hw', deadline: '1/12/2023', description: 'this was due a week ago bruh'},
        { name: 'workout', deadline: '1/19/2023', description: 'new years resolution'}
    ]);
    
    var tasksToDelete = [];
    
    function onSelect(value) {
        const index = tasksToDelete.indexOf(value);
        // console.log(value);
        if (index === -1) {
            // if the value is not in tasksToDelete already, add it
            tasksToDelete.push(value);
        } else {
            // if the value is already in tasksToDelete, remove it
            tasksToDelete.splice(index, 1);
        }
        console.log("selected tasks ", tasksToDelete);
    }
    
    function onDelete() {
        console.log("tasks to delete ", tasksToDelete);
        updateTaskList(taskList.filter(task => !(tasksToDelete.includes(task))));
    
        tasksToDelete = [];
        console.log("tasks deleted");
    }

    return (
        <ThemeProvider theme={ theme }>
            <Stack spacing={5} justifyContent="space-evenly" pt={4} px={4}>
                <Typography variant="h1">TODO List</Typography >
                <TableContainer component= { Paper }>
                    <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <Item data={ header }></Item>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { taskList.map((value) => {
                            return (
                                <TableRow key={ value.name } className="Item">
                                    <TableCell><Checkbox onClick={() => onSelect(value) }/></TableCell>
                                    <Item data={ value }></Item>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                
                <Button variant="contained" onClick={ onDelete } sx={{ borderRadius: 8 }}>
                    Delete Completed Tasks
                </Button>
            </Stack>    
        </ThemeProvider>
    );
  }
  
  export default MTODOList;
  