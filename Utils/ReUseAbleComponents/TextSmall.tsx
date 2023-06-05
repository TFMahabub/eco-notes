import React from 'react';

const TextSmall = ({ children, extraClass }: { children: React.ReactNode, extraClass?: string }) => {
    return (
        <p className={`text-sm text-secondary-light ${extraClass}`}>
            {children}
        </p>
    );
};

export default TextSmall;