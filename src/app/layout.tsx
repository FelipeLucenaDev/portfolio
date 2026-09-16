import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Felipe Lucena Marcos | Software Developer",
    template: "%s | Felipe Lucena Marcos",
  },
  description:
    "Professional portfolio of Felipe Lucena Marcos, Software Developer and Software Engineering student focused on software products, desktop applications and browser extensions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}