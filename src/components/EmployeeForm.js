import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../app/redux/employeeSlice"; 

function AddEmployee() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || position.trim() === "") {
      alert("Please enter valid name and position");
      return;
    }
    dispatch(addEmployee({ name, position }));
    setName("");
    setPosition("");
  };

  return (
    <form className="add-employee" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Enter Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
      <button className="save-button" type="submit">Add Employee</button>
    </form>
  );
}

export default AddEmployee;
