import React, { useEffect, useState, useContext, useMemo } from "react";

const ThemeContext = React.createContext<
	{ theme: string; toggleTheme: (newTheme: string) => void } | undefined
>(undefined);

export function useThemeContext() {
	return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: any }) {
	const [theme, setTheme] = useState("");
	const toggleTheme = (newTheme: string) => {
		const oldTheme = newTheme === "dark" ? "light" : "dark";
		document.documentElement.classList.remove(oldTheme);
		document.documentElement.classList.add(newTheme);
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		const newTheme = localStorage.getItem("theme") ?? "dark";
		document.documentElement.classList.remove(
			newTheme === "dark" ? "light" : "dark"
		);
		document.documentElement.classList.add(newTheme);
		setTheme(newTheme);
	}, []);

	const { Provider } = ThemeContext;

	const context = useMemo(() => ({ theme, toggleTheme }), [theme]);
	return <Provider value={context}>{children}</Provider>;
}
