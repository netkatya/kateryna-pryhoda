"use client";

import Link from "next/link";
import StarBorder from "../StarBorder";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-4 left-4 w-full z-50 pointer-events-none">
      <div className="container">
        <div
          className="relative pointer-events-auto rounded-3xl flex items-center justify-between px-6 py-2 gap-8 text-white text-[15px] leading-none
          bg-transparent backdrop-blur-md backdrop-saturate-150 border border-white/15 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]"
        >
          <Image src="/img/logo.png" alt="logo" height={80} width={100}></Image>
          <nav className="flex space-x-8">
            <StarBorder
              className="custom-class w-40 rounded-4xl"
              color="cyan"
              speed="5s"
            >
              <Link
                href="#"
                className="text-white/90 hover:text-white transition text-xl"
              >
                About me
              </Link>
            </StarBorder>

            <StarBorder
              className="custom-class w-40 rounded-4xl"
              color="cyan"
              speed="5s"
            >
              <Link
                href="#"
                className="text-white/90 hover:text-white transition text-xl"
              >
                Stack
              </Link>
            </StarBorder>
            <StarBorder
              className="custom-class w-40 rounded-4xl"
              color="cyan"
              speed="5s"
            >
              <Link
                href="#"
                className="text-white/90 hover:text-white transition text-xl"
              >
                Projects
              </Link>
            </StarBorder>
          </nav>
        </div>
      </div>
    </header>
  );
}
