import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import { Toast } from "@heroui/react";
import Footer from "@/Components/Footer/Footer";
import NextThemeProvider from "@/providers/NextThemeProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "IdeaVault",
  description:
    "IdeaVault is a web-based platform where users can share innovative startup ideas,explore ideas posted by others, and engage through comments, and discussions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <NextThemeProvider>
          <Navbar></Navbar>

          <main>
            {children}

            <Toast.Provider />
          </main>

          <Footer></Footer>
        </NextThemeProvider>
      </body>
    </html>
  );
}
