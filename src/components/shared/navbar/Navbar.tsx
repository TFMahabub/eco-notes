"use client";
import { setHamburgerMenu } from "@/redux/NavbarSlice/NavBarSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import HamburgerMenu from "../../Icons/HamburgerMenu";
import { Logo } from "../../Icons/Logo";
import XButton from "../../Icons/XButton";
import BigScreenMenus from "./BigScreenMenus";
import SearchBar from "./SearchBar";
import SmallScreenMenus from "./SmallScreenMenus";

const Navbar = () => {
  const { hamburgerMenu } = useSelector(
    (state: RootState) => state.NavbarSlice
  );
  const dispatch = useDispatch();

  const user = false;
  return (
    <section
      className={`bg-primary dark:bg-darkMode-contentBG border-b box-border-color md:flex md:items-center md:justify-between md:h-navbar-height py-common-1 md:py-0`}
    >
      <nav className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-2 md:gap-4">
            <Link href={"/"}>
              <Logo className="w-11 h-11 fill-secondary-dark dark:fill-primary" />
            </Link>
            <div className="flex items-center py-[2px] md:py-1 px-common-.75 rounded-common border border-border-dark/60 dark:border-border-light/60 gap-common w-36 md:w-full">
              <SearchBar />
            </div>
          </div>
          <div className="flex items-center gap-common">
            <BigScreenMenus user={user} />
            {/* -----------common-menus----------- */}
            <div
              onClick={() => dispatch(setHamburgerMenu())}
              className="cursor-pointer md:hidden"
            >
              {!hamburgerMenu && <HamburgerMenu />}
              {hamburgerMenu && <XButton />}
            </div>
            {/* -----------common-menus----------- */}
          </div>
        </div>
        <div
          className={`transform transition-all duration-300 ease-linear ${
            hamburgerMenu
              ? "flex flex-col items-center gap-common lg:hidden pb-common-1"
              : "hidden h-0"
          }`}
        >
          <SmallScreenMenus user={user} />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

// export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
