import Search from '@/components/Icons/Search';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../../../public/assets/logo.png';
import AuthButtons from './AuthButtons';
import DarkMode from './DarkMode';
import SearchBar from './SearchBar';
import User from './User';

const Navbar = () => {

    //state-
    const [uiTheme, setUiTheme] = useState("light")

    const user = false;
    return (
        <section className='container bg-primary border-b border-border-light'>
            <nav className='flex items-center justify-between flex-wrap py-common-1'>
                <div className='flex items-center gap-2 md:gap-4'>
                    <Link href={"/"}>
                        <Image src={logo} className='md:w-full md:h-full' height={30} width={40} alt='' />
                    </Link>
                    <div className='hidden md:flex items-center py-1 px-common-.75 rounded-common border border-secondary-dark gap-common'>
                        <SearchBar />
                    </div>
                    <Search moreClass="block md:hidden stroke-secondary-dark fill-none h-icon-2 w-icon-2" />
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
                        <DarkMode
                            uiTheme={uiTheme}
                            setUiTheme={setUiTheme}
                        />
                    </div>
                </div>
            </nav>
        </section >
    );
};

export default Navbar;