import TextSecondaryTitle from "../../../Utils/ReUseAbleComponents/TextSecondaryTitle";
import CommentBox from "./CommentBox";
import ProfileImage from "./ProfileImage";
import SingleComment from "./SingleComment";

const BlogCommentPart = () => {
  return (
    <>
      {/* ----------comments-part---------- */}
      <div className="px-8 lg:px-16 py-6 space-y-10">
        <div className="space-y-common-.75">
          <TextSecondaryTitle>Add a comment</TextSecondaryTitle>
          <div className="flex gap-common-.75">
            <ProfileImage />
            <CommentBox />
          </div>
        </div>
        {/* ----------all-comments---------- */}
        <div className="flex flex-col gap-common-.75">
          <SingleComment />
          <SingleComment />
          <SingleComment />
        </div>
      </div>
    </>
  );
};

export default BlogCommentPart;
