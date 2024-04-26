import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, updateEmployee } from "../app/redux/employeeSlice";

function Displaytodo() {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editedEmployee, setEditedEmployee] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  const handleUpdate = (id) => {
    if (!editedEmployee) return;
    dispatch(updateEmployee({ id, ...editedEmployee }));
    setEditedEmployee(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="render-div-MP">
      {todoList.map((item) => (
        <div className="render-div" key={item.id}>
          <p>Id : {item.id}</p>
          {editedEmployee && editedEmployee.id === item.id ? (
            <>
              <input
                type="text"
                name="name"
                value={editedEmployee.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="position"
                value={editedEmployee.position}
                onChange={handleChange}
              />
            </>
          ) : (
            <>
              <p>Employee name : {item.name}</p>
              <p>Position : {item.position}</p>
            </>
          )}
          <div className="button-group">
            <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
            {editedEmployee && editedEmployee.id === item.id ? (
              <button className="save-button"onClick={() => handleUpdate(item.id)}>Save</button>
            ) : (
              <button className="edit-button" onClick={() => setEditedEmployee(item)}>Edit</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Displaytodo;
