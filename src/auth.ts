import NextAuth from "next-auth";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "@/lib/db";

export const config = {
	adapter: MongoDBAdapter(client),
	providers: [
		MicrosoftEntraID({
			clientId: process.env.ENTRA_APP_ID,
			clientSecret: process.env.ENTRA_SECRET,
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
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, user, account, profile, trigger }) {
			if (trigger === "signIn") {
			}
			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.userId;
			}
			return session;
		},
		authorized: async ({ auth }) => {
			// Logged in users are authenticated, otherwise redirect to login page
			return !!auth;
		},
	},
};

export const {
	signIn,
	signOut,
	handlers: { GET, POST },
	auth,
} = NextAuth(config);
