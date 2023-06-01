import Moon from '@/components/Icons/Moon';
import Sun from '@/components/Icons/Sun';

const DarkMode = ({ uiTheme, setUiTheme }: { uiTheme: string, setUiTheme: any }) => {
    return (
        <>
            {
                uiTheme === 'light' &&
                <span
                    onClick={() => setUiTheme("dark")}
                >
                    <Moon moreClass='fill-secondary-dark w-icon-2 h-icon-2' />
                </span>
            }
            {
                uiTheme === 'dark' &&
                <span
                    onClick={() => setUiTheme("light")}
                >
                    <Sun moreClass='fill-secondary-dark w-icon-2 h-icon-2' />
                </span>
            }
        </>
    );
};

export default DarkMode;