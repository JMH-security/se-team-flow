import { doLogout } from "@/actions/signInSignOut";
import { Button } from "@/components/ui/button";

const LogoutForm = () => {
	return (
		<>
			<form action={doLogout}>
				<div className="flex flex-col justify-center items-center m-4 bg-gray-500 border border-gray-100 rounded-lg p-6">
					<div className="flex flex-wrap">
						<Button
							className="btn btn-accent p-2 m-3 min-w-[150px]"
							type="submit"
						>
							LOGOUT
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default LogoutForm;
