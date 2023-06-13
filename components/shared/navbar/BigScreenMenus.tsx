import ButtonPrimary from "@/Utils/ReUseAbleComponents/ButtonPrimary";
import Link from "next/link";
import DarkMode from "./DarkMode";
import User from "./User";

const BigScreenMenus = ({ user }: { user: boolean }) => {
    return (
        <div className="hidden md:flex gap-common items-center">
            {
                !user &&
                <>
                    <Link
                        href={"/"}
                        className=''
                    >
                        <ButtonPrimary>
                            Log in
                        </ButtonPrimary>
                    </Link>
                </>
            }
            {
                user &&
                <div
                    // onClick={()=>}
                    className='h-8 w-8 bg-secondary-light rounded-full'>
                    <User />
                </div>
            }
            <div className='cursor-pointer'>
                <DarkMode />
            </div>
        </div>
    );
};

export default BigScreenMenus;