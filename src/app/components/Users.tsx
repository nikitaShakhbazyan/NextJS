'use client'

import { gettingPosts } from "@/services/getFetch"
import { useUser } from "@/store"
import Link from "next/link"
import { useEffect } from "react"
import { shallow } from "zustand/shallow"


export const Users = () => {
    const [users,loading,gettingPosts] = useUser(state => [state.users,state.loading,state.gettingPosts,shallow])
    
    useEffect(() => {
        gettingPosts()
    }, [gettingPosts])

    return ( loading ? 
        <h2>Loading!!</h2>
        :
        <ul>
            {users.map((user:any)=>(
                <li key={user.id}>
                    <Link href={`/Blog/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>

    )
}
