import Link from 'next/link';

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
                <>
                    {/* user-menus */}
                    <button
                        className='bg-secondary-dark dark:bg-darkMode-buttonBG text-sm md:text-base border border-color text-primary dark:text-darkMode-textPrimaryColor px-common-1 py-1 rounded-common w-full text-center'
                    >
                        Sign out
                    </button>
                </>
            }
        </>
    );
};

export default SmallScreenMenus;