import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../common/api"

const categoryListKey = () => ['categoryList']
const categoryByIdKey = (id: number) => ['categoryById', id]

export const useGetCategoryList = () => {
    return useQuery({
        queryKey: categoryListKey(),
        queryFn: async () => {
            const resp = await apiClient.api.Qwis.getCategoryList();
            if(resp.status !== 200 ){
                return []
            }
            return resp.body.data;
        }
    })
}

export const useGetGategoryById = (id: number) => {
    return useQuery({
        queryKey: categoryByIdKey(id),
        queryFn: async () => {
            const resp = await apiClient.api.Qwis.getCategoryById({
                params: {
                    categoryId: id
                }
            })
            if(resp.status !== 200 ){
                throw new Error("Error while fetching category")
            }
            return resp.body.data
        }
    })
}