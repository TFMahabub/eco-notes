import React from 'react';

const DescriptionText = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className='text-base tracking-wide text-secondary-light leading-[22px] md:leading-6'>
            {children}
        </p>
    );
};

export default DescriptionText;