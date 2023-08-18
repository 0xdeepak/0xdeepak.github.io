/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Image from "next/image";
import { useThemeContext } from "@/hooks/useTheme";
import ProjectsData from "@/data/Projects";

export default function Projects() {
  const { theme } = useThemeContext()!;

  return (
    <div className="mt-10 /px-5 /pt-9 pb-16 text-sm rounded-lg /bg-zinc-200 /border border-zinc-300 text-black dark:font-light dark:text-zinc-200 /dark:bg-zinc-900 dark:border-zinc-800">
      <h2 className="text-[1.75rem] font-medium dark:text-white">Projects</h2>
      <div className="mt-14 max-w-3xl mx-auto sm:px-5 grid grid-cols-1 sm:grid-cols-2 gap-5 ">
        {ProjectsData.map((project) => (
          <div
            key={project.title}
            className="flex flex-col p-4 rounded-lg bg-zinc-200 border border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700"
          >
            <div className="flex justify-between items-start mb-7">
              <div>
                <h3 className="text-lg dark:text-white font-medium leading-6">
                  {project.title}
                </h3>
                <h4 className="text-xs dark:text-zinc-300">{project.type}</h4>
              </div>
              <div className="flex items-start">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    title="Live site"
                    className="w-[34px] h-[34px] flex justify-center items-center mr-2 border border-zinc-400 dark:border-zinc-700 rounded"
                  >
                    <Image
                      src={
                        theme === "light"
                          ? "/icons/arrow-light.svg"
                          : "/icons/arrow-dark.svg"
                      }
                      alt="Live"
                      width={22}
                      height={22}
                      className="[filter:brightness(0.9)]"
                    />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="w-[34px] h-[34px] flex justify-center items-center border border-zinc-400 dark:border-zinc-700 rounded"
                  >
                    <Image
                      src={
                        theme === "light"
                          ? "/icons/github-light.svg"
                          : "/icons/github-dark.svg"
                      }
                      alt="Github"
                      width={20}
                      height={20}
                      className=""
                    />
                  </Link>
                )}
              </div>
            </div>
            {project.photoUrl && (
              <img
                src={project.photoUrl}
                alt={project.title}
                className="rounded-md mb-5"
              />
            )}
            <div className="flex flex-col justify-between flex-1">
              <p className="leading-[1.175rem] dark:text-zinc-200">
                {project.description}
              </p>
              <div
                className=" mt-3 leading-[1.175rem] flex items-center"
                title="Tech-stack"
              >
                <Image
                  src={
                    theme === "light"
                      ? "/icons/stack-light.svg"
                      : "/icons/stack-dark.svg"
                  }
                  alt="Tech-stack"
                  height={24}
                  width={24}
                  className="mr-3 my-1"
                />
                <p className="">{project.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
