"use client";
import Logo from "@/components/react/reusable/Logo";
import NavButton from "@/components/react/reusable/NavButton";
import ThemeToggle from "@/components/ui/theme-toggle";

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
	return (
		<header className="flex justify-between items-center border-b border-white/10 py-2 max-w-[850px] mx-auto">
			<Logo />
			<div className="flex items-center">
				<nav>
					<ul className="flex gap-2 text-xs">
						{routes.map((route) => (
							<li key={route.path}>
								<NavButton href={route.path}>{route.label}</NavButton>
							</li>
						))}
					</ul>
				</nav>
				<ThemeToggle />
			</div>
		</header>
	);
}
