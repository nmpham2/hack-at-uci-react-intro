function Item(props) {
    return (
      <tr className="Item">
        <td>{props.data.name}</td>
        <td>{props.data.description}</td>
      </tr>
    );
  }
  
  export default Item;