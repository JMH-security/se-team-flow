import "server-only"; //DO I NEED THIS???

import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import authClient from "@/lib/authdb";

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: MongoDBAdapter(authClient),
	providers: [
		MicrosoftEntraID({
			clientId: process.env.ENTRA_APP_ID,
			clientSecret: process.env.ENTRA_SECRET,
			allowDangerousEmailAccountLinking: true,
			authorization: {
				params: {
					scope: "openid profile email User.Read",
					redirect_uri: process.env.ENTRA_ID_AUTH_URL,
					tenantId: process.env.ENTRA_TENANT_ID,
				},
			},
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
	],
	session: {
		strategy: "database",
	},
	callbacks: {},
});
