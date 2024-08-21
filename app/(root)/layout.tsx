import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import "../globals.css";
import Topbar from "../components/shared/Topbar";
import LeftSidebar from "../components/shared/LeftSidebar";
import RightSidebar from "../components/shared/RightSidebar";
import Bottombar from "../components/shared/Bottombar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Intranet",
    description: "A Next.js 14 company intranet",
};

function Header() {
    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 20,
            }}
        >
            <h1>My App</h1>
            <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
            </SignedIn>
            <SignedOut>
                {/* Signed out users get sign in button */}
                <SignInButton />
            </SignedOut>
        </header>
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider afterSignOutUrl="/">
            <html lang="en">
                <body className={inter.className}>
                    <Header />
                    <Topbar />
                    <main>
                        <LeftSidebar />
                        <section className="main-container">
                            <div className="w-full max-w-4xl">{children}</div>
                        </section>
                        <RightSidebar />
                    </main>
                    <Bottombar />
                </body>
            </html>
        </ClerkProvider>
    );
}
