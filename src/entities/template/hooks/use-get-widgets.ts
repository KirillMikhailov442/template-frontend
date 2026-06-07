import $axios from '@/shared/api/http';

import { useQuery } from '@tanstack/react-query';

import type { IWidget } from '../types/widget';

const fetch = async () => {
  const response = await $axios.get('/widgets');
  return response.data as IWidget[];
};

const useGetWidgets = () => {
  return useQuery<IWidget[]>({
    queryKey: ['widgets'],
    queryFn: fetch,
  });
};

export default useGetWidgets;
