"use client";
import { useThemeContext } from "@/hooks/useTheme";
import Image from "next/image";
import SkillsData from "@/data/Skills";

export default function Skills() {
  const { theme } = useThemeContext()!;

  return (
    <div className="mt-8 pb-16 text-sm rounded-lg text-black dark:font-light dark:text-zinc-100">
      <h2 className="text-[1.75rem] font-medium dark:text-white">Skills</h2>
      <div className="mt-14 max-w-3xl mx-auto sm:px-5 grid grid-cols-1 sm:grid-cols-2 gap-5 ">
        {Object.entries(SkillsData).map((entry) => (
          <div
            key={entry[0]}
            className="flex flex-col p-4 rounded-lg bg-zinc-200 border border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700"
          >
            <h3 className="text-lg dark:text-white font-medium leading-6 mb-8">
              {entry[0]}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {entry[1].map((skill) => (
                <div
                  key={skill.name}
									title={skill.name}
                  className="h-[100px] w-[100px] flex flex-col justify-evenly items-center pt-2 bg-zinc-100 rounded-lg dark:bg-black dark:border-zinc-800"
                >
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    height={36}
                    width={36}
                  />
                  <h4 className="text-xs">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
