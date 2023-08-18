"use client";
import { useThemeContext } from "@/hooks/useTheme";
import Image from "next/image";

export default function Experience() {
  const { theme } = useThemeContext()!;

  return (
    <div className="mt-10 /pl-5 /pr-4 /pt-9 pb-16 text-sm rounded-lg /bg-zinc-200 /border border-zinc-300 text-black  dark:text-zinc-200 /dark:bg-zinc-900 dark:border-zinc-700">
      <h2 className="text-[1.75rem] mb-2 font-medium dark:text-white">Experience</h2>
      <div className="mt-16 flex justify-center">
        <div className="max-w-lg ml-3 grow border-l border-l-zinc-600">
          <div className="relative pl-8 flex justify-end">
            <div className="absolute left-0 top-2/4 -translate-x-2/4 -translate-y-2/4 w-3 h-3 rounded-[50%] bg-zinc-200 border-[6px] border-zinc-600 dark:border-[7px] dark:border-neutral-700 box-content" />
            <div className="max-w-md grow px-4 pt-5 pb-3 rounded-md bg-zinc-200 border border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700">
              <div className="flex justify-between items-start">
                <h3 className="text-[1.063rem] mb-1.5 font-medium dark:text-white">
                  SigTuple
                </h3>
                <p className="text-xs ml-2 [text-wrap:nowrap] dark:text-zinc-300">
                  Nov. 2022 - May 2023
                </p>
              </div>
              <p>Software Engineer Intern</p>
              <div className="mt-5 flex items-start">
                <Image
                  src={
                    theme === "light"
                      ? "/icons/location-light.svg"
                      : "/icons/location-dark.svg"
                  }
                  alt="Location"
                  width={17}
                  height={17}
                  className="mr-1.5"
                />
                <p>Bangalore, Karnataka</p>
              </div>
            </div>
          </div>
          <div className="relative pl-8 flex justify-end">
            <div className="absolute left-0 top-2/4 -translate-x-2/4 -translate-y-2/4 w-3 h-3 rounded-[50%] bg-zinc-100 border-[6px] border-zinc-600 dark:border-[7px] dark:border-neutral-700 box-content" />
            <div className="max-w-md grow px-4 pt-5 pb-3 mt-7 rounded-md bg-zinc-200 border border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700">
              <div className="flex justify-between items-start">
                <h3 className="text-[1.063rem] mb-1.5 font-medium dark:text-zinc-100">
                  Prudentcares Services
                </h3>
                <p className="text-xs ml-2 [text-wrap:nowrap] dark:text-zinc-300">
                  July 2021 - Jan. 2022
                </p>
              </div>
              <p>Frontend Developer Intern</p>
              <div className="mt-5 flex items-start">
                <Image
                  src={
                    theme === "light"
                      ? "/icons/location-light.svg"
                      : "/icons/location-dark.svg"
                  }
                  alt="Location"
                  width={17}
                  height={17}
                  className="mr-1.5"
                />
                <p>Remote (London)</p>
              </div>
            </div>
          </div>
          <div className="relative pl-8 flex justify-end">
            <div className="absolute left-0 top-2/4 -translate-x-2/4 -translate-y-2/4 w-3 h-3 rounded-[50%] bg-zinc-100 border-[6px] border-zinc-600 dark:border-[7px] dark:border-neutral-700 box-content" />
            <div className="max-w-md grow px-4 pt-5 pb-3 mt-7 rounded-md border border-zinc-300 bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-700">
              <div className="flex justify-between items-start">
                <h3 className="text-[1.063rem] mb-1.5 font-medium dark:text-zinc-100">
                  Bachelor of Technology (CSE)
                </h3>
                <p className="text-xs ml-2 [text-wrap:nowrap] dark:text-zinc-300">
                  Aug. 2019 - July 2023
                </p>
              </div>
              <p>Lovely Professional University</p>
              <div className="mt-5 flex items-start">
                <Image
                  src={
                    theme === "light"
                      ? "/icons/location-light.svg"
                      : "/icons/location-dark.svg"
                  }
                  alt="Location"
                  width={17}
                  height={17}
                  className="mr-1.5"
                />
                <p>Jalandhar, Punjab</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
