import $axios from '@shared/api/http.ts';
import { useQuery } from '@tanstack/react-query';

interface ITemplateResponse {
  id: string
  name: string
}

const fetch = async () => {
  const res = await $axios.get('/templates');
  return res.data as ITemplateResponse[];
};

const useGetTemplates = () => {
  return useQuery({
    queryKey: ['templates'],
    queryFn: fetch,
  })
}

export default useGetTemplates;