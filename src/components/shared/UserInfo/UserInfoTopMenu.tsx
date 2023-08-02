import TextExtraSmall from "@/app/Utils/ReUseAbleComponents/TextExtraSmall";
import TextMenuItem from "@/app/Utils/ReUseAbleComponents/TextMenuItem";
import Image from "next/image";
import profileImage from "../../../../public/assets/profile.jpg";

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
        <TextMenuItem extraClass="group-hover:underline text-blue">
          Mahabub Alam
        </TextMenuItem>
        <TextExtraSmall>Premium Member</TextExtraSmall>
      </div>
    </>
  );
};

export default UserInfoTopMenu;
