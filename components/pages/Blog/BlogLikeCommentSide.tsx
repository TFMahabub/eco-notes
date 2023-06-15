import BookmarkDynamic from '../../Icons/BookmarkDynamic';
import ChatIcon from '../../Icons/ChatIcon';
import Lovehart from '../../Icons/Lovehart';
import { DynamicID } from './Type';

const BlogLikeCommentSide = ({ dynamicID }: DynamicID) => {
    return (
        <>
            <span
                // onClick={()=>}
                title='Add Reacttion'
                className='cursor-pointer active:scale-150 duration-300'
            >
                <Lovehart moreClass='w-9 h-9' />
            </span>
            <span
                // onClick={()=>}
                title='Add Comments'
                className='cursor-pointer active:scale-150 duration-300'
            >
                <ChatIcon moreClass='w-8 h-8' />
            </span>
            <span
                // onClick={()=>}
                title='Save'
                className='cursor-pointer active:scale-150 duration-300'
            >
                <BookmarkDynamic moreClass='w-8 h-8' />
            </span>
        </>
    );
};

export default BlogLikeCommentSide;