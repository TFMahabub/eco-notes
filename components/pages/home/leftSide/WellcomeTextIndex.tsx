import ButtonPrimary from "../../../../Utils/ReUseAbleComponents/ButtonPrimary";
import ButtonSecondary from "../../../../Utils/ReUseAbleComponents/ButtonSecondary";
import TextDescription from "../../../../Utils/ReUseAbleComponents/TextDescription";
import TextSecondaryTitle from "../../../../Utils/ReUseAbleComponents/TextSecondaryTitle";

const WellcomeTextIndex = () => {

    return (
        <>
            <TextSecondaryTitle>Wellcome to {process.env.NEXT_PUBLIC_COMPANY_NAME}</TextSecondaryTitle>
            <TextDescription>
                We&apos;re a place where coders share&#44; stay up-to-date and grow their careers&#46;
            </TextDescription>
            <div className='flex flex-col item-center gap-common'>
                <ButtonPrimary>Log In</ButtonPrimary>
                <ButtonSecondary>Create account</ButtonSecondary>
            </div>
        </>
    );
};

export default WellcomeTextIndex;