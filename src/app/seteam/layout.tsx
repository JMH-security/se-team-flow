import SETeamHeader from "@/components/react/seteam/SETeamHeader";

export default function SETeamLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<SETeamHeader />
			{children}
		</div>
	);
}
