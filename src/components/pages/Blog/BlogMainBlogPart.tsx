import TextDescription from "@/app/Utils/ReUseAbleComponents/TextDescription";
import TextPrimaryTitle from "@/app/Utils/ReUseAbleComponents/TextPrimaryTitle";
import TagCartBig from "../../Cart/TagCartBig";
import { TAG } from "./Type";

const BlogMainBlogPart = ({ singleBlog }: any) => {
  return (
    <>
      {/* ----title---- */}
      <TextPrimaryTitle extraClass="">{singleBlog?.title}</TextPrimaryTitle>
      {/* ----tags---- */}
      <div className="flex flex-wrap">
        {singleBlog?.tags?.map((tag: TAG) => (
          <TagCartBig key={tag?._id} tag={tag} />
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
