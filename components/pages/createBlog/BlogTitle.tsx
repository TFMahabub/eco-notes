const BlogTitle = ({ ...attributes }: any) => {
  return (
    <label htmlFor="">
      <input
        type="text"
        name=""
        id=""
        {...attributes}
        placeholder="New post title here..."
        className="py-2 px-6 text-4xl font-bold  w-full ring-0 outline-none text-secondary-light dark:text-darkMode-textPrimaryColor dark:bg-darkMode-contentBG"
      />
    </label>
  );
};

export default BlogTitle;
