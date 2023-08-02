import TextExtraSmall from "@/app/Utils/ReUseAbleComponents/TextExtraSmall";
import TextSecondaryTitle from "@/app/Utils/ReUseAbleComponents/TextSecondaryTitle";
import TextSmall from "@/app/Utils/ReUseAbleComponents/TextSmall";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../../public/assets/profile.jpg";
import Bookmark from "../Icons/Bookmark";
import ChatIcon from "../Icons/ChatIcon";
import { TAG } from "../pages/Blog/Type";
import TagCart from "./TagCart";

const BlogCart = ({ blog }: any) => {
  return (
    <div className="box_area">
      <div className="flex flex-col md:flex-row md:items-start gap-3">
        <div className="relative h-9 w-9">
          <Image
            src={profileImage}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
            className="rounded-full"
            alt="profile-pic"
          />
        </div>
        {/* --------content-------- */}
        <div className="space-y-common-.75 md:space-y-common w-full">
          <div>
            <TextSmall extraClass="font-medium md:font-semibold">
              Mahabub Alam
            </TextSmall>
            <TextExtraSmall>
              {moment(blog?.postTime).format("LL")}
            </TextExtraSmall>
          </div>
          <div>
            <Link href={`/blog/${blog._id}`}>
              <TextSecondaryTitle extraClass="hover-text-color common-duration cursor-pointer">
                {blog.title}
              </TextSecondaryTitle>
            </Link>
          </div>
          <div className="flex flex-wrap">
            {blog?.tags?.map((tag: TAG) => (
              <TagCart key={tag?._id} tag={tag} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-common">
            {/* ---------add-comments--------- */}
            <div
              title="Add a comment"
              className="flex gap-common items-center hover:bg-secondary-light/10 md:py-1 md:px-2 md:rounded-md md:cursor-pointer"
            >
              <ChatIcon />
              <TextSmall>Add Comment</TextSmall>
            </div>
            <div className="flex items-center gap-common">
              <TextExtraSmall>
                {moment(blog?.postTime).fromNow()}
              </TextExtraSmall>
              <span
                title="save this"
                className="hover:bg-secondary-light/10 duration-200 p-1 rounded-md cursor-pointer"
              >
                <Bookmark />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
