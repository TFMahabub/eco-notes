import DescriptionText from "@/Utils/ReUseAbleComponents/TextDescription";
import SecondaryTitleText from "@/Utils/ReUseAbleComponents/TextSecondaryTitle";
import TextSmall from "@/Utils/ReUseAbleComponents/TextSmall";

const Discuss = () => {
    return (
        <>
            <SecondaryTitleText>#discuss</SecondaryTitleText>
            <div className="space-y-common-.75">
                {
                    [...Array(10)].map((_, i) => (
                        <div key={i} className="border-b border-border-light cursor-pointer pb-4 last:border-0">
                            <DescriptionText extraClass="hover:text-secondary-dark">This is discuss tittle</DescriptionText>
                            <TextSmall extraClass="leading-3">collabs</TextSmall>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Discuss;