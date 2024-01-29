import { gettingPosts, gettingPostsSearch } from "@/services/getFetch";
import { create } from "zustand";
type UserType = {
    users:any[],
    loading : boolean,
    gettingPosts : () => Promise<void>,
    gettingPostsSearch : (value : string)=> Promise<void>
}

export const useUser = create<UserType>((set)=> ({
    users : [],
    loading:false,
    gettingPosts : async () => {
        set({loading:true})
        const users = await gettingPosts()
        set({users,loading:false})
    },
    gettingPostsSearch : async (search) => {
        set({loading:true})
        const users = await gettingPostsSearch(search)
        set({users,loading:false})
    }
}))