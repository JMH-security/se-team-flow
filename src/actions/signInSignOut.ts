"use server";
import { signIn, signOut } from "@/auth";

interface SignInFormData {
	get(name: string): string | null;
}

export async function doExternalLogin(formData: SignInFormData): Promise<void> {
	const action: string | null = formData.get("action");
	await signIn(action ?? undefined, { redirectTo: "/seteam" });
}

export async function doLogout() {
	await signOut({ redirectTo: "/" });
}
