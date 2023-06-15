import Image from 'next/image';
import TextExtraSmall from '../../../Utils/ReUseAbleComponents/TextExtraSmall';
import TextItemBold from '../../../Utils/ReUseAbleComponents/TextItemBold';
import profileImage from '../../../public/assets/profile.jpg';

const UserInfo = () => {
    return (
        <>
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
            <div
                className=''
            >
                <TextItemBold>Mahabub Alam</TextItemBold>
                <TextExtraSmall>Posted on Jun 15</TextExtraSmall>
            </div>
        </>
    );
};

export default UserInfo;