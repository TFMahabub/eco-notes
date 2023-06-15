import Image from 'next/image';
import TextSmall from '../../../Utils/ReUseAbleComponents/TextSmall';
import profileImage from '../../../public/assets/profile.jpg';

const SingleComment = () => {
    return (
        <div
            className='flex gap-common-.75 '
        >
            <div
                className="relative h-8 w-8 flex gap-2 rounded-full overflow-hidden"
            >
                <Image
                    src={profileImage}
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                    alt=""
                />
            </div>
            <div
                className='w-full border border-border-light dark:border-darkMode-border p-2 rounded-md'
            >
                <TextSmall>
                    {
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit debitis voluptates eligendi, commodi quam fuga autem veniam incidunt.'.slice(0, 120) + "..."
                    }
                </TextSmall>
            </div>
        </div>
    );
};

export default SingleComment;