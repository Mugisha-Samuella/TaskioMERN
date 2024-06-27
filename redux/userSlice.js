import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    deleteData: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    editData: (state, action) => {
      const { id, newData } = action.payload;
      state.data[id] = newData;
    },
  },
});

export const { addData, deleteData, editData } = userSlice.actions;
export default userSlice.reducer;
