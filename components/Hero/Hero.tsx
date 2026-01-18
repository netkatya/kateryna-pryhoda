import Image from "next/image";
import Link from "next/link";
import StarBorder from "../StarBorder";

export default function Hero() {
  return (
    <section className="">
      <div className="container">
        <div
          className="flex flex-col-reverse md:flex-row gap-15 pointer-events-auto rounded-3xl items-center px-12 py-6
          bg-transparent backdrop-blur-md backdrop-saturate-150 border border-white/15 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]"
        >
          <div className="w-full md:w-[55%]">
            <h1 className="text-5xl mb-8">
              I’m{" "}
              <span className="font-semibold leading-normal text-cyan-400">
                Kateryna Pryhoda
              </span>{" "}
              — a full-stack developer.
            </h1>
            <p className="text-xl leading-normal mb-8">
              I build fast and reliable web applications with experience in both
              frontend (Next.js, React, TypeScript) and backend (Node.js,
              Express, MongoDB). I enjoy solving complex problems and turning
              ideas into working products.
            </p>
            <ul className="flex flex-col md:flex-row gap-4">
              <li>
                <Link href="#portfolio" className="block">
                  <StarBorder
                    className="custom-class w-60 rounded-4xl cursor-pointer"
                    color="cyan"
                    speed="5s"
                  >
                    <span className="text-lg">View Portfolio</span>
                  </StarBorder>
                </Link>
              </li>

              <li>
                <Link href="#contacts" className="block">
                  <StarBorder
                    className="custom-class w-60 rounded-4xl cursor-pointer"
                    color="cyan"
                    speed="5s"
                  >
                    <span className="text-lg">Contact Me</span>
                  </StarBorder>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/img/me.jpg"
              width={400}
              height={400}
              alt="my photo"
              className="rounded-full w-full"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
