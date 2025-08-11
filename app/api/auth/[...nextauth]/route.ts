import NextAuth, { NextAuthOptions, User, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/prisma";
import { JWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // console.log("fired ", credentials)

                if (!credentials?.email || !credentials.password) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });
                if (!user) return null;

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) return null;

                return { id: user.id, name: user.name, email: user.email };
            }
        })
    ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login"
    },
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async jwt({
            token,
            user,
        }: {
            token: JWT & { id?: string; name?: string };
            user?: User & { id: string; name: string };
        }): Promise<JWT & { id?: string; name?: string }> {
            // console.log("user in jwt callback:", user);
            if (user) {
                token.id = user.id;
                token.name = user.name;
            }
            return token;
        },

        async session({
            session,
            token,
        }: {
            session: Session & { user: { id?: string; name?: string; email?: string } };
            token: JWT & { id?: string; name?: string };
        }): Promise<Session> {
            // console.log("token in session callback:", token);
            if (token) {
                session.user.id = token.id!;
                session.user.name = token.name!;
            }
            // console.log("session in session callback:", session);
            return session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
