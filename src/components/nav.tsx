"use client";
import Button from "../components/button";

export default function NavBar() {
    return (
        <nav className="w-full flex gap-32 pt-10 pb-25 justify-between">
            <div className="pl-100">
                <Button href={"/"}>Home</Button>
            </div>

            <div className="flex gap-10 pr-100">
                <Button href={"projects"}>Projects</Button>
                <Button href={"blogs"}>Blogs</Button>
            </div>
        </nav>
    );
}
