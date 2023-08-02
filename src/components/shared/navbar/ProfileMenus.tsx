import TextExtraSmall from "@/app/Utils/ReUseAbleComponents/TextExtraSmall";
import TextMenuItem from "@/app/Utils/ReUseAbleComponents/TextMenuItem";
import { setProfileMenu } from "@/redux/NavbarSlice/NavBarSlice";
import Image from "next/image";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { RiUser3Line } from "react-icons/ri";
import { SlSettings } from "react-icons/sl";
import { useDispatch } from "react-redux";
import profileImage from "../../../../public/assets/profile.jpg";
import Logout from "../../Icons/Logout";

const ProfileMenus = () => {
  const dispatch = useDispatch();

  return (
    <>
      {/* ------------user-info------------ */}
      <Link href={"/user_profile"}>
        <div className="flex items-center justify-start gap-common px-common-1 py-common bg-bg-white pt-4 border-b border-border-light dark:border-border-dark group navbar-profile-menu-item">
          <div className="relative h-8 w-8 flex gap-2 rounded-lg overflow-hidden">
            <Image
              src={profileImage}
              objectFit="cover"
              objectPosition="center"
              layout="fill"
              alt=""
            />
          </div>
          <div>
            <TextMenuItem extraClass="group-hover:underline text-primary">
              Mahabub Alam
            </TextMenuItem>
            <TextExtraSmall>Premium Member</TextExtraSmall>
          </div>
        </div>
      </Link>
      {/* ------------down-menu------------ */}
      <Link
        href={"/profile"}
        onClick={() => dispatch(setProfileMenu())}
        className="navbar-profile-menu-item"
      >
        <RiUser3Line className="text-xl" />
        <TextMenuItem>Dashboard</TextMenuItem>
      </Link>
      <Link
        href={"/profile"}
        onClick={() => dispatch(setProfileMenu())}
        className="navbar-profile-menu-item"
      >
        <FiEdit className="text-xl" />
        <TextMenuItem>Create Post</TextMenuItem>
      </Link>
      <Link
        href={"/profile"}
        onClick={() => dispatch(setProfileMenu())}
        className="navbar-profile-menu-item"
      >
        <SlSettings className="text-xl" />
        <TextMenuItem>Settings</TextMenuItem>
      </Link>
      <div className="navbar-profile-menu-item w-full">
        <Logout />
        <TextMenuItem>Logout</TextMenuItem>
      </div>
    </>
  );
};

export default ProfileMenus;
