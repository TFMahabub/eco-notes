import Search from '@/components/Icons/Search';

const SearchBar = () => {
    return (
        <>
            <Search moreClass="stroke-secondary-dark fill-none h-icon-1 w-icon-1" />
            <label htmlFor="">
                <input type="text" name="" id="" placeholder='Search here' className=' w-full ring-0 outline-none text-secondary/80 font-light tracking-common placeholder:text-secondary-dark  placeholder:capitalize' />
            </label>
        </>
    );
};

export default SearchBar;