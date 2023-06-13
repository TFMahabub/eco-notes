import BlogFilter from "@/features/BlogFilter/BlogFilterSlice";
import NavBarSlice from "@/features/NavbarSlice/NavBarSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    BlogFilter: BlogFilter,
    NavbarSlice: NavBarSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
