import ButtonPrimarySubmit from "@/app/Utils/ReUseAbleComponents/ButtonPrimarySubmit";

const CommentBox = () => {
  // const handleOnSubmit = (e: any) => {
  //   e.preventDefault();

  //   console.log(e?.target?.comment?.value);
  // };
  return (
    <form className="w-full">
      <textarea
        name="comment"
        placeholder="Add a comment"
        className="border border-border-light dark:border-darkMode-border focus:outline-none p-2 rounded-common w-full text-secondary-light tracking-wide"
      />
      <ButtonPrimarySubmit>submit</ButtonPrimarySubmit>
    </form>
  );
};

export default CommentBox;
