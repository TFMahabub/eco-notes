'use client'
import BlogLikeCommentSide from "../../../../components/pages/Blog/BlogLikeCommentSide";
import BlogMainContent from "../../../../components/pages/Blog/BlogMainContent";

const page = ({ params }: { params: { id: string } }) => {
    return (
        <section
            className="container grid grid-cols-12 gap-main-content-gap mt-main-content-gap"
        >
            <div
                className="col-span-1  flex flex-col items-center gap-6 mt-10"
            >
                <BlogLikeCommentSide
                    dynamicID={params?.id}
                />
            </div>
            <div
                className="col-span-8 box_area space-y-main-content-gap"
            >
                <BlogMainContent />
            </div>
            <div
                className="col-span-3 box_area h-80"
            >
                <p>this is daynamin page</p>
            </div>
        </section>
    );
};

export default page;