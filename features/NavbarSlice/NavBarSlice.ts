import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
  hamburgerMenu: boolean;
  searchMenu: boolean;
}

const initialState: InitialStateTypes = {
  hamburgerMenu: false,
  searchMenu: false,
};

const NavbarSlice = createSlice({
  name: "navbarSlice",
  initialState,
  reducers: {
    setHamburgerMenu: (state) => {
      state.hamburgerMenu = !state.hamburgerMenu;
    },
    setSearchMenu: (state) => {
      state.searchMenu = !state.searchMenu;
    },
  },
});

export const { setHamburgerMenu, setSearchMenu } = NavbarSlice.actions;

export default NavbarSlice.reducer;
