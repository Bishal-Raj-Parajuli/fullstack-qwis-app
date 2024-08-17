import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../common/api';
import { User } from '@qwis/ts-rest';

const listUserKey = () => ['user'];

export const useListUsers = () => {
  return useQuery({
    queryKey: listUserKey(),
    queryFn: () => {
      return apiClient.api.User.getUserList();
    },
    staleTime: 1000,
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Omit<User, 'id' | 'totalPoint'>) => {
      const resp = await apiClient.api.User.createUser({ body: data });
      if (resp.status !== 201) {
        throw new Error('Something went wrong while fetching data');
      }
      return resp.body.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: listUserKey(),
      });
    },
    onError: (err) => console.error(err),
  });
};
