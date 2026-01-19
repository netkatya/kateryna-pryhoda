import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pointer-events-none py-5">
      <div className="container">
        <div
          className=" h-20 pointer-events-auto rounded-3xl flex items-center justify-center text-white text-[15px] leading-none
          bg-transparent backdrop-blur-md backdrop-saturate-150 border border-white/15 shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]"
        >
          <p className=" text-center text-sm var(--color-text-light)">
            &copy; {currentYear}{" "}
            <Link
              href="https://www.linkedin.com/in/kateryna-pryhoda"
              target="_blank"
              aria-label="Developer's Linkedin link"
              className=""
            >
              Kateryna Pryhoda.{" "}
            </Link>
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
