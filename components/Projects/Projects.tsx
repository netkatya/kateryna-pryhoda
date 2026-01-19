"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/const/projects";

const PROJECTS_PER_LOAD = 3;
const HEADER_OFFSET = 160;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_LOAD);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const visibleProjects = projects.slice(0, visibleCount);

  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const handleLoadMore = () => {
    setVisibleCount((prev) => {
      const next = Math.min(prev + PROJECTS_PER_LOAD, projects.length);

      if (!isMobile() && next > prev) {
        setTimeout(() => {
          if (!gridRef.current) return;
          const lastCard = gridRef.current.lastElementChild as HTMLElement;
          if (!lastCard) return;

          const y =
            lastCard.getBoundingClientRect().top +
            window.pageYOffset -
            HEADER_OFFSET;

          window.scrollTo({ top: y, behavior: "smooth" });
        }, 50);
      }

      return next;
    });
  };

  return (
    <section id="portfolio" className="py-10 scroll-m-22">
      <div className="container">
        <h2 className="text-5xl font-semibold mb-6">
          Selected <span className="text-cyan-400">Projects</span>
        </h2>

        <p className="text-lg text-white/70 max-w-xl mb-8">
          A collection of projects where I focused on performance, clean
          architecture, and delightful UI.
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
                className="h-full"
              >
                {/* CARD */}
                <div
                  className="group relative h-full rounded-3xl p-px
                    bg-white/5 backdrop-blur-md backdrop-saturate-150
                    border border-white/15
                    transition-all duration-500 cursor-pointer
                    hover:shadow-[0_0_30px_var(--cyan)]"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-full flex flex-col p-6 rounded-3xl">
                    {/* IMAGE */}
                    <div className="rounded-2xl overflow-hidden mb-6 h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold rounded-full bg-cyan-400 text-black">
                      {project.type}
                    </div>
                    {/* TITLE */}
                    <h3 className="text-2xl font-semibold mb-3">
                      {project.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-white/70 mb-4 grow">
                      {project.description}
                    </p>

                    {/* STACK */}
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {/* LINKS */}
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
          <div className="flex justify-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white/5 backdrop-blur-md backdrop-saturate-150 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-lg border border-white/10 modal-scroll"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl hover:text-cyan-400 transition"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              {/* Title */}
              <h2 className="text-3xl font-bold mb-6 text-white">
                {selectedProject.title}
              </h2>

              {/* Gallery */}
              {selectedProject.gallery &&
                selectedProject.gallery.length > 0 && (
                  <div className="flex gap-4 mb-6 overflow-x-auto pb-2 modal-scroll">
                    {selectedProject.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="shrink-0 w-64 h-40 rounded-2xl overflow-hidden border border-white/10"
                      >
                        <Image
                          src={img}
                          alt={`${selectedProject.title} ${idx + 1}`}
                          width={400}
                          height={250}
                          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                )}

              {/* Details */}
              <div className="text-white/80 mb-6 space-y-3">
                {selectedProject.details?.role && (
                  <p>
                    <strong>Role:</strong> {selectedProject.details.role}
                  </p>
                )}
                {selectedProject.details?.collaboration && (
                  <p>
                    <strong>Collaboration:</strong>{" "}
                    {selectedProject.details.collaboration}
                  </p>
                )}
                {selectedProject.details?.responsibilities && (
                  <div>
                    <p className="font-semibold">What was done:</p>
                    <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                      {selectedProject.details.responsibilities.map(
                        (r, idx) => (
                          <li key={idx}>{r}</li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
                {selectedProject.details?.problemSolved && (
                  <p className="font-semibold">
                    Problems solved:{" "}
                    <span className="font-normal">
                      {selectedProject.details.problemSolved}
                    </span>
                  </p>
                )}
                {selectedProject.details?.outcome && (
                  <p className="font-semibold">
                    Outcome:{" "}
                    <span className="font-normal">
                      {selectedProject.details.outcome}
                    </span>
                  </p>
                )}
              </div>

              {/* Stack */}
              <h3 className="text-2xl font-semibold mb-3 text-white">Stack</h3>
              <ul className="flex flex-wrap gap-2 mb-6">
                {selectedProject.stack.map((tech) => (
                  <li
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-white/10 border border-white/10"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex gap-4">
                <Link
                  href={selectedProject.live}
                  target="_blank"
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition"
                >
                  Live
                </Link>
                <Link
                  href={selectedProject.github}
                  target="_blank"
                  className="text-white/60 hover:text-white font-medium transition"
                >
                  GitHub
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
