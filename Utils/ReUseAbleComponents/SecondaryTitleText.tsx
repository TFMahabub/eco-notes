import React from 'react';

const SecondaryTitleText = ({ children }: { children: React.ReactNode }) => {
    return (
        <h5 className='font-semibold text-xl md:text-2xl text-secondary-dark leading-6 md:leading-7'>
            {children}
        </h5>
    );
};

export default SecondaryTitleText;