import { Users } from "@/app/components/Users"
import { UserSearch } from "../components/UserSearch"

const Blog = () => {
    return(
        <div>
            Blog page
            <UserSearch/>
            <Users/>
        </div>
    )
}

export default Blog