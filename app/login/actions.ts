'use server';

import { z } from 'zod';

const LoginSchema = z.object({
    email: z.string().email({ message: 'Email tidak valid' }),
    password: z.string().min(6, { message: 'Password minimal 6 karakter' }),
});

export type LoginState =
    { success: boolean; errors?: { email?: string; password?: string; form?: string } };

export async function loginAction(
    prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const result = LoginSchema.safeParse({ email, password });

    if (!result.success) {
        const errors: { email?: string; password?: string } = {};
        result.error.issues.forEach((err) => {
            if (err.path[0] === 'email') errors.email = err.message;
            if (err.path[0] === 'password') errors.password = err.message;
        });
        return { success: false, errors };
    }

    return { success: true };
}
