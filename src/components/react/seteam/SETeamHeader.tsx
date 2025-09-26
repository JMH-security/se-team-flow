"use client";
import Logo from "@/components/react/reusable/Logo";
import NavButton from "@/components/react/reusable/NavButton";
import ThemeToggle from "@/components/ui/theme-toggle";
import { usePathname } from "next/navigation";

const routes = [
	{
		label: "Home",
		path: "/seteam",
	},
	{
		label: "Admin",
		path: "/seteam/admin",
	},
	{
		label: "Customers",
		path: "/seteam/customers",
	},
];

export default function SETeamHeader() {
	//Show nav menu except when using the admin panel

	const adminPanel = "/seteam/admin";
	const path = usePathname();
	let navCode: React.ReactNode = null;

	if (path.includes(adminPanel)) {
		navCode = null;
	} else {
		navCode = (
			<nav>
				<ul className="flex gap-2 text-xs">
					{routes.map((route) => (
						<li key={route.path}>
							<NavButton href={route.path}>{route.label}</NavButton>
						</li>
					))}
				</ul>
			</nav>
		);
	}

	return (
		<header className="flex justify-between items-center border-b border-white/10 py-2">
			<Logo />
			<div className="flex">
				{navCode}
				<ThemeToggle />
			</div>
		</header>
	);
}
