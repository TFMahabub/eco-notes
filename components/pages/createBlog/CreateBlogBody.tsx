const CreateBlogBody = ({ renderComponent }: { renderComponent: string }) => {
  return (
    <>
      {renderComponent === "edit" && <section className="box_area"></section>}
    </>
  );
};

export default CreateBlogBody;
