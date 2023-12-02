import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getCurrentUser } from "@/lib/actions/get-current-user";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Price Tracker",
  description: "Track product prices effortlessly",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <main className="max-w-7xl mx-auto px-4">
          <Navbar currentUser={currentUser} />
          {children}
        </main>
      </body>
    </html>
  );
}
