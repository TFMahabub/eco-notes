import { useTagsColor } from "../hooks/useTagsColor";

const TagCart = ({ tag }: { tag: any }) => {
  const colorClass = useTagsColor(tag.tag);
  // console.log(color);

  return (
    <p
      className={`px-[6px] py-[1px] border ${colorClass} rounded-md cursor-pointer text-sm group common-duration`}
    >
      #<span className="small-text-color ">{tag?.tag}</span>
    </p>
  );
};

export default TagCart;
