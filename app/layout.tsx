import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School OS — Building Better Schools",
  description:
    "A vision for a School Operating System built around teachers, parents, children, and the moments that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
