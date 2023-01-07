import Item from './Item.js';

const taskList = [
    { name: 'do dishes', description: 'your sink is filled to the brim smh' }
];

const tasksToDelete = [];

function onSelect() {
    
}

function onDelete() {

}

function TODOList() {
    return (
        <div className="List">
            <table>
                <tr>
                    <td>Task</td>
                    <td>Description</td>
                </tr>
                { taskList.map((value) => {
                    return (
                        <Item data={ value }></Item>
                    )
                })}
            </table>
        </div>
    );
  }
  
  export default TODOList;
  