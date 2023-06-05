import React from 'react';

const DescriptionText = ({ children, extraClass }: { children: React.ReactNode, extraClass?: string }) => {
    return (
        <p className={`text-base tracking-wide text-secondary-light leading-[22px] md:leading-6 ${extraClass}`}>
            {children}
        </p>
    );
};

export default DescriptionText;