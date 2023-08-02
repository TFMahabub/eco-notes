import TextDescription from "@/app/Utils/ReUseAbleComponents/TextDescription";
import TextSecondaryTitle from "@/app/Utils/ReUseAbleComponents/TextSecondaryTitle";
import TextSmall from "@/app/Utils/ReUseAbleComponents/TextSmall";

const Discuss = () => {
  return (
    <>
      <TextSecondaryTitle>#discuss</TextSecondaryTitle>
      <div className="space-y-common-.75">
        <div className="border-b box-border-color cursor-pointer pb-4 last:border-0">
          <TextDescription extraClass="hover-text-color common-duration">
            What&apos;s your initial reaction to Apple Vision Pro?
          </TextDescription>
          <TextSmall extraClass="">collabs</TextSmall>
        </div>
      </div>
    </>
  );
};

export default Discuss;
