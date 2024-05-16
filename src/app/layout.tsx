import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RQProvider } from "@/api/RQProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon UI",
  description: "Application to display pokemons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RQProvider>
          { children }
        </RQProvider>
      </body>
    </html>
  );
}
