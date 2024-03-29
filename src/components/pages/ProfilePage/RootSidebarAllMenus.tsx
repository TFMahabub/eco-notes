import TextMenuItem from "@/app/Utils/ReUseAbleComponents/TextMenuItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Announcement from "../../Icons/Announcement";
import Bookmark from "../../Icons/Bookmark";
import Notification from "../../Icons/Notification";
import Profile from "../../Icons/Profile";

const RootSidebarAllMenus = () => {
  const pathname = usePathname();

  //path names-
  const profile = "/my_profile/profile";
  const notification = "/my_profile/notification";
  const bookmark = "/my_profile/bookmark";
  const announcement = "/my_profile/announcement";

  return (
    <>
      <Link href={"/my_profile/profile"}>
        <div
          className={`navbar-profile-menu-item ${
            pathname === profile
              ? "bg-secondary-dark/10 dark:bg-primary/10"
              : ""
          }`}
        >
          <Profile />
          <TextMenuItem>Profile</TextMenuItem>
        </div>
      </Link>
      <Link href={"/my_profile/notification"}>
        <div
          className={`navbar-profile-menu-item ${
            pathname === notification
              ? "bg-secondary-dark/10 dark:bg-primary/10"
              : ""
          }`}
        >
          <Notification />
          <TextMenuItem>Notification</TextMenuItem>
        </div>
      </Link>
      <Link href={"/my_profile/bookmark"}>
        <div
          className={`navbar-profile-menu-item ${
            pathname === bookmark
              ? "bg-secondary-dark/10 dark:bg-primary/10"
              : ""
          }`}
        >
          <Bookmark />
          <TextMenuItem>Bookmark</TextMenuItem>
        </div>
      </Link>
      <Link href={"/my_profile/announcement"}>
        <div
          className={`navbar-profile-menu-item ${
            pathname === announcement
              ? "bg-secondary-dark/10 dark:bg-primary/10"
              : ""
          }`}
        >
          <Announcement />
          <TextMenuItem>Announcement</TextMenuItem>
        </div>
      </Link>
    </>
  );
};

export default RootSidebarAllMenus;
