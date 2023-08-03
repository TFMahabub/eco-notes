"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiGithubFill, RiGoogleFill, RiLinkedinBoxFill } from "react-icons/ri";
import personeImage from "../../../public/assets/login_page_image.jpg";

const LoginPage = () => {
  return (
    <section className="min-h-[calc(100vh-48px)] mt-4 flex items-center justify-center">
      <div className="w-[60%] h-[80%] bg-primary dark:bg-darkMode-contentBG shadow-xl flex rounded-md overflow-hidden">
        <div className="relative min-h-full w-full overflow-hidden">
          <Image
            src={personeImage}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
            alt=""
          />
        </div>
        <div className="bg-primary w-full dark:bg-darkMode-contentBG  p-12 space-y-6">
          <article>
            <h1 className="darkTextColor text-2xl font-semibold">
              Sign in to your account
            </h1>
            <p className="lightTextColor font-medium">
              Don&apos;t have an account?{" "}
              <Link href={"/sign_up"} className="underline">
                Join here
              </Link>
            </p>
          </article>
          <form action="" className="space-y-2">
            <label
              htmlFor=""
              className="flex flex-col gap-1 lightTextColor text-base"
            >
              Email:
              <input
                type="email"
                name=""
                id=""
                className="px-4 py-2 outline-none focus:outline-none border rounded-md border-border-light dark:border-border-dark focus:border-secondary-light bg-primary dark:bg-darkMode-contentBG"
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col gap-1 lightTextColor text-base"
            >
              Password:
              <input
                type="password"
                name=""
                id=""
                className="px-4 py-2 outline-none focus:outline-none border rounded-md border-border-light dark:border-border-dark focus:border-secondary-light bg-primary dark:bg-darkMode-contentBG"
              />
            </label>
            <p className="lightTextColor font-medium text-end">
              <Link href={"/sign_up"} className="underline">
                Forget Password?
              </Link>
            </p>
            <button
              type="submit"
              className="bg-secondary-dark dark:bg-primary/70 w-full h-11 rounded-md text-primary dark:text-secondary-dark font-medium flex items-center justify-center "
            >
              Log In
            </button>
          </form>
          <div className="space-y-2">
            <button className="flex items-center justify-center gap-common border border-border-light w-full py-2 rounded-md hover:shadow-lg duration-200">
              <RiGoogleFill className="text-3xl lightTextColor" />
              <p className="text-md font-semibold lightTextColor">
                Continue with Google
              </p>
            </button>
            <button className="flex items-center justify-center gap-common border border-border-light w-full py-2 rounded-md hover:shadow-lg duration-200">
              <RiGithubFill className="text-3xl lightTextColor" />
              <p className="text-md font-semibold lightTextColor">
                Continue with Github
              </p>
            </button>
            <button className="flex items-center justify-center gap-common border border-border-light w-full py-2 rounded-md hover:shadow-lg duration-200">
              <RiLinkedinBoxFill className="text-3xl lightTextColor" />
              <p className="text-md font-semibold lightTextColor">
                Continue with LinkedIn
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
