function Item(props) {
  return (
    <div className="Item">
      <h2>{props.data.name}</h2>
      <p>{props.data.description}</p>
    </div>
  );
}

export default Item;
