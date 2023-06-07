interface PropsType {
    children: React.ReactNode
    onClick?: () => void
}

const ButtonPrimary = ({ children, ...attributes }: PropsType) => {
    return (
        <button
            {...attributes}
            className='bg-secondary-dark dark:bg-darkMode-buttonBG text-sm md:text-base border border-color text-primary dark:text-darkMode-textPrimaryColor px-common-1 py-1 rounded-common'>
            {children}
        </button>
    );
};

export default ButtonPrimary;