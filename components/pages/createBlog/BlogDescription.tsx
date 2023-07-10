const BlogDescription = () => {
  return (
    <>
      <div className="py-2 w-full bg-border-light/20">this is head part</div>
      <div className="p-8">
        <textarea
          name=""
          id=""
          className="h-40 p-2 dark:bg-darkMode-contentBG w-full outline-none ring-0 dark:text-darkMode-textPrimaryColor text-secondary-light text-lg"
          placeholder="Write your post content..."
        />
      </div>
    </>
  );
};

export default BlogDescription;
