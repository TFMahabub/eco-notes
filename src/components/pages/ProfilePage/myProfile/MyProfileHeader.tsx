import TextSecondaryTitle from "@/app/Utils/ReUseAbleComponents/TextSecondaryTitle";
import { Edit } from "../../../Icons/Edit";

const MyProfileHeader = () => {
  return (
    <>
      <div>
        <TextSecondaryTitle>My Profile</TextSecondaryTitle>
      </div>
      <div className="flex items-center gap-common">
        <Edit className="text-3xl colorText hover:text-textHover-dark duration-200 cursor-pointer" />
      </div>
    </>
  );
};

export default MyProfileHeader;
