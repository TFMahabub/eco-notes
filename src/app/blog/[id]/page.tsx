import BlogCommentPart from "@/components/pages/Blog/BlogCommentPart";
import BlogLikeCommentSide from "@/components/pages/Blog/BlogLikeCommentSide";
import BlogMainContent from "@/components/pages/Blog/BlogMainContent";
import BlogRIghtSIdeMoreBlogMenu from "@/components/pages/Blog/BlogRIghtSIdeMoreBlogMenu";
import BlogRIghtUserCart from "@/components/pages/Blog/BlogRIghtUserCart";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <section className="container grid grid-cols-12 gap-main-content-gap mt-main-content-gap">
      {/* -----------aside-like-comment-part----------- */}
      <div className="col-span-1 flex flex-col items-center gap-6 mt-10">
        <BlogLikeCommentSide dynamicID={params?.id} />
      </div>
      {/* -----------main-blog-body----------- */}
      <div className="col-span-8 space-y-main-content-gap bg-primary dark:bg-darkMode-contentBG border box-border-color rounded-common overflow-hidden pb-common">
        <BlogMainContent params={params} />
        <BlogCommentPart />
      </div>
      {/* -----------aside-part----------- */}
      <div className="col-span-3 space-y-common-.75">
        <BlogRIghtUserCart />
        <BlogRIghtSIdeMoreBlogMenu />
      </div>
    </section>
  );
};

export default page;
