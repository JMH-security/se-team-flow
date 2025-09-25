"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface NavButtonProps {
	href: string;
	children: React.ReactNode;
}

export default function NavButton({ href, children }: NavButtonProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Button variant={isActive ? "default" : "outline"}>
			<Link href={href}>{children}</Link>
		</Button>
	);
}
