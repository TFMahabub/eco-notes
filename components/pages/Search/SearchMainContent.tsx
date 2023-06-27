"use client";
import { useSearchParams } from "next/navigation";
import BlogCart from "../../Cart/BlogCart";

const SearchMainContent = () => {
  const searchParams = useSearchParams();
  const text = searchParams.get("text");
  // console.log(text);

  return (
    <div className="space-y-common-.75">
      <BlogCart />
      <BlogCart />
      <BlogCart />
      <BlogCart />
    </div>
  );
};

export default SearchMainContent;
