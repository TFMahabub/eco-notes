import React from 'react';

const TextSmall = ({ children, extraClass }: { children: React.ReactNode, extraClass?: string }) => {
    return (
        <p className={`text-sm small-text-color ${extraClass}`}>
            {children}
        </p>
    );
};

export default TextSmall;