import BlogAction from "./BlogAction";
import CreateBlogContent from "./CreateBlogContent";

const CreateBlogBody = ({ renderComponent }: { renderComponent: string }) => {
  return (
    <>
      {renderComponent === "edit" && (
        <>
          <section className="box_area_without_p">
            <CreateBlogContent />
          </section>
          <BlogAction />
        </>
      )}
      {renderComponent === "preview" && (
        <section className="box_area">preview</section>
      )}
    </>
  );
};

export default CreateBlogBody;
