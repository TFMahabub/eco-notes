const CreateBlogContent = () => {
  return (
    <>
      <div className="mx-10 my-6">
        {/* --------------blog-title-------------- */}
        <label htmlFor="">
          <input
            type="text"
            name=""
            id=""
            placeholder="New post title here..."
            className="text-4xl font-bold w-full ring-0 outline-none text-secondary-light dark:text-darkMode-textPrimaryColor dark:bg-darkMode-contentBG"
          />
        </label>
        {/* --------------blog-tags-------------------- */}
        <label htmlFor="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Add up to 4 tags..."
            className="mt-4 w-full ring-0 outline-none text-secondary-light dark:text-darkMode-textPrimaryColor dark:bg-darkMode-contentBG"
          />
        </label>
      </div>
      {/* --------------blog-text-edit-menus-------------------- */}
      <div className="w-full bg-border-light/20">this is head part</div>
      {/* --------------blog-description-------------------- */}
      <div className="">
        <textarea
          name=""
          id=""
          className="py-4 px-10 h-40 dark:bg-darkMode-contentBG w-full outline-none ring-0 dark:text-darkMode-textPrimaryColor text-secondary-light text-lg resize-none"
          placeholder="Write your post content..."
        />
      </div>
    </>
  );
};

export default CreateBlogContent;
