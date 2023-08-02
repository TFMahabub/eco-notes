import { useDispatch } from "react-redux";
import {
  setFormDescription,
  setFormTitle,
} from "../../../redux/CreateBlog/CreateBlogSlice";

const CreateBlogContent = () => {
  // const { title, description, tags } = useSelector(
  //   (state: RootState) => state.BlogForm
  // );
  const dispatch = useDispatch();

  return (
    <>
      <div className="mx-10 my-6 space-y-common-.75">
        {/* --------------blog-title-------------- */}
        <label htmlFor="">
          <input
            type="text"
            name="title"
            id=""
            // defaultValue={title}
            onChange={(e) => dispatch(setFormTitle(e.target.value))}
            placeholder="New post title here..."
            className="text-4xl font-bold w-full ring-0 outline-none text-secondary-light dark:text-darkMode-textPrimaryColor dark:bg-darkMode-contentBG"
          />
        </label>
        {/* --------------blog-tags-------------------- */}
        {/* <TagsSelects tags={tags} /> */}
      </div>
      {/* --------------blog-text-edit-menus-------------------- */}
      <div className="w-full bg-border-light/20 px-10 py-2">
        this is head part
      </div>
      {/* --------------blog-description-------------------- */}
      <div className="">
        <textarea
          name=""
          id=""
          // defaultValue={description}
          onChange={(e) => dispatch(setFormDescription(e.target.value))}
          className="py-4 px-10 h-40 dark:bg-darkMode-contentBG w-full outline-none ring-0 dark:text-darkMode-textPrimaryColor text-secondary-light text-lg resize-none"
          placeholder="Write your post content..."
        />
      </div>
    </>
  );
};

export default CreateBlogContent;
