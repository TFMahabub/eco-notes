import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const DarkMode = () => {

    const [mount, setMount] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        setMount(true)
    }, [])

    if (!mount) return null;
    return (
        <>
            {
                currentTheme === 'light' &&
                <div
                    onClick={() => setTheme("dark")}
                    className='p-1 bg-primary dark:bg-darkMode-contentBG border border-border-light rounded-md'
                >
                    <RiMoonFill className='text-secondary-dark text-2xl' />
                </div>
            }
            {
                currentTheme === 'dark' &&
                <div
                    onClick={() => setTheme("light")}
                    className='p-1 bg-primary dark:bg-darkMode-contentBG border border-border-light/40 rounded-md'
                >
                    <RiSunFill className='text-darkMode-textPrimaryColor text-2xl' />
                </div>
            }
        </>
    );
};

export default DarkMode;