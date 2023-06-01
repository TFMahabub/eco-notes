import ButtonPrimary from '@/Utils/ReUseAbleComponents/ButtonPrimary';
import ButtonSecondary from '@/Utils/ReUseAbleComponents/ButtonSecondary';
import DescriptionText from '@/Utils/ReUseAbleComponents/DescriptionText';
import SecondaryTitleText from '@/Utils/ReUseAbleComponents/SecondaryTitleText';

const WellcomeTextIndex = () => {
    return (
        <>
            <SecondaryTitleText>Wellcome to eco-Notes</SecondaryTitleText>
            <DescriptionText>
                We're a place where coders share, stay up-to-date and grow their careers.
            </DescriptionText>
            <div className='flex flex-col item-center gap-common'>
                <ButtonPrimary>Log In</ButtonPrimary>
                <ButtonSecondary>Create account</ButtonSecondary>
            </div>
        </>
    );
};

export default WellcomeTextIndex;