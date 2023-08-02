import ButtonPrimary from "@/app/Utils/ReUseAbleComponents/ButtonPrimary";
import ButtonSecondary from "@/app/Utils/ReUseAbleComponents/ButtonSecondary";
import TextDescription from "@/app/Utils/ReUseAbleComponents/TextDescription";
import TextSecondaryTitle from "@/app/Utils/ReUseAbleComponents/TextSecondaryTitle";
import Link from "next/link";

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
      <div className="flex flex-col item-center gap-common">
        <Link href={"/login"}>
          <ButtonPrimary>Log In</ButtonPrimary>
        </Link>
        <Link href={"/singup"}>
          <ButtonSecondary>Create account</ButtonSecondary>
        </Link>
      </div>
    </>
  );
};

export default WellcomeTextIndex;
