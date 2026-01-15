import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="">
      <div className="container flex gap-10">
        <div className="w-[50%]">
          <h1>Hi, I’m Kateryna Pryhoda — a full-stack developer.</h1>
          <p>
            I build fast and reliable web applications with experience in both
            frontend (Next.js, React, TypeScript) and backend (Node.js, Express,
            PostgreSQL). I enjoy solving complex problems and turning ideas into
            working products.
          </p>
          <Link href="#portfolio">View Portfolio</Link>
          <Link href="#contacts">Contact Me</Link>
        </div>
        <div>
          <Image
            src="/img/me.jpg"
            width={340}
            height={340}
            alt="my photo"
            className="rounded-full"
          ></Image>
        </div>
      </div>
    </section>
  );
}
