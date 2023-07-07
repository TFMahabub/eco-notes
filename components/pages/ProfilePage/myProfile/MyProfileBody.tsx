import Image from "next/image";
import ButtonPrimary from "../../../../Utils/ReUseAbleComponents/ButtonPrimary";
import TextMenuItem from "../../../../Utils/ReUseAbleComponents/TextMenuItem";
import profileImage from "../../../../public/assets/profile.jpg";

const MyProfileBody = () => {
  return (
    <>
      <div className="relative h-36 w-36 rounded-full overflow-hidden">
        <Image
          src={profileImage}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          alt="profile-pic"
        />
        <ButtonPrimary>Edit Profile</ButtonPrimary>
      </div>
      <div className="flex flex-col gap-common-.75">
        <ProfileItem menuName="Student ID:" value="1234455" />
        <ProfileItem menuName="full Name:" value="Mahabub Alam" />
        <ProfileItem menuName="Email:" value="rjmahabub543@gmail.com" />
        <ProfileItem menuName="Phone Number:" value="+8801636725669" />
      </div>
    </>
  );
};

export default MyProfileBody;

const ProfileItem = ({
  menuName,
  value,
}: {
  menuName: string;
  value: string;
}) => (
  <div className="flex flex-col">
    <TextMenuItem>{menuName}</TextMenuItem>
    <p className="text-lg font-medium">{value}</p>
  </div>
);
