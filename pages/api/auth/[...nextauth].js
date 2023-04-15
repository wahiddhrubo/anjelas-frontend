import dbConnect from "../../../config/db.js";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/userModel.js";

export default NextAuth({
	session: {
		jwt: true,
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				dbConnect();
				const { email, password } = credentials;
				console.log(email, password);

				if (!email || !password) {
					throw new Error("Please Enter Email and Password");
				}

				const user = await User.findOne({ email }).select("+password");
				if (!user) {
					throw new Error("Invalid Email ");
				}

				const passwordMatch = await user.comparePassword(password);
				if (!passwordMatch) {
					throw new Error("Invalid  Password");
				}

				return Promise.resolve(user);
			},
		}),
	],
	callbacks: {
		jwt: async (token, user) => {
			user && (token.user = user);
			return Promise.resolve(token);
		},
		session: async (session, token) => {
			session.user = token.user;
			return Promise.resolve(session);
		},
	},
});
