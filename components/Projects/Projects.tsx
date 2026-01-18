"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS_PER_LOAD = 3;

const projects = [
  {
    title: "The Nail Touch",
    description:
      "Modern commercial landing page for a beauty master with responsive layout, light/dark themes, and client-focused UI.",
    image: "/img/projects/nail/nail-touch-main.jpg",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    live: "https://the-nail-touch.vercel.app",
    github: "https://github.com/netkatya/the-nail-touch",
  },
  {
    title: "Nanny Services",
    description:
      "Modern web application with authentication, favorites functionality, and a fully responsive, user-friendly interface.",
    image: "/img/projects/nanny/nanny.jpg",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
    live: "https://nanny-services-alpha-navy.vercel.app",
    github: "https://github.com/netkatya/nanny-services",
  },
  {
    title: "ARI - Learn JavaScript",
    description:
      "Interactive JavaScript learning game with quizzes and live coding challenges, featuring multilingual support, modern animations, and a fully responsive UI.",
    image: "/img/projects/ari/ari-main.jpg",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://js-game-seven-indol.vercel.app",
    github: "https://github.com/netkatya/js-game",
  },
  {
    title: "Cozy Corner - E-Commerce",
    description:
      "Online store with authentication, product catalog, filtering, cart and favorites, user account, and Telegram-based password recovery.",
    image: "/img/projects/cozy/goods-cozy.jpg",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    live: "https://online-shop-chi-flame.vercel.app",
    github: "https://github.com/netkatya/online-shop",
  },
  {
    title: "Alien Survivor: Survival Arena",
    description:
      "Responsive landing page for a video game company, built with HTML, CSS, and JavaScript for a clean and modern presentation.",
    image: "/img/projects/alien/alien-main.jpg",
    stack: ["HTML", "CSS", "JavaScript", "Vite"],
    live: "https://netkatya.github.io/STP-10194",
    github: "https://github.com/netkatya/STP-10194",
  },
  {
    title: "Clothica - E-Commerce",
    description:
      "Full-stack responsive online clothing store with catalog, filters, cart, order system, themes, and Telegram-based recovery.",
    image: "/img/projects/clothica/clothica-goods.jpg",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    live: "https://clothica-shop.vercel.app",
    github: "https://github.com/netkatya/clothica-shop",
  },
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_LOAD);
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleProjects = projects.slice(0, visibleCount);

  useEffect(() => {
    if (!gridRef.current) return;

    const lastCard = gridRef.current.lastElementChild as HTMLElement;
    lastCard?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [visibleCount]);

  return (
    <section id="portfolio" className="py-20">
      <div className="container">
        <h2 className="text-5xl font-semibold mb-6">
          Selected <span className="text-cyan-400">Projects</span>
        </h2>
        <p className="text-lg text-white/70 max-w-xl mb-16">
          A collection of projects where I focused on performance, clean
          architecture and delightful UI.
        </p>

        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch"
        >
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full cursor-pointer"
                onClick={() => console.log("Project clicked:", project.title)}
              >
                <div
                  className="group relative h-full rounded-3xl p-px
                  bg-linear-to-br from-white/10 to-white/5
                  hover:from-cyan-400/40 hover:to-blue-500/30 transition-all duration-500"
                >
                  <div
                    className="relative h-full flex flex-col
                    rounded-3xl bg-white/5 backdrop-blur-xl
                    border border-white/10 p-6
                    transition-all duration-500
                    group-hover:shadow-[0_0_60px_rgba(0,255,255,0.15)]"
                  >
                    {/* image */}
                    <div className="rounded-2xl overflow-hidden mb-6 h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover
                        group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* title */}
                    <h3 className="text-2xl font-semibold mb-3">
                      {project.title}
                    </h3>

                    {/* description */}
                    <p className="text-white/70 mb-4 grow">
                      {project.description}
                    </p>

                    {/* stack */}
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="text-sm px-3 py-1 rounded-full
                          bg-white/10 border border-white/10"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {/* links */}
                    <div className="flex gap-4 mt-auto">
                      <Link
                        href={project.live}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="text-cyan-400 hover:underline"
                      >
                        Live
                      </Link>
                      <Link
                        href={project.github}
                        target="_blank"
                        onClick={(e) => e.stopPropagation()}
                        className="text-white/60 hover:text-white"
                      >
                        GitHub
                      </Link>
                    </div>

                    {/* glow */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-3xl
                      opacity-0 group-hover:opacity-100 transition
                      bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_60%)]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {visibleCount < projects.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() =>
                setVisibleCount((prev) => prev + PROJECTS_PER_LOAD)
              }
              className="px-8 py-3 rounded-full
              bg-white/10 border border-white/20
              text-white font-medium
              hover:bg-white/20 transition"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
