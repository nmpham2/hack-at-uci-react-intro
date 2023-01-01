import { useState } from "react";
import { useNavigate } from "react-router-dom";

function addItem(name, description) {
  // TODO
  console.log(name);
  console.log(description);
}

function Add() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div className="Add">
      <h1>This is the add page.</h1>
      <form
        onSubmit={(event) => {
          addItem(name, description);
          event.preventDefault();
          navigate("/home");
        }}
      >
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Description
          <textarea
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Add;
