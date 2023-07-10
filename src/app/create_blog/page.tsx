"use client";
import { useState } from "react";
import CreateBlogBody from "../../../components/pages/createBlog/CreateBlogBody";
import CreateBlogHeader from "../../../components/pages/createBlog/CreateBlogHeader";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [renderComponent, setRenderComponent] = useState("edit");
  return (
    <section className="container grid grid-cols-3 gap-horizontal">
      <main className="col-span-2 h-screen space-y-common">
        <section className="py-common flex items-center justify-between">
          <CreateBlogHeader />
        </section>
        <CreateBlogBody renderComponent={renderComponent} />
      </main>
      <aside className="col-span-1 bg-technologyColor-react h-screen"></aside>
    </section>
  );
};

export default page;
