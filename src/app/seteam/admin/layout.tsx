import SEAdminHeader from "@/components/react/seteam/SEAdminHeader";

export default function SEAdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<div>
				<SEAdminHeader />
				{children}
			</div>
		</>
	);
}
