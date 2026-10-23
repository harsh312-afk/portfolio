import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsh Gautam | Full-Stack & AI/ML Engineer",
  description: "Portfolio of Harsh Gautam — Full-Stack Developer & AI/ML Engineer specializing in Next.js, FastAPI, systems-level architecture, and Linux automation.",
  keywords: ["Harsh Gautam", "Full-Stack Developer", "AI Engineer", "Next.js", "FastAPI", "React", "PostgreSQL", "Linux", "Hyprland"],
  authors: [{ name: "Harsh Gautam", url: "https://github.com/harsh312-afk" }],
  openGraph: {
    title: "Harsh Gautam | Full-Stack & AI/ML Engineer",
    description: "Building scalable web architectures, asynchronous APIs, and intelligent data systems from the Linux kernel to the browser.",
    url: "https://github.com/harsh312-afk",
    siteName: "Harsh Gautam Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Gautam | Full-Stack & AI/ML Engineer",
    description: "Building scalable web architectures, asynchronous APIs, and intelligent data systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0B0F19] text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
