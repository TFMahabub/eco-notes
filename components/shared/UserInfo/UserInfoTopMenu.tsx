import Image from 'next/image';
import TextExtraSmall from '../../../Utils/ReUseAbleComponents/TextExtraSmall';
import TextMenuItem from '../../../Utils/ReUseAbleComponents/TextMenuItem';
import profileImage from '../../../public/assets/profile.jpg';

const UserInfoTopMenu = () => {
    return (
        <>
            <div className="relative h-8 w-8 flex gap-2 rounded-lg overflow-hidden">
                <Image
                    src={profileImage}
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    alt=""
                />
            </div>
            <div>
                <TextMenuItem>Mahabub Alam</TextMenuItem>
                <TextExtraSmall>Premium Member</TextExtraSmall>
            </div>
        </>
    );
};

export default UserInfoTopMenu;