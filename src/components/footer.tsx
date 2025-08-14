"use client";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center max-w-7xl w-full mx-auto">
            <div className="grid grid-cols-2 w-full pt-10">
                <div className="justify-self-start">
                    <p>@2025 Casey Jestico</p>
                </div>
                <div className="justify-self-end">
                    <p>Other fun text here</p>
                </div>
            </div>
        </footer>
    );
}
