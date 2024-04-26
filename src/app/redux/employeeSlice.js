import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: nanoid(), name: "Saradha.R", position: "FrontEnd developer" },
  { id: nanoid(), name: "Madhu.R", position: "BackEnd developer" },
  { id: nanoid(), name: "Ramesh.N", position: "UI/UX Designer" },
  { id: nanoid(), name: "Dhanam.B", position: "HR" },
  { id: nanoid(), name: "Santhosh.D", position: "BackEnd developer" },
  { id: nanoid(), name: "Indhu.D", position: "Team Leader" },
  { id: nanoid(), name: "Gokul.p", position: "UI/UX Designer" },
  { id: nanoid(), name: "Joys.J", position: "Team Leader" },
];

const employeeSlice = createSlice({
  name: "Employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const { id, name, position } = action.payload;
      state.push({ id: id || nanoid(), name, position });
    },
    deleteEmployee: (state, action) => {
      const employeeIndex = state.findIndex((employee) => employee.id === action.payload);
      if (employeeIndex !== -1) {
        state.splice(employeeIndex, 1);
      }
    },
    updateEmployee: (state, action) => {
      const { id, name, position } = action.payload;
      const employee = state.find((employee) => employee.id === id);
      if (employee) {
        employee.name = name;
        employee.position = position;
      }
    },
  },
});

export const { addEmployee, deleteEmployee, updateEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
