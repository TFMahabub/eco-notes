import TextMenuItem from '@/Utils/ReUseAbleComponents/TextMenuItem';
import Announcement from '@/components/Icons/Announcement';
import Bookmark from '@/components/Icons/Bookmark';
import Logout from '@/components/Icons/Logout';
import Moon from '@/components/Icons/Moon';
import Notification from '@/components/Icons/Notification';
import Profile from '@/components/Icons/Profile';
import Sun from '@/components/Icons/Sun';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import UserInfoTopMenu from '../UserInfo/UserInfoTopMenu';

const ProfileMenus = () => {
    const { theme, setTheme } = useTheme()
    return (
        <>
            {/* ------------user-info------------ */}
            <div className="flex items-center gap-3 px-common-1 py-common bg-bg-white pt-4 border-b border-border-light dark:border-border-dark">
                <UserInfoTopMenu />
            </div>
            {/* ------------down-menu------------ */}
            <Link href={'/'} className='flex items-center gap-common px-common-1 py-common hover:bg-secondary-dark/10 dark:hover:bg-primary/10 transform transition ease-linear duration-100'>
                <Profile />
                <TextMenuItem>Profile</TextMenuItem>
            </Link>
            <Link href={'/'} className='flex items-center gap-common px-common-1 py-common hover:bg-secondary-dark/10 dark:hover:bg-primary/10 transform transition ease-linear duration-100'>
                <Notification />
                <TextMenuItem>Notification</TextMenuItem>
            </Link>
            <Link href={'/'} className='flex items-center gap-common px-common-1 py-common hover:bg-secondary-dark/10 dark:hover:bg-primary/10 transform transition ease-linear duration-100'>
                <Bookmark />
                <TextMenuItem>Bookmark</TextMenuItem>
            </Link>
            <Link href={'/'} className='flex items-center gap-common px-common-1 py-common hover:bg-secondary-dark/10 dark:hover:bg-primary/10 transform transition ease-linear duration-100'>
                <Announcement />
                <TextMenuItem>Announcement</TextMenuItem>
            </Link>
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className='w-full flex items-center gap-common px-common-1 py-common hover:bg-secondary-dark/10 dark:hover:bg-primary/10 transform transition ease-linear duration-100'
            >
                {theme === 'light' && <Moon />}
                {theme === 'dark' && <Sun />}
                {theme === 'light' && <TextMenuItem>Dark Mode</TextMenuItem>}
                {theme === 'dark' && <TextMenuItem>Light Mode</TextMenuItem>}
            </button>
            <button className='w-full flex items-center gap-common px-common-1 py-common hover:bg-secondary-dark/10 dark:hover:bg-primary/10 transform transition ease-linear duration-100'>
                <Logout />
                <TextMenuItem>Logout</TextMenuItem>
            </button>
        </>
    );
};

export default ProfileMenus;