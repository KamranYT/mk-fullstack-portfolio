"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FiArrowRight,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until mounted to show theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-b from-background to-muted">
      {/* Theme Toggle - Only render when mounted */}
      {mounted && (
        <motion.button
          className="fixed top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </motion.button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Hi, I&apos;m Muhammad Kamran
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          A Full Stack Developer crafting exceptional digital experiences
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work <FiArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/KamranYT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <FiGithub size={24} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://web.facebook.com/profile.php?id=100080963443012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <FiFacebook size={24} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/muhammad-kamran-916b752b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <FiLinkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/muhammad-kamran-916b752b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <FiTwitter size={24} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
