"use client";
import ThemeProvider from "@/hooks/useTheme";
import Header from "./Header";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

const Star = ({ x, y }: { x: number; y: number }) => {
  const controls = useAnimation();
  

  useEffect(() => {
    let mounted = true;

    const twinkle = async () => {
      while (mounted) {
        // Wait a random amount of time before twinkling again
        await new Promise((resolve) =>
          setTimeout(resolve,  Math.random() * 3000) // 0–3s delay
        );

        // Animate to dim
        await controls.start({
          opacity: 0.3 + Math.random() * 0.4, // random dimness
          scale: 0.8 + Math.random() * 0.4,
          transition: { duration: 0.7, ease: "easeInOut" },
        });

        // Animate back to bright
        await controls.start({
          opacity: 1,
          scale: 1,
          transition: { duration: 0.7, ease: "easeInOut" },
        });
      }
    };

    twinkle();

    return () => {
      mounted = false;
    };
  }, [controls]);

  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={{
        width: "1.5px",
        height: "1.5px",
        top: `${y}%`,
        left: `${x}%`,
      }}
      animate={controls}
      initial={{ opacity: 1, scale: 1 }}
    />
  );
};

export default function Layout({ children }: any) {
  const stars = Array.from({ length: 40 }, () => ({
    x: Math.random() * 100, // % from left
    y: Math.random() * 100, // % from top
  }));

  return (
    <body
      className={`text-black tracking-wide bg-zinc-100 dark:text-white dark:bg-black`}
    >
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
        <div
          className="fixed inset-0 dark:bg-black overflow-hidden"
          style={{ zIndex: -1 }}
        >
          {stars.map((star, idx) => (
            <Star key={idx} x={star.x} y={star.y} />
          ))}
        </div>
      </div>
    </body>
  );
}
