import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { values: { name: "", age: 0, email: "kunda@gmail.com" } },
  reducers: {
    login: (state, action) => {
      state.values === action.payload;
    },
  },
});

export default userSlice.reducer;
