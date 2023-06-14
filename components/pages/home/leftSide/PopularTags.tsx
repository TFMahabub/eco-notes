import TextDescription from "../../../../Utils/ReUseAbleComponents/TextDescription";
import TextSecondaryTitle from "../../../../Utils/ReUseAbleComponents/TextSecondaryTitle";

interface TagTypes {
    id: number;
    tag: string;
}

const PopularTags = () => {
    const tags = [
        {
            id: 1,
            tag: "react.js"
        },
        {
            id: 2,
            tag: "angular.js"
        },
        {
            id: 3,
            tag: "vue.js"
        },
        {
            id: 4,
            tag: "express.js"
        },
        {
            id: 5,
            tag: "node.js"
        },
        {
            id: 5,
            tag: "mongoos"
        }
    ]
    return (
        <>
            <TextSecondaryTitle>#Popular Tags</TextSecondaryTitle>
            {
                tags.map((item: TagTypes) => (
                    <TextDescription
                        key={item?.id}
                        extraClass="hover-text-color common-duration cursor-pointer"
                    >
                        # {item?.tag}
                    </TextDescription>
                ))
            }
        </>
    );
};

export default PopularTags;