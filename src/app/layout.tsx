import "~/styles/globals.css";
import { type Metadata } from "next";
import { Roboto, Tiny5 } from "next/font/google";
import Nav from "~/components/nav";
import Hero from "~/components/hero";
import Projects from "~/components/projects";
import About from "~/components/about";
import Skills from "~/components/skills";
import Blog from "~/components/blog";
import Footer from "~/components/footer";

export const metadata: Metadata = {
    title: "CaptnJayce",
    description: "Portfolio Website for CaptnJayce",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Tiny5({
    subsets: ["latin"],
    variable: "--font-geist-sans",
    weight: "400",
});

const font2 = Roboto({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

export default function RootLayout({}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${font.variable}`}>
            <body>
                <Nav />
                <Hero />
                <Projects />
                <Skills />
                <About />
                <Footer />
            </body>
        </html>
    );
}
