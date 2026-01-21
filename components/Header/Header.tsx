"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StarBorder from "../StarBorder";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const navItems = [
    { id: "about", label: "About me" },
    { id: "portfolio", label: "Projects" },
    { id: "contacts", label: "Contacts" },
    { id: "cv", label: "CV", href: "/Kateryna_Pryhoda_CV.pdf" },
  ];

  return (
    <header className="fixed top-4 left-0 z-50 w-full pointer-events-none">
      <div className="container">
        <div
          className="
            relative pointer-events-auto
            rounded-3xl
            flex items-center justify-between
            px-6 py-2
            bg-transparent
            backdrop-blur-md backdrop-saturate-150
            border border-white/15
            shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]
          "
        >
          {/* LOGO */}
          <Image
            src="/img/logo.png"
            alt="Kateryna Pryhoda logo"
            height={48}
            width={90}
            className="cursor-pointer"
          />

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex gap-6">
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StarBorder
                    className="w-40 rounded-4xl hover:shadow-[0_0_20px_var(--cyan)] transition duration-250 cursor-pointer"
                    color="cyan"
                    speed="7s"
                  >
                    <span className="text-white/90 hover:text-white text-lg">
                      {item.label}
                    </span>
                  </StarBorder>
                </a>
              ) : (
                <Link key={item.id} href={`#${item.id}`}>
                  <StarBorder
                    className="w-40 rounded-4xl hover:shadow-[0_0_20px_var(--cyan)] transition duration-250 cursor-pointer"
                    color="cyan"
                    speed="7s"
                  >
                    <span className="text-white/90 hover:text-white text-lg">
                      {item.label}
                    </span>
                  </StarBorder>
                </Link>
              ),
            )}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="lg:hidden text-white text-3xl pointer-events-auto cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>

          {/* MOBILE MENU */}
          <div
            className={`
              absolute top-full left-0 right-0 mt-4 lg:hidden
              pointer-events-auto
              rounded-3xl
              px-6 py-6
              flex flex-col gap-4 items-center
              bg-black backdrop-blur-md
              border border-white/15
              transform transition-all duration-300 ease-out
              ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }
            `}
          >
            {navItems.map((item) =>
              item.href ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  <StarBorder
                    className="w-40 rounded-4xl hover:shadow-[0_0_20px_var(--cyan)] transition duration-250 cursor-pointer"
                    color="cyan"
                    speed="7s"
                  >
                    <span className="text-white/90 hover:text-white text-lg">
                      {item.label}
                    </span>
                  </StarBorder>
                </a>
              ) : (
                <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
                  <StarBorder
                    className="w-40 rounded-4xl hover:shadow-[0_0_20px_var(--cyan)] transition duration-250 cursor-pointer"
                    color="cyan"
                    speed="7s"
                  >
                    <span className="text-white/90 hover:text-white text-lg">
                      {item.label}
                    </span>
                  </StarBorder>
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
