import type { AuthOptions,User } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { users } from "@/app/data/users";

export const authConfig : AuthOptions = {
    providers : [
        Github({
            clientId:process.env.AUTH_GITHUB_ID!,
            clientSecret:process.env.AUTH_GITHUB_SECRET!
        }),
         Google ({
            clientId:process.env.AUTH_GOOGLE_ID!,
            clientSecret:process.env.AUTH_GOOGLE_SECRET!
         }),
         Credentials ({
            credentials:{
                email:{label : 'Email',type:'email',required : true},
                password:{label : 'Password',type:'password',required : true}

            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null


                const currentUsers = users.find(user => user.email === credentials.email)
                const currenPass = users.find(user => user.password === credentials.password)

                if(currentUsers && currenPass) {
                    const {password, ... userWithoutPassword} = currentUsers;
                    return userWithoutPassword as User
                }

                return null 
            }
         })
    ], 
    pages: {
        signIn:'/signin'
    }
}