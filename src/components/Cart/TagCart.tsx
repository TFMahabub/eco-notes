const TagCart = ({ tag }: { tag: any }) => {
  const color = tag.colorCode;

  return (
    <p
      className={`px-[6px] py-[1px] hover:bg-[#${color}]/10 border border-primary/0 hover:border-technologyColor-react rounded-md common-duration cursor-pointer text-sm group common-duration text-[#${color}]`}
    >
      #<span className="small-text-color ">{tag?.tag}</span>
    </p>
  );
};

export default TagCart;
