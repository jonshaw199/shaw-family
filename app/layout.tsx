"use client";

import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/ui/Navbar";
import styles from "@/app/layout.module.css";
import { Nanum_Myeongjo } from "next/font/google";

const nanumMyengjo = Nanum_Myeongjo({
  weight: "700",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        nav a {
          font-family: ${nanumMyengjo.style.fontFamily};
        }
      `}</style>
      <body>
        <div className={styles.container}>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
