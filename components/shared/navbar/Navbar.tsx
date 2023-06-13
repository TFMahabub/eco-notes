import { RootState } from '@/app/store';
import HamburgerMenu from '@/components/Icons/HamburgerMenu';
import XButton from '@/components/Icons/XButton';
import { setHamburgerMenu } from '@/features/NavbarSlice/NavBarSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../public/assets/logo.png';
import BigScreenMenus from './BigScreenMenus';
import SearchBar from './SearchBar';
import SmallScreenMenus from './SmallScreenMenus';

const Navbar = () => {
    const {
        hamburgerMenu,
        searchMenu
    } = useSelector((state: RootState) => state.NavbarSlice)
    const dispatch = useDispatch();
    console.log(searchMenu);


    const user = true;
    return (
        <section className='bg-primary dark:bg-darkMode-contentBG border-b box-border-color'>
            <nav className='container'>
                <div className='flex items-center justify-between flex-wrap py-common-1'>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <Link href={"/"}>
                            <Image src={logo} className='md:w-full md:h-full' height={30} width={40} alt='' />
                        </Link>
                        <div className='flex items-center py-[2px] md:py-1 px-common-.75 rounded-common border border-color gap-common w-36 md:w-full'>
                            <SearchBar />
                        </div>
                    </div>
                    <div className='flex items-center gap-common'>
                        <BigScreenMenus
                            user={user}
                        />
                        {/* -----------common-menus----------- */}
                        <div
                            onClick={() => dispatch(setHamburgerMenu())}
                            className='cursor-pointer md:hidden'
                        >
                            {!hamburgerMenu && <HamburgerMenu />}
                            {hamburgerMenu && <XButton />}
                        </div>
                        {/* -----------common-menus----------- */}
                    </div>
                </div>
                <div
                    className={`transform transition-all duration-300 ease-linear ${hamburgerMenu ? "flex flex-col items-center gap-common lg:hidden pb-common-1" : "hidden h-0"}`}
                >
                    <SmallScreenMenus
                        user={user}
                    />
                </div>
            </nav>
        </section >
    );
};

export default Navbar;