import React from 'react';

const TextItemBold = ({ children, extraClass }: { children: React.ReactNode, extraClass?: string }) => {
    return (
        <p className='text-md text-secondary-dark dark:text-darkMode-textPrimaryColor tracking-wider font-semibold'>
            {children}
        </p>
    );
};

export default TextItemBold;