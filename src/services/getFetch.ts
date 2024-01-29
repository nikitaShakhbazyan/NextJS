
export async function gettingPosts () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok) throw new Error ("Unable to fetch posts!!")
    return response.json()

}

export async function gettingPostsSearch (search : string | number) {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users?q=${search}`)
    if(!response.ok) throw new Error ("Unable to fetch posts!!")
    return response.json()
}