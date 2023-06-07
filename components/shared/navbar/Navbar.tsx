import Image from 'next/image';
import Link from 'next/link';
import { RiSearchLine } from 'react-icons/ri';
import logo from '../../../public/assets/logo.png';
import AuthButtons from './AuthButtons';
import DarkMode from './DarkMode';
import SearchBar from './SearchBar';
import User from './User';

const Navbar = () => {



    const user = false;
    return (
        <section className='bg-primary dark:bg-darkMode-contentBG border-b box-border-color'>
            <nav className='container flex items-center justify-between flex-wrap py-common-1'>
                <div className='flex items-center gap-2 md:gap-4'>
                    <Link href={"/"}>
                        <Image src={logo} className='md:w-full md:h-full' height={30} width={40} alt='' />
                    </Link>
                    <div className='hidden md:flex items-center py-1 px-common-.75 rounded-common border border-color gap-common'>
                        <SearchBar />
                    </div>
                    <RiSearchLine className='block md:hidden text-secondary-dark dark:text-darkMode-textSecondaryColor text-2xl' />
                </div>
                <div className='flex items-center gap-common'>
                    <AuthButtons user={user} />
                    {
                        user &&
                        <div
                            // onClick={()=>}
                            className='h-8 w-8 bg-secondary-light rounded-full'>
                            <User />
                        </div>
                    }
                    <div className='hidden md:block cursor-pointer'>
                        <DarkMode />
                    </div>
                </div>
            </nav>
        </section >
    );
};

export default Navbar;