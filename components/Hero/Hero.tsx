import Image from "next/image";
import Link from "next/link";
import StarBorder from "../StarBorder";

export default function Hero() {
  return (
    <section className="">
      <div
        className="container flex gap-10 pointer-events-auto rounded-3xl items-center justify-between px-6 py-6 text-white leading-none
          bg-transparent backdrop-blur-md backdrop-saturate-150 border border-white/15 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]"
      >
        <div className="">
          <h1 className="text-5xl mb-8">
            I’m{" "}
            <span className="font-semibold leading-normal">
              Kateryna Pryhoda
            </span>{" "}
            — a full-stack developer.
          </h1>
          <p className="text-xl leading-normal mb-8">
            I build fast and reliable web applications with experience in both
            frontend (Next.js, React, TypeScript) and backend (Node.js, Express,
            MongoDB). I enjoy solving complex problems and turning ideas into
            working products.
          </p>
          <ul className="flex gap-4">
            <li>
              <StarBorder
                className="custom-class w-60 rounded-4xl"
                color="cyan"
                speed="5s"
              >
                <Link href="#portfolio" className="text-lg">
                  View Portfolio
                </Link>
              </StarBorder>
            </li>
            <li>
              <StarBorder
                className="custom-class w-60 rounded-4xl"
                color="cyan"
                speed="5s"
              >
                <Link href="#contacts" className="text-lg">
                  Contact Me
                </Link>
              </StarBorder>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/img/me.jpg"
            width={400}
            height={400}
            alt="my photo"
            className="rounded-full max-w-100 mah-h-100"
          ></Image>
        </div>
      </div>
    </section>
  );
}
