import { z } from 'zod';

export const schemaLoginValidate = z.object({
  login: z
    .string()
    .min(2, 'Логин должен содержать не менее 2 символов')
    .max(100, 'Логин должен содержать не более 100 символов'),
  password: z
    .string()
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .max(100, 'Пароль должен содержать не более 100 символов'),
});

export type LoginFormData = z.infer<typeof schemaLoginValidate>;
