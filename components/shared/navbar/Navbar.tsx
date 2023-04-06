import Moon from '@/components/Icons/Moon';
import Search from '@/components/Icons/Search';
import Sun from '@/components/Icons/Sun';
import Link from 'next/link';

const Navbar = () => {
    const value = false;
    return (
        <section className='container bg-primary'>
            <nav className='flex items-center justify-between py-common-1'>
                <div>
                    <Link href={"/"}>Eco Notes</Link>
                </div>
                <div className='flex items-center py-1 px-common-.75 rounded-common border border-secondary/40 gap-common'>
                    <Search moreClass="stroke-secondary fill-none h-icon-1 w-icon-1" />
                    <label htmlFor="">
                        <input type="text" name="" id="" placeholder='Search here' className=' w-full ring-0 outline-none text-secondary/80 font-light tracking-common placeholder:text-secondary/80  placeholder:capitalize' />
                    </label>
                </div>
                <div className='flex items-center gap-common'>
                    <Link href={"/"}> <li className='list-none bg-secondary text-primary px-common-1 py-1 rounded-common'>Login</li> </Link>
                    <Link href={"/"}> <li className='list-none border border-secondary text-secondary px-common-1 py-1 rounded-lg'>Create Account</li> </Link>
                    <div>
                        {
                            value ?
                                <Moon moreClass='fill-secondary w-icon-2 h-icon-2' />
                                :
                                <Sun moreClass='fill-secondary w-icon-2 h-icon-2' />
                        }
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;