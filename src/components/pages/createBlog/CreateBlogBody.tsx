import BlogAction from "./BlogAction";
import CreateBlogContent from "./CreateBlogContent";

const CreateBlogBody = ({ renderComponent }: { renderComponent: string }) => {
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log("clakjfdkl");
  // };

  return (
    <>
      {renderComponent === "edit" && (
        <form>
          <section className="box_area_without_p">
            <CreateBlogContent />
          </section>
          <BlogAction />
        </form>
      )}
      {renderComponent === "preview" && (
        <div className="col-span-8 space-y-main-content-gap bg-primary dark:bg-darkMode-contentBG border box-border-color rounded-common overflow-hidden pb-common">
          {/* <BlogMainContent /> */}
        </div>
      )}
    </>
  );
};

export default CreateBlogBody;
