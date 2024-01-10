import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalProvider from "@/providers/modal-provider";
import { Toaster } from "sonner";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store for browsing and buying products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Toaster richColors closeButton position="top-center" />
        <ModalProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
