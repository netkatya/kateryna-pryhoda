import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import LogoLoop from "../LogoLoop";

const techLogos = [
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiGithub /> },
  { node: <SiCss3 /> },
  { node: <SiNodedotjs /> },
  { node: <SiJavascript /> },
  { node: <SiMongodb /> },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

export default function Technologies() {
  return (
    <section className="py-20">
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
}
