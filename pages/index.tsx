import DescriptionText from '@/Utils/ReUseAbleComponents/DescriptionText';
import SecondaryTitleText from '@/Utils/ReUseAbleComponents/SecondaryTitleText';
import styled from '@emotion/styled';
import Head from "next/head";

const MainContent = styled.main`
    flex,
    item-center,
    justify-center,
`

const index = () => {
    return (
        <div className='min-h-screen'>
            <Head>
                <title>Homepage</title>
            </Head>
            <MainContent className='container mt-main-content-gap grid grid-cols-12 gap-4'>
                <aside className='border border-secondary col-span-2'>
                    <div className='bg-primary p-common'>
                        <SecondaryTitleText>Wellcome to Eco Notes</SecondaryTitleText>
                        <DescriptionText>
                            We're a place where coders share, stay up-to-date and grow their careers.
                        </DescriptionText>
                    </div>
                </aside>
                <main className='border border-secondary col-span-7'>

                </main>
                <aside className='border border-secondary col-span-3'>

                </aside>
            </MainContent>
        </div>
    );
};

export default index;