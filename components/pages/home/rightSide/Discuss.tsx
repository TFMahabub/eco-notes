import TextDescription from "@/Utils/ReUseAbleComponents/TextDescription";
import TextSmall from "@/Utils/ReUseAbleComponents/TextSmall";

const Discuss = () => {
    return (
        <>
            <TextDescription>#discuss</TextDescription>
            <div className="space-y-common-.75">
                {
                    [...Array(10)].map((_, i) => (
                        <div key={i} className="border-b border-border-light cursor-pointer pb-4 last:border-0">
                            <TextDescription extraClass="hover:text-secondary-dark">
                                This is discuss tittle
                            </TextDescription>
                            <TextSmall extraClass="">collabs</TextSmall>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Discuss;