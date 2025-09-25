import LogoutForm from "@/components/react/LogoutForm";
import sessionCheck from "@/actions/sessionCheck";

export default async function SETeam() {
	const sessionUser = await sessionCheck();

	return (
		<div>
			<h1>Welcome {sessionUser} </h1>
			<LogoutForm />
		</div>
	);
}
