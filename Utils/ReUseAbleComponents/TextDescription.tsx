import React from 'react';

const TextDescription = ({ children, extraClass }: { children: React.ReactNode, extraClass?: string }) => {
    return (
        <p className={`text-base tracking-wide small-text-color leading-[22px] md:leading-6 ${extraClass}`}>
            {children}
        </p>
    );
};

export default TextDescription;