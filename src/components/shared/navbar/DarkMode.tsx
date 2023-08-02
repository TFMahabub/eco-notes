'use client'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Moon from '../../Icons/Moon';
import Sun from '../../Icons/Sun';

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
                    <Moon />
                </div>
            }
            {
                currentTheme === 'dark' &&
                <div
                    onClick={() => setTheme("light")}
                    className='p-1 bg-primary dark:bg-darkMode-contentBG border border-border-light/40 rounded-md'
                >
                    <Sun />
                </div>
            }
        </>
    );
};

export default DarkMode;