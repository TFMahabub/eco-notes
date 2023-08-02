interface PropsType {
  children: React.ReactNode;
  onClick?: () => void;
}

const ActionButton = ({ children, ...attributes }: PropsType) => {
  return (
    <button
      {...attributes}
      className="bg-secondary-dark dark:bg-darkMode-contentBG flex items-center justify-center rounded-md tracking-wide text-primary dark:text-darkMode-textPrimaryColor px-8 h-10"
    >
      {children}
    </button>
  );
};

export default ActionButton;
