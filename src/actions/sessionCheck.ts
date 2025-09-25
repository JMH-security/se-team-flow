import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function sessionCheck() {
	const session = await auth();
	if (!session) {
		console.log("No session, redirecting to home");
		redirect("/");
	} else {
		const name = session.user?.name;
		return name;
	}
}
