import BlogCartLoading from "../../../../Utils/LoadingSpinners/BlogCartLoading";
import { useGetBlogsQuery } from "../../../../features/Blog/blogApi";
import BlogCart from "../../../Cart/BlogCart";

const MainContent = () => {
  const { data: Blogs, isLoading, error } = useGetBlogsQuery(undefined);

  if (isLoading) {
    return (
      <>
        <BlogCartLoading />
        <BlogCartLoading />
        <BlogCartLoading />
        <BlogCartLoading />
      </>
    );
  }
  return (
    <div className="space-y-common-.75">
      {Blogs?.map((blog: any) => (
        <BlogCart key={blog?.id} blog={blog} />
      ))}
    </div>
  );
};

export default MainContent;
