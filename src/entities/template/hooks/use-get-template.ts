import $axios from '@/shared/api/http';

import { useQuery } from '@tanstack/react-query';

import type { ITemplate } from '../types/template';

const fetch = async (id: string) => {
  const res = await $axios.get<ITemplate>(`/templates/${id}`);
  return res.data;
};

const useGetTemplate = (id: string) => {
  return useQuery({
    queryKey: ['template', id],
    queryFn: () => fetch(id),
    enabled: !!id,
  });
};

export default useGetTemplate;
