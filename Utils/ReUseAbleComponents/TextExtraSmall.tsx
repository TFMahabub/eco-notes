import React from 'react';

const TextExtraSmall = ({ children, extraClass }: { children: React.ReactNode, extraClass?: string }) => {
    return (
        <p className={`text-xs tracking-wide text-secondary-light leading-3 ${extraClass}`}>
            {children}
        </p>
    );
};

export default TextExtraSmall;