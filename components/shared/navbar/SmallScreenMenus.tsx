import Link from 'next/link';
import ProfileMenus from './ProfileMenus';

const SmallScreenMenus = ({ user }: { user: boolean }) => {
    return (
        <>
            {
                !user &&
                <Link
                    href={"/"}
                    className='bg-secondary-dark dark:bg-darkMode-buttonBG text-sm md:text-base border border-color text-primary dark:text-darkMode-textPrimaryColor px-common-1 py-1 rounded-common w-full text-center'
                >
                    Log in
                </Link>
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