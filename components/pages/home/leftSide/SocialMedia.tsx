import { FaDiscord } from 'react-icons/fa';
import { RiFacebookBoxFill, RiGithubFill, RiInstagramLine, RiSkypeLine, RiTwitterFill, RiWhatsappLine } from 'react-icons/ri';

const SocialMedia = () => {
    return (
        <>
            <RiFacebookBoxFill className='text-2xl text-secondary-light dark:text-darkMode-textSecondaryColor hover:text-secondary-dark dark:hover:text-darkMode-textPrimaryColor common-duration cursor-pointer' />
            <RiTwitterFill className='text-2xl text-secondary-light dark:text-darkMode-textSecondaryColor hover:text-secondary-dark dark:hover:text-darkMode-textPrimaryColor common-duration cursor-pointer' />
            <RiGithubFill className='text-2xl text-secondary-light dark:text-darkMode-textSecondaryColor hover:text-secondary-dark dark:hover:text-darkMode-textPrimaryColor common-duration cursor-pointer' />
            <RiInstagramLine className='text-2xl text-secondary-light dark:text-darkMode-textSecondaryColor hover:text-secondary-dark dark:hover:text-darkMode-textPrimaryColor common-duration cursor-pointer' />
            <FaDiscord className='text-2xl text-secondary-light dark:text-darkMode-textSecondaryColor hover:text-secondary-dark dark:hover:text-darkMode-textPrimaryColor common-duration cursor-pointer' />
            <RiWhatsappLine className='text-2xl text-secondary-light dark:text-darkMode-textSecondaryColor hover:text-secondary-dark dark:hover:text-darkMode-textPrimaryColor common-duration cursor-pointer' />
            <RiSkypeLine className='text-2xl text-secondary-light dark:text-darkMode-textSecondaryColor hover:text-secondary-dark dark:hover:text-darkMode-textPrimaryColor common-duration cursor-pointer' />
        </>
    );
};

export default SocialMedia;