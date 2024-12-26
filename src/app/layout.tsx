import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Enhanced App Layout",
    description: "A beautifully designed layout for a Next.js app",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}
            >
                <div className="flex flex-col min-h-screen">
                    <header className="bg-white dark:bg-gray-800 shadow-md py-4">
                        <div className="container mx-auto px-4 flex justify-between items-center">
                            <h1 className="text-2xl font-bold">
                                next-an-register-lesson
                            </h1>
                            <nav>
                                <ul className="flex space-x-4">
                                    <li>
                                        <Link href="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li></li>
                                </ul>
                            </nav>
                        </div>
                    </header>

                    <main className="flex-grow container mx-auto py-[10px]">
                        {children}
                    </main>

                    <footer className="bg-white dark:bg-gray-800 py-4">
                        <div className="container mx-auto px-4 text-center">
                            <p>Footer</p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
