import TextExtraSmall from "@/Utils/ReUseAbleComponents/TextExtraSmall";
import TextSecondaryTitle from "@/Utils/ReUseAbleComponents/TextSecondaryTitle";
import TextSmall from "@/Utils/ReUseAbleComponents/TextSmall";
import Image from "next/image";
import Link from "next/link";
import { RiBookmarkLine, RiChatNewLine } from "react-icons/ri";
import profileImage from '../../public/assets/profile.jpg';

const BlogCart = () => {
    return (
        <div className="box_area">
            <div className="flex gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                        src={profileImage}
                        objectFit="cover"
                        objectPosition="center"
                        layout="fill"
                        alt="profile-pic" />
                </div>
                {/* --------content-------- */}
                <div className="space-y-common-.75 md:space-y-common">
                    <div>
                        <TextSmall extraClass="font-medium md:font-semibold">Mahabub Alam</TextSmall>
                        <TextExtraSmall>jun 5</TextExtraSmall>
                    </div>
                    <div>
                        <Link href={'/'}>
                            <TextSecondaryTitle
                                onClick={(e: any) => console.log('aci')}
                                extraClass="hover:text-casual-blue duration-200 cursor-pointer"
                            >
                                How does participating in hackathons & competitions skyrocket my career in 2022?
                            </TextSecondaryTitle>
                        </Link>
                    </div>
                    <div className="flex flex-wrap">
                        {
                            [...Array(4)].map((_, i) => (
                                <p key={i} className="px-[6px] py-[1px] hover:bg-casual-blue/10 border border-primary hover:border-casual-blue rounded-md text-casual-blue duration-200 cursor-pointer text-sm">
                                    #<span className="text-secondary-light hover:text-casual-blue">react</span>
                                </p>
                            ))
                        }
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        {/* ---------add-comments--------- */}
                        <div
                            className="flex gap-common items-center hover:bg-secondary-light/10 md:py-1 md:px-2 md:rounded-md md:cursor-pointer"
                        >
                            <RiChatNewLine className="text-secondary-light text-lg" />
                            <TextSmall>Add Comment</TextSmall>
                        </div>
                        <div className="flex items-center gap-common">
                            <TextExtraSmall>6 min ago</TextExtraSmall>
                            <RiBookmarkLine className="text-secondary-light text-[26px] p-1 cursor-pointer hover:bg-secondary-light/10" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCart;