import BlogMainBlogPart from "./BlogMainBlogPart";

const BlogMainContent = () => {
  return (
    <>
      <div className="px-8 lg:px-16 py-6 space-y-main-content-gap">
        {/* ----------main-content---------- */}
        <div className="flex flex-col gap-common-.75 border-b border-border-light dark:border-darkMode-border pb-6">
          <BlogMainBlogPart />
        </div>
      </div>
    </>
  );
};

export default BlogMainContent;
