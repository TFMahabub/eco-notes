import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  value: string;
}

const initialState: StateType = {
  value: "top",
};

const BlogFilter = createSlice({
  name: "blogFilter",
  initialState,
  reducers: {
    setFilter: (state, { payload }: { payload: string }) => {
      state.value = payload;
    },
  },
});

export const { setFilter } = BlogFilter.actions;

export default BlogFilter.reducer;
