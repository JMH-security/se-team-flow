import LogoutForm from "@/components/react/LogoutForm";
import sessionCheck from "@/actions/sessionCheck";
import { getCollection } from "@/lib/authdb";

export default async function SETeam() {
	const sessionUser = await sessionCheck();

	console.log("Session User Info:", sessionUser);

	return (
		<div>
			<LogoutForm />
			<h1>Welcome </h1>
		</div>
	);
}
