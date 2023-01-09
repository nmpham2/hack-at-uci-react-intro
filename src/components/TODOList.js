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
        const index = taskList.indexOf(value);
        // console.log(value);
        if (index === -1) {
            const removeIndex = tasksToDelete.indexOf(2);
            tasksToDelete.splice(removeIndex, 1);
        } else {
            tasksToDelete.push(value);
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
                    { taskList.map((value, index) => {
                        return (
                            <tr key={ index } className="Item">
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
  