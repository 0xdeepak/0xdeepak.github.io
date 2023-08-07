"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeProvider, { useThemeContext } from "@/hooks/useTheme";
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
		<div className="flex justify-between items-start mb-6">
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
			<button className="px-2 pt-1 pb-1" onClick={changeTheme}>
				mode
			</button>
		</div>
	);
}
