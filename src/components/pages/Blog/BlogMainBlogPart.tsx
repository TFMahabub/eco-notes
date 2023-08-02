import TextDescription from "@/app/Utils/ReUseAbleComponents/TextDescription";
import TextPrimaryTitle from "@/app/Utils/ReUseAbleComponents/TextPrimaryTitle";
import TagCartBig from "../../Cart/TagCartBig";

const BlogMainBlogPart = ({ singleBlog }: any) => {
  return (
    <>
      {/* ----title---- */}
      <TextPrimaryTitle extraClass="">{singleBlog?.title}</TextPrimaryTitle>
      {/* ----tags---- */}
      <div className="flex flex-wrap">
        {singleBlog?.tags?.map((tag: string) => (
          <TagCartBig key={tag} tag={tag} />
        ))}
      </div>
      {/* ----description---- */}
      <div className="space-y-common-.75">
        <TextDescription>{singleBlog?.description}</TextDescription>
      </div>
    </>
  );
};

export default BlogMainBlogPart;
