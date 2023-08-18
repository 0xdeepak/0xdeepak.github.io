import "./globals.css";
import type { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Deepak Yadav",
  description: "Hey, I'm a Software Engineer crafting things with JavaScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark text-sm sm:text-base">
      <Layout>{children}</Layout>
    </html>
  );
}
