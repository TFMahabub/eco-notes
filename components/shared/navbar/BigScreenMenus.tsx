import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../ReduxStore/store";
import ButtonPrimary from "../../../Utils/ReUseAbleComponents/ButtonPrimary";
import { setProfileMenu } from "../../../features/NavbarSlice/NavBarSlice";
import DarkMode from "./DarkMode";
import ProfileMenus from "./ProfileMenus";
import User from "./User";

const BigScreenMenus = ({ user }: { user: boolean }) => {
  const { profileMenu } = useSelector((state: RootState) => state.NavbarSlice);
  const dispatch = useDispatch();

  // const body = document.getElementsByTagName('body')
  // body.addEve
  return (
    <div className="md:relative hidden md:flex md:gap-common-.75 md:items-center">
      {!user && (
        <>
          <Link href={"/login"} className="">
            <ButtonPrimary>Log in</ButtonPrimary>
          </Link>
        </>
      )}
      {user && (
        <>
          <Link href={"/create_blog"}>
            <ButtonPrimary>Create Blog</ButtonPrimary>
          </Link>
          <div
            onClick={() => dispatch(setProfileMenu())}
            className="h-8 w-8 bg-secondary-light rounded-full cursor-pointer"
          >
            <User />
          </div>
        </>
      )}
      <div className="cursor-pointer">
        <DarkMode />
      </div>
      <div
        className={`hidden ${
          profileMenu
            ? "md:flex flex-col items-center gap-common-.75 absolute top-9 right-7 w-72 h-80 bg-primary dark:bg-darkMode-contentBG overflow-y-auto border box-border-color rounded-lg"
            : "md:hidden"
        }`}
      >
        <div className="w-full">
          <ProfileMenus />
        </div>
      </div>
    </div>
  );
};

export default BigScreenMenus;
