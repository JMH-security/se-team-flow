import SETeamHeader from "@/components/react/seteam/SETeamHeader";
import SETeamFooter from "@/components/react/seteam/SETeamFooter";
import BackgroundPattern from "@/components/react/seteam/BackgroundPattern";

export default function SETeamLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<BackgroundPattern />
			<div className="flex flex-col max-w-[850px] mx-auto px-4 min-h-screen">
				<SETeamHeader />
				{children}
				<SETeamFooter />
			</div>
		</>
	);
}
