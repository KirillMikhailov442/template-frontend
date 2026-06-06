import $axios from '@shared/api/http';
import { type UseMutationOptions, useMutation } from '@tanstack/react-query';

interface ILoginResponse {
  token: string;
}

const fetch = async (login: string, password: string) => {
  const res = await $axios.post('/auth', { login, password });
  return res.data as ILoginResponse;
};

export const useLogin = (
  options?: UseMutationOptions<
    ILoginResponse,
    Error,
    { login: string; password: string }
  >,
) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: params => fetch(params.login, params.password),
    ...options,
  });
};

export default useLogin;
