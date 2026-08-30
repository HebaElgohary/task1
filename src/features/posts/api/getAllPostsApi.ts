import apiClient from "../../../api/ApiClient";
import type { PostType } from "../../../types/types";

type responseType=PostType[]
export const getAllPosts=async():Promise<responseType>=>{
    return await apiClient.get<responseType>('/posts')

}