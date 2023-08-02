import { useFetch } from "@/components/hooks/useFetch";
import BlogCart from "../../../Cart/BlogCart";

const MainContent = async () => {
  const allBlogs = await useFetch(
    `${process.env.NEXT_DATA_FETCHING_BASE_URL}/blogs`,
    {
      next: { revalidate: 5 },
    }
  );
  return (
    <div className="space-y-common-.75">
      {allBlogs?.map((blog: any) => (
        <BlogCart key={blog?._id} blog={blog} />
      ))}
    </div>
  );
};

export default MainContent;
