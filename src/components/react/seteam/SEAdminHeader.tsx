"use client";
import Logo from "../reusable/Logo";
import NavButton from "@/components/react/reusable/NavButton";

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

export default function SEAdminHeader() {
	return (
		<header className="flex justify-between items-center border-b border-white/10 py-2 max-w-[850px] mx-auto">
			<div>
				<h1 className="ml-2 font-bold">ADMIN PANEL</h1>
			</div>

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
			</div>
		</header>
	);
}
