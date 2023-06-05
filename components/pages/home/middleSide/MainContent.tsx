import BlogCart from "@/components/Cart/BlogCart";

const MainContent = () => {
    return (
        <>
            {
                [...Array(4)].map((_, i) => (
                    <BlogCart key={i} />
                ))
            }
        </>
    );
};

export default MainContent;