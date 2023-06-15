import Image from 'next/image';
import profileImage from '../../../public/assets/profile.jpg';

const ProfileImage = () => {
    return (
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
    );
};

export default ProfileImage;