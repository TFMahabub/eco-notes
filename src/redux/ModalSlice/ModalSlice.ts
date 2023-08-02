import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
  addComment: boolean;
}

const initialState: InitialStateTypes = {
  addComment: false,
};

const ModalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setModalSlice: (state) => {
      state.addComment = !state.addComment;
    },
  },
});

export const { setModalSlice } = ModalSlice.actions;

export default ModalSlice.reducer;
