import TextDescription from '../../../Utils/ReUseAbleComponents/TextDescription';
import TextSecondaryTitle from '../../../Utils/ReUseAbleComponents/TextSecondaryTitle';

const BlogRIghtSIdeMoreBlogMenu = () => {
    return (
        <div
            className='box_area space-y-common'
        >
            <TextSecondaryTitle>
                More From {" "}
                <span className='text-textHover-dark'>
                    Mahabub Alam
                </span>
            </TextSecondaryTitle>
            <div>
                <TextDescription>
                    Different type of testing
                </TextDescription>
            </div>
            <div>
                <TextDescription>
                    Different type of testing
                </TextDescription>
            </div>
            <div>
                <TextDescription>
                    Different type of testing
                </TextDescription>
            </div>
        </div>
    );
};

export default BlogRIghtSIdeMoreBlogMenu;