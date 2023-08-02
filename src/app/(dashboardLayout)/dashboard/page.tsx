"use client";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { hamburgerMenu } = useAppSelector(
    (state: RootState) => state.NavbarSlice
  );
  console.log(hamburgerMenu);
  return <div>this is dashboard</div>;
};

export default page;
