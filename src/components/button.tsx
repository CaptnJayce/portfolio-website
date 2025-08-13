"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function NavigationButton({
    href,
    children,
    className,
}: ButtonProps) {
    const router = useRouter();
    return (
        <button
            type="button"
            onClick={() => router.push(href)}
            className={className}
        >
            {children}
        </button>
    );
}
