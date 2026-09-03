import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://openscience.tools"),
  title: "AIPOCH Open Science — Build Science in the Open",
  description:
    "An open-source, model-agnostic workbench for real research. Put research expertise to work, on your terms.",
  icons: {
    icon: "/assets/aipoch-mark.png",
    shortcut: "/assets/aipoch-mark.png",
  },
  openGraph: {
    title: "AIPOCH Open Science — Build Science in the Open",
    description:
      "An open-source, model-agnostic workbench for real research.",
    url: "https://openscience.tools",
    siteName: "AIPOCH Open Science",
    type: "website",
    images: [{ url: "/og.png", width: 1792, height: 1024, alt: "AIPOCH Open Science — Build Science in the Open" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIPOCH Open Science — Build Science in the Open",
    description: "An open-source, model-agnostic workbench for real research.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
