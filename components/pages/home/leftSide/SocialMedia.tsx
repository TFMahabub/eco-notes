import { FaDiscord } from 'react-icons/fa';
import { RiFacebookBoxFill, RiGithubFill, RiInstagramLine, RiSkypeLine, RiTwitterFill, RiWhatsappLine } from 'react-icons/ri';

const SocialMedia = () => {
    return (
        <>
            <RiFacebookBoxFill className='text-2xl text-secondary-light hover:text-secondary-dark duration-300 cursor-pointer' />
            <RiTwitterFill className='text-2xl text-secondary-light hover:text-secondary-dark duration-300 cursor-pointer' />
            <RiGithubFill className='text-2xl text-secondary-light hover:text-secondary-dark duration-300 cursor-pointer' />
            <RiInstagramLine className='text-2xl text-secondary-light hover:text-secondary-dark duration-300 cursor-pointer' />
            <FaDiscord className='text-2xl text-secondary-light hover:text-secondary-dark duration-300 cursor-pointer' />
            <RiWhatsappLine className='text-2xl text-secondary-light hover:text-secondary-dark duration-300 cursor-pointer' />
            <RiSkypeLine className='text-2xl text-secondary-light hover:text-secondary-dark duration-300 cursor-pointer' />
        </>
    );
};

export default SocialMedia;