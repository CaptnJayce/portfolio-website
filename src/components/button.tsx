"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
    href?: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Button({
    href,
    children,
    className,
    onClick,
}: ButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (href) {
            router.push(href);
        }
    };

    return (
        <button type="button" onClick={handleClick} className={className}>
            {children}
        </button>
    );
}
