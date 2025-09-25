/**
 * @param value - введенное значение
 * @returns отформатированный номер телефона
 */
export const formatPhoneNumber = (value: string): string => {
  const digits = value.replace(/\D/g, '');
  
  const phoneDigits = digits.startsWith('375') ? digits.slice(3) : digits;
  
  const limitedDigits = phoneDigits.slice(0, 9);
  
  if (limitedDigits.length === 0) {
    return '';
  } else if (limitedDigits.length <= 2) {
    return `+375 (${limitedDigits}`;
  } else if (limitedDigits.length <= 5) {
    return `+375 (${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(2)}`;
  } else if (limitedDigits.length <= 7) {
    return `+375 (${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(2, 5)}-${limitedDigits.slice(5)}`;
  } else {
    return `+375 (${limitedDigits.slice(0, 2)}) ${limitedDigits.slice(2, 5)}-${limitedDigits.slice(5, 7)}-${limitedDigits.slice(7)}`;
  }
};

/**
 * @param phone - номер телефона для валидации
 * @returns строка с ошибкой или undefined если валиден
 */
export const validatePhone = (phone: string): string | undefined => {
  const digits = phone.replace(/\D/g, '');
  const phoneDigits = digits.startsWith('375') ? digits.slice(3) : digits;
  
  if (phoneDigits.length === 0) {
    return 'Введите номер телефона';
  }
  
  if (phoneDigits.length !== 9) {
    return 'Номер телефона должен содержать 9 цифр';
  }
  
  const prefix = phoneDigits.slice(0, 2);
  if (!['29', '25', '33'].includes(prefix)) {
    return 'Номер должен начинаться с 29, 25 или 33';
  }
  
  return undefined;
};

/**
 * @param phone - форматированный номер телефона
 * @returns строка с цифрами
 */
export const extractPhoneDigits = (phone: string): string => {
  return phone.replace(/\D/g, '');
};
