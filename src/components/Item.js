import TableCell from '@mui/material/TableCell';

function Item(props) {
    return (
      <>
        <TableCell>{ props.data.name }</TableCell>
        <TableCell>{ props.data.deadline }</TableCell>
        <TableCell>{ props.data.description }</TableCell>
      </>
    );
  }
  
  export default Item;