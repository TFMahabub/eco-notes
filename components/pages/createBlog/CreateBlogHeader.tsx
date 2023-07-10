import ButtonTextHover from "../../../Utils/ReUseAbleComponents/ButtonTextHover";
import TextDescription from "../../../Utils/ReUseAbleComponents/TextDescription";

const CreateBlogHeader = ({
  setRenderComponent,
}: {
  setRenderComponent: any;
}) => {
  return (
    <>
      <TextDescription>Create Blog</TextDescription>
      <div className="space-x-common">
        <ButtonTextHover onClick={() => setRenderComponent("edit")}>
          Edit
        </ButtonTextHover>
        <ButtonTextHover onClick={() => setRenderComponent("preview")}>
          Preview
        </ButtonTextHover>
      </div>
    </>
  );
};

export default CreateBlogHeader;
