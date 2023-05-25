import React from 'react';

const SecondaryTitleText = ({ children }: { children: React.ReactNode }) => {
    return (
        <h3 className='font-semibold text-[#db3b3b]'>
            {children}
        </h3>
    );
};

export default SecondaryTitleText;