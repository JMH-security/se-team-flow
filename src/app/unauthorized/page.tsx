import { Button } from "@/components/ui/button";

function Unauthorized() {
	return (
		<div className="min-h-screen font-sans bg-background text-foreground flex flex-col items-center justify-center">
			<h1 className="font-bold text-red-500 mb-4">
				You Are Not An Authorized User for this site
			</h1>

			<form action="/">
				<Button>Request Access</Button>
			</form>
		</div>
	);
}

export default Unauthorized;
