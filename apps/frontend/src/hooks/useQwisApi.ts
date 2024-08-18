import { useQuery } from "@tanstack/react-query"
import { apiClient } from "../common/api"


const listQuestion = () => ['listQuestion']
const listOption = () => ['listOption']


export const useGetQuestionList = (id: number,) => {
    return useQuery({
        queryKey: listQuestion(),
        queryFn: async () => {
            const resp = await apiClient.api.Qwis.getQuestionListByCategoryId({
                params: {
                    categoryId: id,
                }
            })
            if (resp.status !== 200){
                return []
            }
            return resp.body.data;
        }
    })
}

export const useGetOptionList = (id: number | undefined) => {
    return useQuery({
        queryKey: listOption(),
        queryFn: async () => {
            const resp = await apiClient.api.Qwis.getOptionByQuestioId({
                params: {
                    questionId: id ?? 0,
                }
            })
            if (resp.status !== 200){
                return []
            }
            return resp.body.data;
        },
        enabled: !!id
    })
}


