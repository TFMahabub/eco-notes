"use client";
import { useSearchParams } from "next/navigation";
import BlogCart from "../../Cart/BlogCart";

const SearchMainContent = () => {
  const searchParams = useSearchParams();
  const text = searchParams.get("text");
  const category = searchParams.get("category");
  console.log(text);
  console.log(category);

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
