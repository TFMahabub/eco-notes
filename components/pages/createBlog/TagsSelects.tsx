import { useDispatch } from "react-redux";
import Select from "react-select";
import tagsData from "../../../data/tags.json";
import { setFormTags } from "../../../features/CreateBlog/CreateBlogSlice";

const TagsSelects = ({ tags }: any) => {
  const dispatch = useDispatch();

  const colorStyles = {
    control: (styles: any) => ({ ...styles, backgroundColor: "#fff" }),
    option: (styles: any, { data, isDisable, isFocused, isSelected }: any) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles: any, { data }: any) => {
      return {
        ...styles,
        backgroundColor: data.color,
        color: "#fff",
      };
    },
    multiValueLabel: (styles: any, { data }: any) => {
      return {
        ...styles,
        color: "#fff",
      };
    },
    multiValueRemove: (styles: any, { data }: any) => {
      return {
        ...styles,
        color: "#fff",
        cursor: "pointer",
        ":hover": {
          color: "#fff",
        },
      };
    },
  };

  return (
    <Select
      defaultValue={tags || []}
      isMulti
      options={tagsData}
      onChange={(e) => dispatch(setFormTags(e))}
      styles={colorStyles}
    />
  );
};

export default TagsSelects;
