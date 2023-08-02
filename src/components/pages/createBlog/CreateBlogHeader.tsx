import ButtonTextHover from "@/app/Utils/ReUseAbleComponents/ButtonTextHover";
import TextDescription from "@/app/Utils/ReUseAbleComponents/TextDescription";

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
