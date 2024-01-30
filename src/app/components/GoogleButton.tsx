'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'

const GoogleButton = () => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl" || "/Profile")
  return (
    <div>
    <button onClick={() => signIn('google',{callbackUrl})}>
       Sign In with Google
    </button>

    <button onClick={() => signIn('github',{callbackUrl})}>
       Sign In with Github
    </button>

    </div>
  )
}

export  {GoogleButton}