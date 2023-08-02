"use client";
import { setFilter } from "@/redux/BlogFilter/BlogFilterSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

interface Menu {
  id: number;
  name: string;
}

const TopMenus = () => {
  const { value } = useSelector((state: RootState) => state.BlogFilter);
  const dispatch = useDispatch();

  const topMenus = [
    { id: 3, name: "top" },
    { id: 2, name: "letest" },
    { id: 1, name: "relevant" },
  ];
  return (
    <>
      {topMenus?.map((item: Menu) => (
        <h4
          key={item?.id}
          onClick={() => dispatch(setFilter(item?.name))}
          className={`text-lg font-medium capitalize hover:text-secondary-dark cursor-pointer ${
            value === item?.name
              ? "border-b-2 border-border-dark dark:border-darkMode-textPrimaryColor text-secondary-dark dark:text-darkMode-textPrimaryColor"
              : "text-secondary-light dark:text-darkMode-textSecondaryColor"
          }`}
        >
          {item?.name}
        </h4>
      ))}
    </>
  );
};

export default TopMenus;
