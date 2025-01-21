import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Pepe Ordinals Maxi",
  description: "Pepe Ordinals Maxi",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Pepe Ordinals Maxi",
    description: "Pepe Ordinals Maxi",
    url: process.env.APP_PATH,
    siteName: "Pepe Ordinals Maxi",
    images: [
      {
        width: 655,
        height: 336,
        url: `${process.env.APP_PATH}/img/logo.jpg`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased dark`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
