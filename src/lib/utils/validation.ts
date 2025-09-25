/**
 * @param password - пароль для валидации
 * @returns строка с ошибкой или undefined если валиден
 */
export const validatePassword = (password: string): string | undefined => {
  if (password.length === 0) {
    return 'Введите пароль';
  }
  
  if (password.length < 6) {
    return 'Пароль должен содержать минимум 6 символов';
  }
  
  return undefined;
};


/**
 * @param value - значение для валидации
 * @param fieldName - название поля для ошибки
 * @returns строка с ошибкой или undefined если валиден
 */
export const validateRequired = (value: string, fieldName: string): string | undefined => {
  if (!value || value.trim().length === 0) {
    return `Поле "${fieldName}" обязательно для заполнения`;
  }
  
  return undefined;
};

/**
 * @param isChecked - состояние чекбокса
 * @param message - сообщение об ошибке
 * @returns строка с ошибкой или undefined если валиден
 */
export const validateAgreement = (isChecked: boolean, message: string = 'Необходимо согласие'): string | undefined => {
  if (!isChecked) {
    return message;
  }
  
  return undefined;
};
