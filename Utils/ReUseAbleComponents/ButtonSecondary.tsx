import React from 'react';

interface PropsType {
    children: React.ReactNode
    onClick?: () => void
}

const ButtonSecondary = ({ children, ...attributes }: PropsType) => {
    return (
        <button
            {...attributes}
            className='list-none border text-sm md:text-base border-secondary-dark text-secondary-dark px-common-1 py-1 rounded-lg'>
            {children}
        </button>
    );
};

export default ButtonSecondary;