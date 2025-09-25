"use client";

import NavButton from "@/components/react/reusable/NavButton";
import ThemeToggle from "@/components/ui/theme-toggle";
import { Link } from "lucide-react";

const routes = [
	{
		label: "Admin Home",
		path: "/seteam/admin",
	},
	{
		label: "Users",
		path: "/seteam/admin/users",
	},
	{
		label: "Regions",
		path: "/seteam/admin/regions",
	},
	{
		label: "Exit Admin",
		path: "/seteam/",
	},
];

export default function SETeamHeader() {
	return (
		<header className="flex justify-between items-center bg-neutral-500 border-b border-white/10 p-2 max-w-[850px] mx-auto">
			<div>
				<h1 className="text-red-500 ml-2 font-bold">ADMIN PANEL</h1>
			</div>

			<nav>
				<ul className="flex gap-2 text-xs">
					{routes.map((route) => (
						<li key={route.path}>
							<NavButton href={route.path}>{route.label}</NavButton>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
