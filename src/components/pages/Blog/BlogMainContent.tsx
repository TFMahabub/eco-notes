import { useFetch } from "@/components/hooks/useFetch";
import BlogMainBlogPart from "./BlogMainBlogPart";

const BlogMainContent = async ({ params }: { params: { id: string } }) => {
  const singleBlog = await useFetch(
    `https://eco-notes-server-site.vercel.app/single-blog/${params.id}`,
    {
      cache: "no-store",
    }
  );

  return (
    <>
      <div className="px-8 lg:px-16 py-6 space-y-main-content-gap">
        <div className="flex flex-col gap-common-.75 border-b border-border-light dark:border-darkMode-border pb-6">
          <BlogMainBlogPart singleBlog={singleBlog} />
        </div>
      </div>
    </>
  );
};

export default BlogMainContent;
