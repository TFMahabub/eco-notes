import ButtonTextHover from "../../../Utils/ReUseAbleComponents/ButtonTextHover";
import TextDescription from "../../../Utils/ReUseAbleComponents/TextDescription";

const CreateBlogHeader = () => {
  return (
    <>
      <TextDescription>Create Blog</TextDescription>
      <div className="space-x-common">
        <ButtonTextHover>Edit</ButtonTextHover>
        <ButtonTextHover>Preview</ButtonTextHover>
      </div>
    </>
  );
};

export default CreateBlogHeader;
