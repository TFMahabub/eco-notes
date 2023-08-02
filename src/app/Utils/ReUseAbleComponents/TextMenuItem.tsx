import React from 'react';

const TextMenuItem = ({ children, extraClass }: { children: React.ReactNode, extraClass?: string }) => {
    return (
        <li className='list-none'>
            {children}
        </li>
    );
};

export default TextMenuItem;