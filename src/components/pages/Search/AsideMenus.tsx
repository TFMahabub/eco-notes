"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import NavLink from "./AsidNavlink";

const AsideMenus = () => {
  const searchParams: any = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const category = searchParams.get("category");
  const params = new URLSearchParams(searchParams);

  // useEffect(() => {
  //   if (!category) {
  //     params.append("category", "post");
  //     router.push(`${pathname}?${params.toString()}`);
  //   }
  // }, [category, params, pathname, router]);
  return (
    <>
      <NavLink
        isActive={category === "post"}
        appendedItem={{ key: "category", value: "post" }}
      />
      <NavLink
        isActive={category === "people"}
        appendedItem={{ key: "category", value: "people" }}
      />
      <NavLink
        isActive={category === "organization"}
        appendedItem={{ key: "category", value: "organization" }}
      />
      <NavLink
        isActive={category === "tags"}
        appendedItem={{ key: "category", value: "tags" }}
      />
    </>
  );
};

export default AsideMenus;

//link menus-------------------------------------------------------------------
