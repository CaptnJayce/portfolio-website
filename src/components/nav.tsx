"use client";
import Button from "../components/button";

export default function NavBar() {
    return (
        <nav className="w-full flex gap-32 pt-10 pb-25 justify-between">
            <div className="pl-100">
                <Button href={"/"} children={"Home"} />
            </div>

            <div className="flex gap-10 pr-100">
                <Button href={"projects"} children={"Projects"} />
                <Button href={"blogs"} children={"Blogs"} />
            </div>
        </nav>
    );
}
