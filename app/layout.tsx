import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kateryna Pryhoda — Full Stack Developer",
  description:
    "Portfolio of Kateryna Pryhoda — front-end, back-end, and full-stack web development projects.",
  openGraph: {
    title: "Kateryna Pryhoda — Full Stack Developer",
    description:
      "Portfolio of Kateryna Pryhoda — front-end, back-end, and full-stack web development projects.",
    url: "https://kateryna-pryhoda.vercel.app",
    siteName: "Kateryna Pryhoda Portfolio",
    images: [
      {
        url: "https://kateryna-pryhoda.vercel.app/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kateryna Pryhoda Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kateryna Pryhoda — Full Stack Developer",
    description:
      "Portfolio of Kateryna Pryhoda — front-end, back-end, and full-stack web development projects.",
    images: ["https://kateryna-pryhoda.vercel.app/img/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
