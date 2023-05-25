import React from 'react';

const DescriptionText = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className='text-sm text-background-light'>
            {children}
        </p>
    );
};

export default DescriptionText;