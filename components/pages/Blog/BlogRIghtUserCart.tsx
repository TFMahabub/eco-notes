import Image from "next/image";
import TextDescription from "../../../Utils/ReUseAbleComponents/TextDescription";
import TextItemBold from "../../../Utils/ReUseAbleComponents/TextItemBold";
import TextSecondaryTitle from "../../../Utils/ReUseAbleComponents/TextSecondaryTitle";
import profileImage from '../../../public/assets/profile.jpg';

const BlogRIghtUserCart = () => {
    return (
        <div
            className="box_area relative overflow-hidden space-y-common-.75"
        >
            <div
                className='absolute h-8 inset-x-0 top-0 bg-textHover-light'
            ></div>
            {/* ----profile-pic----- */}
            <div
                className="flex items-end gap-common-.75"
            >
                <div
                    className="relative h-12 w-12 flex gap-2 rounded-full overflow-hidden"
                >
                    <Image
                        src={profileImage}
                        objectFit="cover"
                        objectPosition="center"
                        layout="fill"
                        alt=""
                    />
                </div>
                <TextSecondaryTitle>
                    Mahabub Alam
                </TextSecondaryTitle>
            </div>
            {/* ----profile-title----- */}
            <TextDescription>
                Front-end Advocate || Mentor || Leader
            </TextDescription>
            {/* ----user-location----- */}
            <div>
                <TextItemBold>
                    Location
                </TextItemBold>
                <TextDescription>
                    Dhaka, Bangladesh
                </TextDescription>
            </div>
            {/* ----joined-date----- */}
            <div>
                <TextItemBold>
                    Joined
                </TextItemBold>
                <TextDescription>
                    Nov, 20, 2022
                </TextDescription>
            </div>
        </div>
    );
};

export default BlogRIghtUserCart;