import { createSlice } from "@reduxjs/toolkit";

const crudOpersions = createSlice({
  initialState: [
    {
      address: "snagasr",
      date: "2023-07-17",
      email: "dipakkhandla1712@gmail.com",
      id: 1689509695028,
      lastname: "dalwadi",
      mobile: "9985965695",
      name: "Dipak khandla",
    },
  ],
  name: "yyyy",
  reducers: {
    addItem(state, action) {
      // state.push(action.payload)
      return [...state, action.payload];
    },

    editItem(state, action) {
      const { name, email, id, lastname, mobile, date } = action.payload;
      const existingUser = state.find((user) => user.id == id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.lastname = lastname;
        existingUser.date = date;
        existingUser.mobile = mobile;
      }
    },
    userDeleted(state, action) {
      const existingUser = state.find((user) => user.id == action.payload);
      if (existingUser) {
        return state.filter((user) => user.id != action.payload);
      }
    },
  },
});
export const { addItem, editItem, userDeleted } = crudOpersions.actions;
export default crudOpersions.reducer;
