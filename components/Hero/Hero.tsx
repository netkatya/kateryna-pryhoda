import Image from "next/image";
import Link from "next/link";
import StarBorder from "../StarBorder";

export default function Hero() {
  return (
    <section className="scroll-m-32" id="about">
      <div className="container">
        <div
          className="
        flex flex-col-reverse md:flex-row
        items-center gap-10
        px-8 py-6 md:py-8
        rounded-3xl
        bg-transparent
        backdrop-blur-md backdrop-saturate-150
        border border-white/15
        shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]
      "
        >
          {/* TEXT */}
          <div className="w-full md:w-[65%]">
            <h1 className="text-4xl md:text-5xl leading-tight mb-4">
              I’m{" "}
              <span className="font-semibold text-(--cyan)">
                Kateryna Pryhoda
              </span>{" "}
              —<br /> a full-stack developer.
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-4">
              I build fast and reliable web applications using modern front-end
              and back-end technologies.
            </p>

            <div className="space-y-1 mb-4 text-base md:text-lg text-white/80">
              <p>
                <span className="font-medium text-(--cyan)">Front-end:</span>{" "}
                HTML, CSS, JavaScript, React, Next.js, TypeScript
              </p>
              <p>
                <span className="font-medium text-(--cyan)">Back-end:</span>{" "}
                Node.js, Express, MongoDB
              </p>
            </div>

            <p className="text-base md:text-lg text-white/80 mb-6">
              I enjoy solving complex problems and turning ideas into real,
              working products.
            </p>

            {/* BUTTONS */}
            <ul className="flex flex-col md:flex-row gap-4">
              <li>
                <Link href="#portfolio">
                  <StarBorder
                    className="w-56 rounded-4xl cursor-pointer hover:shadow-[0_0_20px_var(--cyan)] transition duration-300 ease-in-out"
                    color="cyan"
                    speed="5s"
                  >
                    <span className="text-lg">View Projects</span>
                  </StarBorder>
                </Link>
              </li>

              <li>
                <Link href="#contacts">
                  <StarBorder
                    className="w-56 rounded-4xl cursor-pointer hover:shadow-[0_0_20px_var(--cyan)] transition duration-300 ease-in-out"
                    color="cyan"
                    speed="5s"
                  >
                    <span className="text-lg">Get in Touch</span>
                  </StarBorder>
                </Link>
              </li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center w-full md:w-auto">
            <Image
              src="/img/me.jpg"
              width={400}
              height={400}
              alt="Kateryna Pryhoda"
              className="rounded-full max-w-75 md:max-w-90"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
