import BlogMainContent from "../Blog/BlogMainContent";
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
        <div className="col-span-8 space-y-main-content-gap bg-primary dark:bg-darkMode-contentBG border box-border-color rounded-common overflow-hidden pb-common">
          <BlogMainContent />
        </div>
      )}
    </>
  );
};

export default CreateBlogBody;
