
const TagCartBig = ({ tag }: any) => {
    return (
        <p
            className="px-[6px] py-[1px] hover:bg-technologyColor-react/10 border border-primary/0 hover:border-technologyColor-react rounded-md text-technologyColor-react common-duration cursor-pointer text-lg group common-duration"
        >
            # {" "}
            <span className="small-text-color">
                {tag?.name}
            </span>
        </p>
    );
};

export default TagCartBig;