import React from "react";

interface PropsType {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonTextHover = ({ children, ...attributes }: PropsType) => {
  return (
    <button
      {...attributes}
      className="hover:bg-textHover-dark/30 py-1 px-4 rounded-md small-text-color hover:text-textHover-dark dark:hover:text-primary font-medium"
    >
      {children}
    </button>
  );
};

export default ButtonTextHover;
