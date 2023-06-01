interface Menu {
    id: number;
    name: string;
}

const TopMenus = () => {

    const topMenus = [
        { id: 1, name: "relevant" },
        { id: 2, name: "letest" },
        { id: 3, name: "top" },
    ]
    return (
        <>
            {
                topMenus &&
                topMenus?.map((item: Menu) => (
                    <h4 key={item?.id}
                        className="text-lg text-secondary-light font-medium capitalize"
                    >
                        {item?.name}
                    </h4>
                ))
            }
        </>
    );
};

export default TopMenus;