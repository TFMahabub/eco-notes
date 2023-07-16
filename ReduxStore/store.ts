import { configureStore } from "@reduxjs/toolkit";
import BlogFilterSlice from "../features/BlogFilter/BlogFilterSlice";
import CreateBlogFormSlice from "../features/CreateBlog/CreateBlogSlice";
import NavBarSlice from "../features/NavbarSlice/NavBarSlice";

export const store = configureStore({
  reducer: {
    BlogFilter: BlogFilterSlice,
    NavbarSlice: NavBarSlice,
    BlogForm: CreateBlogFormSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
