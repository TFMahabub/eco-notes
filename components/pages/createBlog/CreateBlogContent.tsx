import BlogDescription from "./BlogDescription";
import BlogTags from "./BlogTags";
import BlogTitle from "./BlogTitle";

const CreateBlogContent = () => {
  return (
    <>
      {/* title-part */}
      <BlogTitle />
      <BlogTags />
      <BlogDescription />
    </>
  );
};

export default CreateBlogContent;
