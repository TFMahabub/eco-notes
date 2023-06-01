interface PropsType {
    children: React.ReactNode
    onClick?: () => void
}

const ButtonPrimary = ({ children, ...attributes }: PropsType) => {
    return (
        <button
            {...attributes}
            className='bg-secondary-dark text-sm md:text-base border border-secondary-dark text-primary px-common-1 py-1 rounded-common'>
            {children}
        </button>
    );
};

export default ButtonPrimary;