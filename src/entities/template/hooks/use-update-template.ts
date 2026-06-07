import $axios from '@/shared/api/http';

import { useMutation } from '@tanstack/react-query';

import type { ITemplate } from '../types/template';

const fetch = async (templateId: string, data: ITemplate) => {
  const res = await $axios.put<ITemplate>(`/templates/${templateId}`, data);
  return res.data;
};

const useUpdateTemplate = (templateId: string) => {
  return useMutation({
    mutationKey: ['update-template', templateId],
    mutationFn: (data: ITemplate) => fetch(templateId, data),
  });
};

export default useUpdateTemplate;
