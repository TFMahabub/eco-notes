"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SearchIcon from "../../Icons/SearchIcon";

const SearchBar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    if (searchValue) {
      router.push(`/search?text=${searchValue}`);
    } else {
      router.push(`/`);
    }
  }, [router, searchValue]);

  return (
    <>
      <SearchIcon />
      <label htmlFor="">
        <input
          type="text"
          name=""
          id=""
          onChange={(e: any) => setSearchValue(e.target.value)}
          placeholder="Search here"
          className=" w-full ring-0 outline-none text-secondary/80 dark:text-darkMode-textSecondaryColor font-light tracking-common placeholder:text-secondary-dark dark:placeholder:text-darkMode-textSecondaryColor placeholder:capitalize dark:bg-darkMode-contentBG"
        />
      </label>
    </>
  );
};

export default SearchBar;
