import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";
export const userThem = createSlice({
  name: "them",
  initialState: { value: initialStateValue },
  reducers: {
    ChangeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { ChangeColor } = userThem.actions;

export default userThem.reducer;
