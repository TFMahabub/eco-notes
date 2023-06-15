import React from 'react';

const TextPrimaryTitle = ({ children, extraClass }: { children: React.ReactNode, extraClass?: string }) => {
    return (
        <h1
            className='text-5xl text-secondary-dark dark:text-darkMode-textPrimaryColor tracking- font-extrabold leading-tight'
        >
            {children}
        </h1>
    );
};

export default TextPrimaryTitle;