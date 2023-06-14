import SearchIcon from '../../Icons/SearchIcon';

const SearchBar = () => {
    return (
        <>
            <SearchIcon />
            <label htmlFor="">
                <input type="text" name="" id="" placeholder='Search here' className=' w-full ring-0 outline-none text-secondary/80 dark:text-darkMode-textSecondaryColor font-light tracking-common placeholder:text-secondary-dark dark:placeholder:text-darkMode-textSecondaryColor placeholder:capitalize dark:bg-darkMode-contentBG' />
            </label>
        </>
    );
};

export default SearchBar;