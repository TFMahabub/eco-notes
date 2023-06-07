import React from 'react';
interface Props {
    children: React.ReactNode,
    extraClass?: string,
    onClick?: (e: any) => void
}

const TextSecondaryTitle = ({ children, extraClass, ...atribute }: Props) => {
    return (
        <h5
            className={`font-semibold text-[1.125rem] md:text-[1.25rem] secondary-text-color leading-6 md:leading-7 ${extraClass}`}
            {...atribute}
        >
            {children}
        </h5>
    );
};

export default TextSecondaryTitle;