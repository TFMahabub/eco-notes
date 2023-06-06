import BlogCart from "@/components/Cart/BlogCart";

const MainContent = () => {
    return (
        <div className="space-y-common-.75">
            {
                [...Array(6)].map((_, i) => (
                    <BlogCart key={i} />
                ))
            }
        </div>
    );
};

export default MainContent;