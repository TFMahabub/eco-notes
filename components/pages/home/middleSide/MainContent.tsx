import BlogCart from "@/components/Cart/BlogCart";

const MainContent = () => {
    return (
        <>
            {
                [...Array(4)].map(() => (
                    <BlogCart />
                ))
            }
        </>
    );
};

export default MainContent;