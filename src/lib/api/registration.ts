import type { FormState, ApiResponse } from '../types/form';
import { extractPhoneDigits } from '../utils/phone';

export const registerUser = async (data: FormState): Promise<ApiResponse> => {
  await new Promise(resolve => setTimeout(resolve, 1500));

  const phoneDigits = extractPhoneDigits(data.phone);

  if (phoneDigits.endsWith('1111')) {
    return {
      success: false,
      error: 'Пользователь с таким номером телефона уже существует',
    };
  }

  if (phoneDigits.endsWith('2222')) {
    return {
      success: false,
      error: 'Неверный номер телефона',
    };
  }

  if (data.password === 'error123') {
    return {
      success: false,
      error: 'Пароль не соответствует требованиям безопасности',
    };
  }

  if (phoneDigits.endsWith('3333')) {
    return {
      success: false,
      error: 'Произошла ошибка сервера. Попробуйте позже',
    };
  }

  if (!data.phone || !data.password) {
    return {
      success: false,
      error: 'Заполните все обязательные поля',
    };
  }

  if (!data.agreeToTerms) {
    return {
      success: false,
      error: 'Необходимо согласие с правилами',
    };
  }

  return { success: true };
};
