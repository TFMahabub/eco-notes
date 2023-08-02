import TextDescription from "@/app/Utils/ReUseAbleComponents/TextDescription";
import TextSecondaryTitle from "@/app/Utils/ReUseAbleComponents/TextSecondaryTitle";
import TextSmall from "@/app/Utils/ReUseAbleComponents/TextSmall";

const Listings = () => {
  return (
    <>
      <TextSecondaryTitle>#Listings</TextSecondaryTitle>
      <div className="space-y-common-.75">
        <div className="border-b box-border-color cursor-pointer pb-4 last:border-0">
          <TextDescription extraClass="hover-text-color common-duration">
            New Relic is making an investment in the future of digital access |
            $100k in grants!
          </TextDescription>
          <TextSmall extraClass="">collabs</TextSmall>
        </div>
      </div>
    </>
  );
};

export default Listings;
