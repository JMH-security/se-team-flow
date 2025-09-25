import Image from "next/image";
import SignInForm from "@/components/react/SignInForm";
import ThemeToggle from "@/components/ui/theme-toggle";

import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	return (
		<div className="min-h-screen font-sans bg-background text-foreground">
			<header className="w-full py-6 px-8 flex justify-end">
				<ThemeToggle />
			</header>
			<main className="flex items-center justify-center min-h-[calc(100vh-96px)] px-4">
				<Card className="flex items-center px-10">
					<CardTitle>
						<span className="font-extrabold">AUTHENTICATION</span> REQUIRED
					</CardTitle>
					<Image
						className=""
						src="/se-shield.png"
						alt="Security Engineers logo"
						width={240}
						height={240}
						priority
					/>
					<SignInForm />
				</Card>
			</main>

			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
		</div>
	);
}
