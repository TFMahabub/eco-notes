import Link from 'next/link';
import TextMenuItem from '../../../Utils/ReUseAbleComponents/TextMenuItem';
import Login from '../../Icons/Login';
import DarkModeSmallScreen from './DarkModeSmallScreen';
import ProfileMenus from './ProfileMenus';

const SmallScreenMenus = ({ user }: { user: boolean }) => {
    return (
        <>
            {
                !user &&
                <>
                    <Link
                        href={"/"}
                        className='flex items-center gap-common w-full px-common-1'
                    >
                        <Login />
                        <TextMenuItem>
                            Log in
                        </TextMenuItem>
                    </Link>
                    <DarkModeSmallScreen />
                </>
            }
            {
                user &&
                <div className="w-full">
                    <ProfileMenus />
                </div>
            }
        </>
    );
};

export default SmallScreenMenus;