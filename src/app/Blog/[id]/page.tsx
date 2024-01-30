import { Metadata } from "next";
import Link from "next/link";
type Props = {
    params:{
        id:string
    }
}

async function getData (id:string) {
    const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json()
}

export async function generateMetadata({params : {id}} :Props): Promise<Metadata>{
    const post = await getData(id)
    return {
        title:post.title
    }
}

 export default async function Post ({params :{id}}: Props) {
        const post = await getData(id)
    
        return (
            <>
            <Link href={`/Blog`}> Back to Blog</Link>
            <h1>This is User num {post.id}</h1>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </>
        )
    }

    
