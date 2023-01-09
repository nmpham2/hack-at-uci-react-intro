function Item(props) {
    return (
      <>
        <td>{props.data.name}</td>
        <td>{props.data.deadline}</td>
        <td>{props.data.description}</td>
      </>
    );
  }
  
  export default Item;