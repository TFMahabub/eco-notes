import React from 'react';

interface PropsType {
    children: React.ReactNode
    onClick?: () => void
}

const ButtonSecondary = ({ children, ...attributes }: PropsType) => {
    return (
        <button
            {...attributes}
            className='list-none border border-color text-sm md:text-base text-secondary-dark dark:text-darkMode-textPrimaryColor px-common-1 py-1 rounded-lg'>
            {children}
        </button>
    );
};

export default ButtonSecondary;