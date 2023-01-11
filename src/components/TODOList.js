import Item from './Item.js';
import { useState } from 'react';
import './TODOList.css';

function TODOList() {
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
        <div className="List-Content">
            <h1>TODO List</h1>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Task</th>
                        <th>Deadline</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    { taskList.map((value) => {
                        return (
                            <tr key={ value.name } className="Item">
                                <td><input type="checkbox" className="Checkbox" onClick={() => onSelect(value) }/></td>
                                <Item data={ value }></Item>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button className="Delete-Button" onClick={ onDelete }>Delete Completed Tasks</button>
        </div>
    );
  }
  
  export default TODOList;