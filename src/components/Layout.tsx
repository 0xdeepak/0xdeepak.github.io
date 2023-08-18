"use client";
import ThemeProvider from "@/hooks/useTheme";
import Header from "./Header";

export default function Layout({ children }: any) {
  return (
    <body
      className={`text-black tracking-wide bg-zinc-100 dark:text-white dark:bg-zinc-950`}
    >
      <div className="max-w-4xl mx-auto my-16 px-7">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </div>
    </body>
  );
}
