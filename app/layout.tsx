import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "@/app/style/about.css";
import "@/app/style/contact.css";
import "@/app/style/footer.css";
import "@/app/style/header.css";
import "@/app/style/home.css";
import "@/app/style/project.css";
import "@/app/style/service.css";
import "@/app/style/testimonial.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={geistSans.className}>
        {children}
      </body>
    </html>
  );
}
