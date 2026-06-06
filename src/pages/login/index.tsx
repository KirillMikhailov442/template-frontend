import { useForm } from 'react-hook-form';

import { Button, Field, Input, Text } from '@chakra-ui/react';
import useLogin from '@entities/user/hooks/use-login';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { schemaLoginValidate, type LoginFormData } from './schema';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(schemaLoginValidate),
  });

  const login = useLogin({
    onSuccess: data => {
      localStorage.setItem('token', data.token);
      window.location.href = '/';
    },
    onError: () => {
      toast.error(
        'Не удалось войти. Проверьте логин и пароль и попробуйте снова.',
      );
    },
  });

  const handleSubmitLogin = (data: LoginFormData) => {
    login.mutate(data);
  };

  return (
    <div className="mx-auto flex flex-col justify-center gap-6">
      <Text className="text-center" fontSize={'2xl'} fontWeight={'semibold'}>
        Авторизация
      </Text>
      <form
        onSubmit={handleSubmit(handleSubmitLogin)}
        className="w-[400px] flex flex-col gap-3 bg-[var(--color-white)] border border-gray-300] rounded-lg px-4 py-6">
        <Field.Root invalid={!!errors.login}>
          <Field.Label>
            Логин <Field.RequiredIndicator />
          </Field.Label>
          <Input
            size={'xl'}
            placeholder="Введите логин"
            {...register('login')}
          />
          <Field.ErrorText>{errors.login?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.password}>
          <Field.Label>
            Пароль <Field.RequiredIndicator />
          </Field.Label>
          <Input
            size={'xl'}
            type="password"
            placeholder="Введите пароль"
            {...register('password')}
          />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>
        <Button loading={login.isPending} type="submit" className="w-full mt-7">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
