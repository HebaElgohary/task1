import { useApiQuery } from "../../../hooks/useApiQuery"
import { getAllPosts } from "../api/getAllPostsApi"

export const useGetAllPosts=()=>{
    return useApiQuery({
        queryFn:getAllPosts,
        queryKey:['posts'],
    })
}