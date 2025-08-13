import "~/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import NavBar from "../components/nav";
import Footer from "../components/footer";

export const metadata: Metadata = {
    title: "CaptnJayce",
    description: "Portfolio Website for CaptnJayce",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${geist.variable}`}>
            <body>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
