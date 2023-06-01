import ButtonPrimary from '@/Utils/ReUseAbleComponents/ButtonPrimary';
import ButtonSecondary from '@/Utils/ReUseAbleComponents/ButtonSecondary';
import Link from 'next/link';

const AuthButtons = ({ user }: { user: boolean }) => {
    return (
        <>
            {
                !user &&
                <>
                    <Link href={"/"} className='hidden md:block'>
                        <ButtonPrimary>
                            Log in
                        </ButtonPrimary>
                    </Link>
                    <Link href={"/"}>
                        <ButtonSecondary
                            onClick={() => console.log('done')}
                        >
                            Create Account
                        </ButtonSecondary>
                    </Link>
                </>
            }
        </>
    );
};

export default AuthButtons;