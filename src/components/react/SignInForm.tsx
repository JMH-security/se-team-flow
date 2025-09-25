import { doExternalLogin } from "@/actions/signInSignOut";
import { Button } from "@/components/ui/button";

export default function SignInForm() {
	return (
		<>
			<form action={doExternalLogin}>
				<div className="flex flex-col justify-center items-center m-4 border-accent rounded-lg p-6">
					<h1 className="text-[#cab559]">Login Using An Option:</h1>
					<div className="flex flex-wrap">
						<Button
							className="m-2"
							variant="outline"
							type="submit"
							name="action"
							value="microsoft-entra-id"
						>
							Microsoft
						</Button>
						<Button
							className="m-2"
							variant="outline"
							type="submit"
							name="action"
							value="google"
						>
							Google
						</Button>
					</div>
				</div>
			</form>
		</>
	);
}
