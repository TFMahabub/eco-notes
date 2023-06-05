import { RootState } from "@/app/store";
import { setFilter } from '@/features/BlogFilter/BlogFilterSlice';
import { useDispatch, useSelector } from 'react-redux';

interface Menu {
    id: number;
    name: string;
}

const TopMenus = () => {
    const { value } = useSelector((state: RootState) => state.BlogFilter)
    const dispatch = useDispatch();
    console.log(value);


    const topMenus = [
        { id: 3, name: "top" },
        { id: 2, name: "letest" },
        { id: 1, name: "relevant" },
    ]
    return (
        <>
            {
                topMenus &&
                topMenus?.map((item: Menu) => (
                    <h4
                        onClick={() => dispatch(setFilter(item?.name))}
                        key={item?.id}
                        className={`text-lg font-medium capitalize hover:text-secondary-dark cursor-pointer ${value === item?.name ? "border-b-2 border-border-dark text-secondary-dark" : "text-secondary-light"}`}
                    >
                        {item?.name}
                    </h4>
                ))
            }
        </>
    );
};

export default TopMenus;