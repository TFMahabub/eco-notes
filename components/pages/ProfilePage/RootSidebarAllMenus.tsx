import Link from 'next/link';
import TextMenuItem from '../../../Utils/ReUseAbleComponents/TextMenuItem';
import Announcement from '../../Icons/Announcement';
import Bookmark from '../../Icons/Bookmark';
import Notification from '../../Icons/Notification';
import Profile from '../../Icons/Profile';

const RootSidebarAllMenus = () => {


    return (
        <>
            <Link href={'/my_profile/profile'} >
                <div className='navbar-profile-menu-item'>
                    <Profile />
                    <TextMenuItem>Profile</TextMenuItem>
                </div>
            </Link>
            <Link href={'/'} >
                <div className='navbar-profile-menu-item'>
                    <Notification />
                    <TextMenuItem>Notification</TextMenuItem>
                </div>
            </Link>
            <Link href={'/'} >
                <div className='navbar-profile-menu-item'>
                    <Bookmark />
                    <TextMenuItem>Bookmark</TextMenuItem>
                </div>
            </Link>
            <Link href={'/'} >
                <div className='navbar-profile-menu-item'>
                    <Announcement />
                    <TextMenuItem>Announcement</TextMenuItem>
                </div>
            </Link>
        </>
    );
};

export default RootSidebarAllMenus;