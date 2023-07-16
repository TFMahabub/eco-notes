"use client";
import { useState } from "react";
import AsideContent from "../../../components/pages/createBlog/AsideContent";
import CreateBlogBody from "../../../components/pages/createBlog/CreateBlogBody";
import CreateBlogHeader from "../../../components/pages/createBlog/CreateBlogHeader";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [renderComponent, setRenderComponent] = useState("edit");
  return (
    <section className="container grid grid-cols-3 gap-section-gap">
      <main className="col-span-2 min-h-screen space-y-common">
        <section className="py-common flex items-center justify-between">
          <CreateBlogHeader setRenderComponent={setRenderComponent} />
        </section>
        <CreateBlogBody renderComponent={renderComponent} />
      </main>
      <aside className="col-span-1 min-h-screen space-y-common mt-common">
        <AsideContent />
      </aside>
    </section>
  );
};

export default page;
