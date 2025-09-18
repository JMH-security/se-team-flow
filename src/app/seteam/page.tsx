import { auth } from "@/auth";
import LogoutForm from "@/components/react/SignOut";
import { redirect } from "next/navigation";

export default async function SETeam() {
	const session = await auth();

	if (!session) {
		redirect("/");
	} else {
		const name = session.user?.name;

		return (
			<div>
				<LogoutForm />
				<h1>Welcome {name}</h1>
			</div>
		);
	}
}
