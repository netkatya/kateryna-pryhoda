"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/const/projects";

const PROJECTS_PER_LOAD = 3;
const HEADER_OFFSET = 96;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_LOAD);
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleProjects = projects.slice(0, visibleCount);

  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const scrollToLastCard = () => {
    if (!gridRef.current) return;

    const lastCard = gridRef.current.lastElementChild as HTMLElement;
    if (!lastCard) return;

    const y =
      lastCard.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => {
      const next = Math.min(prev + PROJECTS_PER_LOAD, projects.length);

      if (!isMobile() && next > prev) {
        requestAnimationFrame(scrollToLastCard);
      }

      return next;
    });
  };

  return (
    <section id="portfolio" className="scroll-mt-24">
      <div className="container">
        <h2 className="text-5xl font-semibold mb-6">
          Selected <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-lg text-white/70 max-w-xl mb-16">
          A collection of projects where I focused on performance, clean
          architecture and delightful UI.
        </p>

        {/* GRID */}
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
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full scroll-mt-24"
              >
                {/* CARD */}
                <div
                  className="group relative h-full rounded-3xl p-px
                  bg-white/5 backdrop-blur-md backdrop-saturate-150
                  border border-white/15
                  transition-all duration-500 cursor-pointer
                  hover:shadow-[0_0_60px_rgba(0,255,255,0.15)]"
                  onClick={() => console.log("Project clicked:", project.title)}
                >
                  <div className="relative h-full flex flex-col p-6 rounded-3xl">
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
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LOAD MORE */}
        {visibleCount < projects.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleLoadMore}
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
