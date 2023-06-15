import TextDescription from '../../../Utils/ReUseAbleComponents/TextDescription';
import TextPrimaryTitle from '../../../Utils/ReUseAbleComponents/TextPrimaryTitle';
import TagCartBig from '../../Cart/TagCartBig';

const BlogMainBlogPart = () => {
    return (
        <>
            {/* ----title---- */}
            <TextPrimaryTitle>What is Web Application Security?</TextPrimaryTitle>
            {/* ----tags---- */}
            <div className='flex flex-wrap'>
                <TagCartBig tag={{ name: "react" }} />
                <TagCartBig tag={{ name: "angular" }} />
                <TagCartBig tag={{ name: "vue" }} />
                <TagCartBig tag={{ name: "redux" }} />
                <TagCartBig tag={{ name: "next" }} />
            </div>
            {/* ----description---- */}
            <div className='space-y-common-.75'>
                <TextDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo ratione, molestiae consectetur velit neque maxime suscipit voluptatum praesentium, mollitia hic deleniti doloremque distinctio laudantium. Voluptatem rerum suscipit ratione consectetur reprehenderit voluptas ipsam assumenda cumque quibusdam accusantium adipisci quia hic doloribus aspernatur incidunt, quo in iure voluptatibus similique blanditiis tempore sequi sint quidem. Repudiandae debitis ipsa sapiente ducimus corporis soluta quidem eaque officiis sit molestiae nemo, impedit distinctio natus tenetur ratione voluptate! Itaque esse, optio aspernatur obcaecati nobis adipisci quos ab ducimus! Reiciendis suscipit accusantium veritatis! Dolore quo perferendis minus, nulla minima necessitatibus non id ab pariatur veritatis nam rem accusantium maxime odio adipisci assumenda illo officiis vitae rerum sunt. Ipsam alias repudiandae at cum necessitatibus delectus, atque ducimus cumque quo consectetur exercitationem adipisci similique aspernatur accusamus earum hic nam laudantium autem magnam assumenda laboriosam officia? Facilis itaque consequuntur dignissimos porro eos! Porro itaque autem eaque similique, illo dolores ipsa. Sapiente, facere dolor architecto incidunt voluptatem ad praesentium minus ratione tempora. Minus dolore voluptatibus sit. Voluptatibus vero sapiente corrupti laudantium nesciunt temporibus obcaecati tempore delectus, tenetur dolores fugiat quidem voluptates modi exercitationem tempora eligendi dolore iste et inventore ad autem illo ea atque iusto? Est eaque maiores sint error porro.
                </TextDescription>
                <TextDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo ratione, molestiae consectetur velit neque maxime suscipit voluptatum praesentium, mollitia hic deleniti doloremque distinctio laudantium. Voluptatem rerum suscipit ratione consectetur reprehenderit voluptas ipsam assumenda cumque quibusdam accusantium adipisci quia hic doloribus aspernatur incidunt, quo in iure voluptatibus similique blanditiis tempore sequi sint quidem. Repudiandae debitis ipsa sapiente ducimus corporis soluta quidem eaque officiis sit molestiae nemo, impedit distinctio natus tenetur ratione voluptate! Itaque esse, optio aspernatur obcaecati nobis adipisci quos ab ducimus! Reiciendis suscipit accusantium veritatis! Dolore quo perferendis minus, nulla minima necessitatibus non id ab pariatur veritatis nam rem accusantium maxime odio adipisci assumenda illo officiis vitae rerum sunt. Ipsam alias repudiandae at cum necessitatibus delectus, atque ducimus cumque quo consectetur exercitationem adipisci similique aspernatur accusamus earum hic nam laudantium autem magnam assumenda laboriosam officia? Facilis itaque consequuntur dignissimos porro eos! Porro itaque autem eaque similique, illo dolores ipsa. Sapiente, facere dolor architecto incidunt voluptatem ad praesentium minus ratione tempora. Minus dolore voluptatibus sit. Voluptatibus vero sapiente corrupti laudantium nesciunt temporibus obcaecati tempore delectus, tenetur dolores fugiat quidem voluptates modi exercitationem tempora eligendi dolore iste et inventore ad autem illo ea atque iusto? Est eaque maiores sint error porro.
                </TextDescription>
            </div>
            {/* ----title---- */}
        </>
    );
};

export default BlogMainBlogPart;