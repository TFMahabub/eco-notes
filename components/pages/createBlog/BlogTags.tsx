const BlogTags = ({ ...attributes }: any) => {
  return (
    <label htmlFor="">
      <input
        type="text"
        name=""
        id=""
        {...attributes}
        placeholder="Add up to 4 tags..."
        className="py-2 px-6  w-full ring-0 outline-none text-secondary-light dark:text-darkMode-textPrimaryColor dark:bg-darkMode-contentBG"
      />
    </label>
  );
};

export default BlogTags;
