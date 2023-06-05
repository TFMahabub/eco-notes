import TextExtraSmall from "@/Utils/ReUseAbleComponents/TextExtraSmall";
import TextSecondaryTitle from "@/Utils/ReUseAbleComponents/TextSecondaryTitle";
import TextSmall from "@/Utils/ReUseAbleComponents/TextSmall";
import Image from "next/image";
import Link from "next/link";
import profileImage from '../../public/assets/profile.jpg';

const BlogCart = () => {
    return (
        <div className="box_area">
            <div className="flex gap-3">
                <div className="relative h-10 rounded-full overflow-hidden">
                    <Image
                        src={profileImage}
                        layout="fill"
                        alt="profile-pic" />
                </div>
                {/* --------content-------- */}
                <div className="space-y-common">
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
                            [...Array(4)].map(() => (
                                <p className="px-[6px] py-[1px] hover:bg-casual-blue/10 border border-primary hover:border-casual-blue rounded-md text-casual-blue duration-200 cursor-pointer text-sm">
                                    #<span className="text-secondary-light hover:text-casual-blue">react</span>
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCart;