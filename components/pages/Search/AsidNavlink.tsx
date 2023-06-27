import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const NavLink = ({
  isActive,
  appendedItem,
}: {
  isActive: boolean;
  appendedItem: { key: string; value: string };
}) => {
  const searchParams: any = useSearchParams();
  const pathname = usePathname();

  const appendParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    return params.toString();
  };

  return (
    <Link
      href={`${pathname}?${appendParams(appendedItem.key, appendedItem.value)}`}
      className={`hover:text-textHover-dark hover:bg-primary duration-200 rounded-md py-2 px-6 capitalize ${
        isActive && "bg-primary dark:bg-darkMode-contentBG text-textHover-light"
      }`}
    >
      {appendedItem.value}
    </Link>
  );
};

export default NavLink;
