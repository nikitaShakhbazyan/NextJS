import type { AuthOptions } from "next-auth";
import Github from "next-auth/providers/github";


export const authConfig : AuthOptions = {
    providers : [
        Github({
            clientId:process.env.AUTH_GITHUB_ID!,
            clientSecret:process.env.AUTH_GITHUB_SECRET!
        })
    ]
}