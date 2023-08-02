import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
  title: string;
  tags: string[];
  description: string;
}

const initialState: InitialStateTypes = {
  title: "",
  tags: [],
  description: "",
};

export const CreateBlogFormSlice = createSlice({
  name: "blogForm",
  initialState,
  reducers: {
    setFormTitle: (state, { payload }) => {
      state.title = payload;
    },
    setFormDescription: (state, { payload }) => {
      state.description = payload;
    },
    setFormTags: (state, { payload }) => {
      state.tags = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFormTitle, setFormDescription, setFormTags } =
  CreateBlogFormSlice.actions;

export default CreateBlogFormSlice.reducer;
