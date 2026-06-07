import $axios from '@shared/api/http';
import { type UseMutationOptions, useMutation } from '@tanstack/react-query';



interface ITemplateResponse {
  id: string,
  name: string,
  widgets: IWidget[]
}

interface IWidget {
  name: string,
  width: number,
  x: number,
  y: number,
}

const fetch = async (name:string, widgets: IWidget[]) => {
  const res = await $axios.post('/templates', { name, widgets });
  return res.data as ITemplateResponse;
};

export const useAddTemplate = (
  options?: UseMutationOptions<
    ITemplateResponse,
    Error,
    { name:string, widgets: IWidget[] }
  >,
) => {
  return useMutation({
    mutationKey: ['templates'],
    mutationFn: params => fetch(params.name, params.widgets),
    ...options,
  });
};

export default useAddTemplate;