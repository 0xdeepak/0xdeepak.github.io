/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useThemeContext } from "@/hooks/useTheme";
import { motion } from "motion/react";
import { useEffect } from "react";

export default function Header() {
  const pathName = usePathname();
  const { theme, toggleTheme } = useThemeContext()!;

  const changeTheme = (e: any) => {
    toggleTheme(theme === "dark" ? "light" : "dark");
  };

  const isActive = (route: string) =>
    pathName.startsWith("/" + route)
      ? " tab-active text-black dark:text-white"
      : "";

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
      className=""
    >
      <div className="h-[72px] flex justify-between items-center px-2 pt-6 pb-2 mb-2">
        <img
          src={theme === "light" ? "/icons/logo-light.svg" : "/icons/logo.svg"}
          alt="Deepak Yadav"
          className="h-8 w-8"
        />
        <button
          onClick={changeTheme}
          className="h-[38px] w-[38px] p-2 border rounded-md border-zinc-300 dark:border-zinc-800"
        >
          <img
            src={
              theme === "light"
                ? "/icons/light-mode.svg"
                : "/icons/dark-mode.svg"
            }
            alt="theme"
            className="max-h-full max-w-full"
          />
        </button>
      </div>
      <div className="header flex items-start text-lg text-gray-500 dark:text-gray-400">
        <Link
          href="/"
          className={
            "pr-2 pt-1 pb-1" +
            (pathName === "/" ? " tab-active text-black dark:text-white" : "")
          }
        >
          Home
        </Link>
        <Link
          href="/experience"
          className={"px-2 pt-1 pb-1" + isActive("experience")}
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className={"px-2 pt-1 pb-1" + isActive("projects")}
        >
          Projects
        </Link>
        <Link href="/skills" className={"px-2 pt-1 pb-1" + isActive("skills")}>
          Skills
        </Link>
      </div>
    </motion.div>
  );
}
