import { useQuery } from "@tanstack/react-query"
import {apiClient} from "../../common/api"

export const useListUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: () => {
            return apiClient.api.User.getUserList();
        },
        staleTime: 1000,
    })
}