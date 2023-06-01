import SocialMedia from '@/components/pages/home/leftSide/SocialMedia';
import WellcomeTextIndex from '@/components/pages/home/leftSide/WellcomeTextIndex';
import TopMenus from '@/components/pages/home/middleSide/TopMenus';
import Head from "next/head";


const index = () => {
    return (
        <div className='min-h-screen'>
            <Head>
                <title>Homepage</title>
            </Head>
            <main className='container mt-main-content-gap grid grid-cols-12 gap-4'>
                <aside className='col-span-12 lg:col-span-3 space-y-common-.75'>
                    <div className='bg-primary border border-border-light rounded-common p-common-1 space-y-vertical'>
                        <WellcomeTextIndex />
                    </div>
                    <div className='flex flex-wrap items-center gap-2'>
                        <SocialMedia />
                    </div>
                </aside>
                <main className='col-span-12 lg:col-span-6'>
                    <div className='flex gap-common-.75'>
                        <TopMenus />
                    </div>
                </main>
                <aside className='border border-secondary col-span-12 lg:col-span-3'>
                    <div>

                    </div>
                    <div className='flex flex-col gap-common-.75'>

                    </div>
                </aside>
            </main>
        </div>
    );
};

export default index;