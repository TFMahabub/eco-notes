
const page = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            this is daynamin page{params?.id}
        </div>
    );
};

export default page;