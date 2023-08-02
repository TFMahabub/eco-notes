import React from 'react';

const ButtonPrimarySubmit = ({ children }: { children: React.ReactNode }) => {
    return (
        <button
            type='submit'
            className='bg-secondary-dark dark:bg-darkMode-buttonBG text-sm md:text-base border border-color text-primary dark:text-darkMode-textPrimaryColor px-common-1 py-1 rounded-common'>
            {children}
        </button>
    );
};

export default ButtonPrimarySubmit;