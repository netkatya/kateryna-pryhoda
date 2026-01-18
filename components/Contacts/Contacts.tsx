"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

const contacts = [
  {
    title: "Email",
    value: "kateryna.pryhoda@gmail.com",
    href: "mailto:e.klimochenkova@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/kateryna-pryhoda",
    href: "https://www.linkedin.com/in/kateryna-pryhoda",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    value: "github.com/netkatya",
    href: "https://github.com/netkatya",
    icon: Github,
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-24">
      <div className="container">
        {/* Wrapper */}
        <div
          className="rounded-3xl px-10 py-16
          bg-white/5 backdrop-blur-md backdrop-saturate-150
          border border-white/15
          shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)]"
        >
          {/* Title */}
          <h2 className="text-5xl font-semibold mb-6">
            Let’s <span className="text-cyan-400">work together</span>
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mb-14">
            I’m open to new opportunities, freelance projects, and
            collaboration. Feel free to reach out — I’d love to hear from you.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                target="_blank"
                className="group relative rounded-2xl p-px
                bg-linear-to-br from-white/10 to-white/5
                hover:from-cyan-400/40 hover:to-blue-500/30
                transition-all duration-500"
              >
                <div
                  className="h-full rounded-2xl p-6
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  transition-all duration-500
                  group-hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]"
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16">
            <Link
              href="mailto:e.klimochenkova@gmail.com"
              className="inline-flex items-center justify-center
              px-10 py-4 rounded-full
              bg-cyan-400 text-black font-medium
              hover:bg-cyan-300 transition"
            >
              Send me an email
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
