"use server";
import { signIn, signOut } from "@/auth";

export async function doExternalLogin(formData) {
	const action = formData.get("action");
	await signIn(action, { redirectTo: "/seteam" });
}

export async function doLogout() {
	await signOut({ redirectTo: "/" });
}
