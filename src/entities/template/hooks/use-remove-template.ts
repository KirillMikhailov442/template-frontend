import $axios from '@shared/api/http';
import { type UseMutationOptions, useMutation } from '@tanstack/react-query';

const fetch = async (id:string) => {
  const res = await $axios.delete(`/templates/${id}`);
  return res.data as never;
};

export const useRemoveTemplate = (
  options?: UseMutationOptions<
    never,
    Error,
    { id:string }
  >,
) => {
  return useMutation({
    mutationKey: ['templates'],
    mutationFn: params => fetch(params.id),
    ...options,
  });
};

export default useRemoveTemplate;