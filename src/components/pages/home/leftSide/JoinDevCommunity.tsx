import TextSmall from "@/app/Utils/ReUseAbleComponents/TextSmall";
import Image from "next/image";
import devCommunity from "../../../../../public/assets/dev-community.png";

const JoinDevCommunity = () => {
  return (
    <>
      <TextSmall>Dev Community</TextSmall>
      <div className="relative h-56 rounded-lg w-full overflow-hidden">
        <Image
          src={devCommunity}
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          alt="join the community"
        />
      </div>
    </>
  );
};

export default JoinDevCommunity;
