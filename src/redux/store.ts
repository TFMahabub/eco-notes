import { configureStore } from "@reduxjs/toolkit";
import BlogFilterSlice from "./BlogFilter/BlogFilterSlice";
import NavBarSlice from "./NavbarSlice/NavBarSlice";
import { api } from "./api/apiSlice";
// ...

export const store = configureStore({
  reducer: {
    BlogFilter: BlogFilterSlice,
    NavbarSlice: NavBarSlice,
    // BlogForm: CreateBlogFormSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
