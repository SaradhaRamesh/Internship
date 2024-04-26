const { configureStore } = require("@reduxjs/toolkit");
import employeeSlice from "./employeeSlice";
const store = configureStore({
  reducer: {
    todos: employeeSlice,
  },
});
export default store;
