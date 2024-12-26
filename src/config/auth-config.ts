import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { pages } from "next/dist/build/templates/app-page";

export const authConfig: AuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const res = await fetch("http://localhost:3000/login", {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                });
                if (!res.ok) {
                    return null;
                }
                const data = await res.json();
                return data;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
};
