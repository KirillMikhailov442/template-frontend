import $axios from '@/shared/api/http';

import { useQuery } from '@tanstack/react-query';

const fetch = async () => {
  const response = await $axios.get('/devices');
  return response.data;
};

const useGetDevices = () => {
  return useQuery({
    queryKey: ['devices'],
    queryFn: fetch,
  });
};

export default useGetDevices;
