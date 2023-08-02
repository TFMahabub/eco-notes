import Image from "next/image";
import profileImage from "../../../public/assets/profile.jpg";

const UserProfilePage = () => {
  return (
    <section className="">
      <div className="h-24 w-full bg-secondary-dark dark:bg-textHover-light" />
      <div className="container">
        <div className="mx-auto bg-primary rounded-lg p-6 dark:bg-darkMode-contentBG max-w-4xl -mt-[3rem] space-y-6">
          <div className="relative h-14 lg:h-20 w-14 lg:w-20 flex gap-2 mx-auto rounded-full overflow-hidden">
            <Image
              src={profileImage}
              objectFit="cover"
              objectPosition="center"
              layout="fill"
              alt=""
            />
          </div>
          <article className="space-y-common">
            <h1 className="text-3xl font-bold text-center dark:text-darkMode-textPrimaryColor text-secondary-dark">
              Mahbub alam
            </h1>
            <h4 className="text-md max-w-[80%] text-center mx-auto font-medium dark:text-darkMode-textPrimaryColor text-secondary-dark">
              I’m a Web Developer. My favorite thing about coding is that I have
              always loved to learn something new, explore new logic and apply
              this to web Applications.
            </h4>
          </article>
        </div>
      </div>
    </section>
  );
};

export default UserProfilePage;
