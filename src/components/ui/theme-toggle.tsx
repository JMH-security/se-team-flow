"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
	const [isDark, setIsDark] = React.useState<boolean | null>(null);

	React.useEffect(() => {
		try {
			const stored = localStorage.getItem("theme");
			if (stored === "dark") {
				document.documentElement.classList.add("dark");
				setIsDark(true);
				return;
			}

			if (stored === "light") {
				document.documentElement.classList.remove("dark");
				setIsDark(false);
				return;
			}

			// follow OS preference if no stored value
			const prefersDark = window.matchMedia?.(
				"(prefers-color-scheme: dark)"
			)?.matches;
			if (prefersDark) {
				document.documentElement.classList.add("dark");
				setIsDark(true);
			} else {
				document.documentElement.classList.remove("dark");
				setIsDark(false);
			}
		} catch {
			// ignore
			setIsDark(false);
		}
	}, []);

	function toggle() {
		try {
			const next = !isDark;
			setIsDark(next);
			if (next) {
				document.documentElement.classList.add("dark");
				localStorage.setItem("theme", "dark");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("theme", "light");
			}
		} catch {
			// ignore
		}
	}

	// while hydrating, don't render anything until we know the theme
	if (isDark === null) return null;

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggle}
			aria-pressed={isDark}
			aria-label="Toggle theme"
		>
			{isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
		</Button>
	);
}
