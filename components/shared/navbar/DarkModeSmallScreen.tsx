'use client'
import { useTheme } from 'next-themes';
import TextMenuItem from '../../../Utils/ReUseAbleComponents/TextMenuItem';
import Moon from '../../Icons/Moon';
import Sun from '../../Icons/Sun';

const DarkModeSmallScreen = () => {
    const { theme, setTheme } = useTheme()
    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className='w-full flex items-center justify-start gap-common px-common-1 py-common hover:bg-secondary-dark/10 dark:hover:bg-primary/10 transform transition ease-linear duration-100'
        >
            {theme === 'light' ?
                <>
                    <Moon />
                    <TextMenuItem>
                        Dark Mode
                    </TextMenuItem></>
                :
                <>
                    <Sun />
                    <TextMenuItem>
                        Light Mode
                    </TextMenuItem>
                </>
            }
        </button>
    );
};

export default DarkModeSmallScreen;