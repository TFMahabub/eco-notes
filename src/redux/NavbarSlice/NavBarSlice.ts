import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
  hamburgerMenu: boolean;
  searchMenu: boolean;
  profileMenu: boolean;
}

const initialState: InitialStateTypes = {
  hamburgerMenu: false,
  searchMenu: false,
  profileMenu: false,
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
    setProfileMenu: (state) => {
      state.profileMenu = !state.profileMenu;
    },
  },
});

export const { setHamburgerMenu, setSearchMenu, setProfileMenu } =
  NavbarSlice.actions;

export default NavbarSlice.reducer;
