import TextDescription from "@/app/Utils/ReUseAbleComponents/TextDescription";
import TextSecondaryTitle from "@/app/Utils/ReUseAbleComponents/TextSecondaryTitle";

const WellcomeTextIndex = () => {
  return (
    <>
      <TextSecondaryTitle>
        Wellcome to {process.env.NEXT_PUBLIC_COMPANY_NAME}
      </TextSecondaryTitle>
      <TextDescription>
        We&apos;re a place where coders share&#44; stay up-to-date and grow
        their careers&#46;
      </TextDescription>
    </>
  );
};

export default WellcomeTextIndex;
