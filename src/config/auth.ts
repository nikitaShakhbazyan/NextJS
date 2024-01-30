import type { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const authConfig : AuthOptions = {
    providers : [
        Github({
            clientId:process.env.AUTH_GITHUB_ID!,
            clientSecret:process.env.AUTH_GITHUB_SECRET!
        }),
         Google ({
            clientId:process.env.AUTH_GOOGLE_ID!,
            clientSecret:process.env.AUTH_GOOGLE_SECRET!
         })
    ]
}