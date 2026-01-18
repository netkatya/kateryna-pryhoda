import Image from "next/image";
import Link from "next/link";

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
    description: "Personal portfolio with animations and interactive UI.",
    image: "/img/projects/alien/alien-main.jpg",
    stack: ["HTML", "CSS", "JavaScript", "Vite"],
    live: "#",
    github: "#",
  },
  {
    title: "Clothica - E-Commerce",
    description: "Personal portfolio with animations and interactive UI.",
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
    live: "#",
    github: "#",
  },
  {
    title: "Campers for Rent",
    description: "Personal portfolio with animations and interactive UI.",
    image: "/img/projects/campers/campers-filter.jpg",
    stack: ["Next.js", "TypeScript", "Tailwind", "REST API"],
    live: "#",
    github: "#",
  },
  {
    title: "Booksy",
    description: "Personal portfolio with animations and interactive UI.",
    image: "/img/projects/booksy/booksy-main.jpg",
    stack: ["HTML", "CSS", "JavaScript", "Vite", "REST API"],
    live: "#",
    github: "#",
  },
  {
    title: "Currency Exchange",
    description: "Personal portfolio with animations and interactive UI.",
    image: "/img/projects/currency/currency-second.jpg",
    stack: ["Next.js", "Tailwind", "TypeScript", "REST API"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-px 
              bg-linear-to-br from-white/10 to-white/5
              hover:from-cyan-400/40 hover:to-blue-500/30 transition-all duration-500"
            >
              <div
                className="relative rounded-3xl bg-white/5 backdrop-blur-xl
                border border-white/10 p-6 h-full
                transition-all duration-500
                group-hover:shadow-[0_0_60px_rgba(0,255,255,0.15)]
                "
              >
                <div className="rounded-2xl overflow-hidden mb-6 max-w-full h-46 md:h-40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>

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

                <div className="flex gap-4 mt-auto">
                  <Link
                    href={project.live}
                    className="text-cyan-400 hover:underline"
                    target="blank"
                  >
                    Live
                  </Link>
                  <Link
                    href={project.github}
                    className="text-white/60 hover:text-white"
                    target="blank"
                  >
                    GitHub
                  </Link>
                </div>

                {/* hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100 transition
                  bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_60%)]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
