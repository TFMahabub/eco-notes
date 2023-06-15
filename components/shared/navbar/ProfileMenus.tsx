import Link from 'next/link';
import { useDispatch } from 'react-redux';
import TextMenuItem from '../../../Utils/ReUseAbleComponents/TextMenuItem';
import { setProfileMenu } from '../../../features/NavbarSlice/NavBarSlice';
import Announcement from '../../Icons/Announcement';
import Bookmark from '../../Icons/Bookmark';
import Logout from '../../Icons/Logout';
import Notification from '../../Icons/Notification';
import Profile from '../../Icons/Profile';
import UserInfoTopMenu from '../UserInfo/UserInfoTopMenu';
import DarkModeSmallScreen from './DarkModeSmallScreen';

const ProfileMenus = () => {
    const dispatch = useDispatch()

    return (
        <>
            {/* ------------user-info------------ */}
            <div className="flex items-center justify-start gap-common px-common-1 py-common bg-bg-white pt-4 border-b border-border-light dark:border-border-dark">
                <UserInfoTopMenu />
            </div>
            {/* ------------down-menu------------ */}
            <Link
                href={'/my_profile/profile'}
                onClick={() => dispatch(setProfileMenu())}
                className='navbar-profile-menu-item'
            >
                <Profile />
                <TextMenuItem>Profile</TextMenuItem>
            </Link>
            <Link
                href={'/my_profile/notification'}
                onClick={() => dispatch(setProfileMenu())}
                className='navbar-profile-menu-item'
            >
                <Notification />
                <TextMenuItem>Notification</TextMenuItem>
            </Link>
            <Link
                href={'/my_profile/bookmark'}
                onClick={() => dispatch(setProfileMenu())}
                className='navbar-profile-menu-item'
            >
                <Bookmark />
                <TextMenuItem>Bookmark</TextMenuItem>
            </Link>
            <Link
                href={'/my_profile/announcement'}
                onClick={() => dispatch(setProfileMenu())}
                className='navbar-profile-menu-item'
            >
                <Announcement />
                <TextMenuItem>Announcement</TextMenuItem>
            </Link>
            <DarkModeSmallScreen />
            <div className='navbar-profile-menu-item w-full'>
                <Logout />
                <TextMenuItem>Logout</TextMenuItem>
            </div>
        </>
    );
};

export default ProfileMenus;