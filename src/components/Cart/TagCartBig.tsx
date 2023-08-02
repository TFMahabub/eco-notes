import { useTagsColor } from "../hooks/useTagsColor";
import { TAG } from "../pages/Blog/Type";

const TagCartBig = ({ tag }: { tag: TAG }) => {
  const colorClass = useTagsColor(tag.tag);
  return (
    <p
      className={`px-[6px] py-[1px] border ${colorClass} rounded-md common-duration cursor-pointer text-lg group common-duration`}
    >
      # <span className="small-text-color">{tag?.tag}</span>
    </p>
  );
};

export default TagCartBig;
