import Image from "next/image";
import TextSecondaryTitle from "../../../Utils/ReUseAbleComponents/TextSecondaryTitle";
import blogImage from '../../../public/assets/single_blog.png';
import BlogMainBlogPart from "./BlogMainBlogPart";
import CommentBox from "./CommentBox";
import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";

const BlogMainContent = () => {
    return (
        <>
            {/* ----------blog-image---------- */}
            <div
                className="relative h-96 w-full"
            >
                <Image
                    src={blogImage}
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    alt="blog_image"
                />
            </div>
            <div
                className="px-8 lg:px-16 space-y-main-content-gap"
            >
                {/* ----------user-info---------- */}
                <div
                    className="flex items-center gap-common-.75"
                >
                    <UserInfo />
                </div>
                {/* ----------main-content---------- */}
                <div
                    className="flex flex-col gap-common-.75 border-b border-border-light pb-6"
                >
                    <BlogMainBlogPart />
                </div>
                {/* ----------comments-part---------- */}
                <div
                    className="space-y-common-.75"
                >
                    <TextSecondaryTitle>
                        Right a comment
                    </TextSecondaryTitle>
                    <div
                        className="flex gap-common-.75"
                    >
                        <ProfileImage />
                        <CommentBox />
                    </div>
                </div>
                {/* ----------comments-part---------- */}
            </div>
        </>
    );
};

export default BlogMainContent;