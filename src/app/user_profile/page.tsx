import Image from "next/image";
import { RiCake2Fill } from "react-icons/ri";
import profileImage from "../../../public/assets/profile.jpg";

const UserProfilePage = () => {
  return (
    <section className="">
      <div className="h-24 w-full bg-secondary-dark dark:bg-textHover-light" />
      <div className="container">
        {/* ----------------profile-part---------------- */}
        <div className="space-y-section-gap">
          <div className="mx-auto bg-primary rounded-lg md:py-6 md:px-20 p-2 dark:bg-darkMode-contentBG max-w-4xl -mt-[3rem] space-y-5">
            <div className="relative h-14 lg:h-20 w-14 lg:w-20 flex gap-2 mx-auto rounded-full overflow-hidden">
              <Image
                src={profileImage}
                objectFit="cover"
                objectPosition="center"
                layout="fill"
                alt=""
              />
            </div>
            <article className="flex flex-col items-center gap-common">
              <h1 className="text-3xl font-extrabold text-center darkTextColor">
                Mahbub alam
              </h1>
              <h4 className="text-md text-center mx-auto font-medium lightTextColor">
                I’m a Web Developer. My favorite thing about coding is that I
                have always loved to learn something new, explore new logic and
                apply this to web Applications.
              </h4>
              <div className="flex items-center gap-common">
                <RiCake2Fill className="text-2xl lightTextColor" />
                <p className="text-md text-center font-medium lightTextColor">
                  Join on: 14 jan 1999
                </p>
              </div>
              <hr className="h-[1px] w-full text-secondary-light/20" />
              <div className="w-full flex flex-col gap-common md:gap-0 md:flex-row md:items-center md:justify-between">
                <article className="">
                  <p className="text-base font-semibold lightTextColor text-center">
                    Education
                  </p>
                  <p className="text-base font-normal lightTextColor">
                    Bachelor of Business Studies(BBS )
                  </p>
                </article>
                <article className="">
                  <p className="text-base font-semibold lightTextColor text-center">
                    Work
                  </p>
                  <p className="text-base font-normal lightTextColor">
                    Frontend Developer
                  </p>
                </article>
              </div>
            </article>
          </div>
          {/* ----------------Down-part---------------- */}
          <div className="mx-auto max-w-4xl flex gap-section-gap">
            {/* ----------------Skils/Languages-part---------------- */}
            <article className="bg-primary w-full p-3 rounded-lg space-y-3">
              <h4 className="text-lg font-semibold lightTextColor">
                Skill/Languages
              </h4>
              <hr className="h-[1px] w-full text-secondary-light/20" />
              <p className="lightTextColor">
                HTML5, CSS3, JavaScript, TypeScript, Tailwindcss, Bootstrap,
                Styled-Component, React.js, Next.js, Redux, RTK Query,
              </p>
            </article>
            <article className="bg-primary w-full p-3 rounded-lg">
              <h4 className="text-lg font-semibold lightTextColor">
                Skill/Languages
              </h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfilePage;
