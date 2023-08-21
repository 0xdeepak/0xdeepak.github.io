"use client";
import { useThemeContext } from "@/hooks/useTheme";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { theme } = useThemeContext()!;
  return (
    <div className="mt-6 sm:mt-8">
      <div className="px-5 pt-7 pb-5 text-black text-xs flex flex-col relative items-start rounded-lg bg-zinc-200 border border-zinc-300 text-black dark:text-zinc-100 dark:bg-zinc-800 dark:border-zinc-600">
        <h1 className="text-[2.75rem] tracking-tight leading-10 mb-7 dark:text-white">
          Deepak Yadav
        </h1>
        <h3 className="px-3 py-2 relative sm:absolute sm:top-4 sm:right-4 rounded-md bg-zinc-300  dark:bg-neutral-700">
          Software Engineer
        </h3>
        <div className="flex items-center flex-wrap gap-y-3 mt-2">
          <div className="px-4 py-2 h-9 flex items-center rounded-md bg-zinc-300 dark:bg-neutral-700">
            <Link href="mailto:node.deepak@gmail.com">
              <Image
                src={
                  theme === "light"
                    ? "/icons/email-light.svg"
                    : "/icons/email-dark.svg"
                }
                alt="LinkedIn"
                width={21}
                height={21}
                className=" rounded overflow-hidden"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/0xdeepak/" target="_blank">
              <Image
                src={
                  theme === "light"
                    ? "/icons/linkedin-light.svg"
                    : "/icons/linkedin-dark.svg"
                }
                alt="LinkedIn"
                width={16}
                height={16}
                className="ml-3 rounded-sm overflow-hidden"
              />
            </Link>
            <Link href="https://github.com/0xdeepak" target="_blank">
              <Image
                src={
                  theme === "light"
                    ? "/icons/github-light.svg"
                    : "/icons/github-dark.svg"
                }
                alt="Github"
                width={theme === "light" ? 18 : 17}
                height={theme === "light" ? 18 : 17}
                className="ml-3"
              />
            </Link>
          </div>
          <h4 className="px-3 py-2 ml-2 h-9 flex items-center rounded-md bg-zinc-300 dark:bg-neutral-700">
            <Image
              src={
                theme === "light"
                  ? "/icons/location-light.svg"
                  : "/icons/location-dark.svg"
              }
              alt="Location"
              width={16}
              height={16}
              className="mr-2 -mt-px"
            />
            <p className="-mb-px">Bangalore, Karnataka</p>
          </h4>
        </div>
      </div>
      <div className="mt-5 sm:mt-7 pl-5 pr-4 py-6 text-sm  flex flex-col items-start rounded-lg bg-zinc-200 border border-zinc-300 text-black dark:font-light dark:text-zinc-200 dark:bg-zinc-800 dark:border-zinc-600">
        <h2 className="font-medium text-2xl dark:text-white">About me</h2>
        <p className="mt-6 [word-spacing:2px]">
          {`Hello, I'm a passionate Software Engineer based in Bangalore,
          Karnataka. I recently graduated in the 2023 with a degree in Computer
          Science and Engineering. My expertise lies in building dynamic web
          applications using a range of cutting-edge technologies, including `}
          <span className="font-semibold">JavaScript</span>,{" "}
          <span className="font-semibold">TypeScript</span>,{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">NodeJs</span>,{" "}
          <span className="font-semibold">Firebase</span>, and{" "}
          <span className="font-semibold">MongoDB</span>.
        </p>
        <p className="mt-4 [word-spacing:2px]">
          {`Beyond coding, I have a curious and creative nature. Besides my
          passion for software development, I dabble in music and rap. I'm a big
          fan of EDM, Rock, and Hip-Hop music, which keeps my creative juices
          flowing.`}
        </p>
        <p className="mt-4 [word-spacing:2px]">
          {`I like to work in a team and present my solutions. I'm always looking
          for ways to learn and become a better professional, as my drive to
          learn and create continually motivates me to deliver high-quality
          applications and explore new horizons in the world of software
          development.`}
        </p>
        <p className="mt-2">
          &#128640; Looking for frontend / fullstack developer roles.
        </p>
        <Link
          href="https://drive.google.com/file/d/1ujARZ3eawXznQH8YyhLo7ksmA_FTG81T/view?usp=sharing"
          target="_blank"
          className="mt-5  flex font-semibold dark:font-medium"
        >
          <Image
            src={
              theme === "light"
                ? "/icons/arrow-light.svg"
                : "/icons/arrow-dark.svg"
            }
            alt="Resume"
            width={20}
            height={20}
          />
          See Resume
        </Link>
      </div>
    </div>
  );
}
