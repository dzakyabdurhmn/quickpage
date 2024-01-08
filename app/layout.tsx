import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { sitename, sitedescription, siteurl } from "@/lib/info";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: sitename,
    template: sitedescription,
  },
  description: sitedescription,
  openGraph: {
    title: sitename,
    description: sitedescription,
    url: siteurl,
    siteName: sitename,
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
