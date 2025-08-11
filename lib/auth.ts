import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt" // for password checking

import { prisma } from "./prisma"
// Simulated DB lookup — replace with real DB


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const allUsers = await prisma.user.findMany();
                console.log("All users in DB:", allUsers);
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email }
                })

                if (!user) {
                    console.log("User not found:", credentials?.email);
                    return null;
                }

                const isValid = await bcrypt.compare(credentials!.password, user.password)
                if (!isValid) return null

                return { id: user.id, name: user.name, email: user.email }
            }
        })
    ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login" // optional custom login page
    },
    secret: process.env.AUTH_SECRET
})

export { handler as GET, handler as POST }
