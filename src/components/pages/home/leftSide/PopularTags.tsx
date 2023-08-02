import TextDescription from "@/app/Utils/ReUseAbleComponents/TextDescription";
import TextSecondaryTitle from "@/app/Utils/ReUseAbleComponents/TextSecondaryTitle";
import { useFetch } from "@/components/hooks/useFetch";

interface TagTypes {
  id: number;
  tag: string;
}

const PopularTags = async () => {
  const popularTags = await useFetch(
    `${process.env.NEXT_DATA_FETCHING_BASE_URL}/popular-tags`,
    {
      next: { revalidate: 5 },
    }
  );

  return (
    <>
      <TextSecondaryTitle>#Popular Tags</TextSecondaryTitle>
      {popularTags.map((item: TagTypes) => (
        <TextDescription
          key={item?.id}
          extraClass="hover-text-color common-duration cursor-pointer"
        >
          # {item?.tag}
        </TextDescription>
      ))}
    </>
  );
};

export default PopularTags;
