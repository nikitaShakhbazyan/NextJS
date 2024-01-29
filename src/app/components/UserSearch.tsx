'use client'

import React from 'react'
import {useState,FormEventHandler} from 'react'
import { useUser } from '@/store'

export const UserSearch = () => {
    const [search,setSearch] = useState('')
    const gettingPostsSearch = useUser(state => state.gettingPostsSearch)

    const handleSubmit : FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        
        const posts = await gettingPostsSearch(search)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='serach here' value={search} onChange={e => setSearch(e.target.value)} />
            <button type='submit'> Click here </button>
        </form>
    )
}