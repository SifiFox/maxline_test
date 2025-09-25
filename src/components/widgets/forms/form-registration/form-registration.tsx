import { useState, useCallback, memo, useMemo } from 'react';
import { Button, InputText, InputCheckbox, InputPassword } from '../../../shared';
import type { FormState, FormErrors } from '../../../../lib';
import { 
  formatPhoneNumber,
  validatePhone,
  validatePassword,
  validateAgreement,
  registerUser
} from '../../../../lib';

interface FormRegistrationProps {
  className?: string; 
  title?: string;
}

const FormRegistrationBase = memo(({ className, title }: FormRegistrationProps) => {
  const [formData, setFormData] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    agreeToTerms: false,
    agreeToBonusTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = useCallback((value: string) => {
    const formatted = formatPhoneNumber(value);
    setFormData((prev: FormState) => ({ ...prev, phone: formatted }));
    
    if (errors.phone) {
      setErrors((prev: FormErrors) => ({ ...prev, phone: undefined }));
    }
  }, [errors.phone]);

  const handlePasswordChange = useCallback((value: string) => {
    setFormData((prev: FormState) => ({ ...prev, password: value }));
    
    if (errors.password) {
      setErrors((prev: FormErrors) => ({ ...prev, password: undefined }));
    }
  }, [errors.password]);

  const handleAgreeToTermsChange = useCallback((checked: boolean) => {
    setFormData((prev: FormState) => ({ ...prev, agreeToTerms: checked }));
    
    if (errors.agreeToTerms) {
      setErrors((prev: FormErrors) => ({ ...prev, agreeToTerms: undefined }));
    }
  }, [errors.agreeToTerms]);

  const handleAgreeToBonusTermsChange = useCallback((checked: boolean) => {
    setFormData((prev: FormState) => ({ ...prev, agreeToBonusTerms: checked }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    
    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;
    
    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;
    
    const agreeError = validateAgreement(formData.agreeToTerms, 'Необходимо согласие с правилами');
    if (agreeError) newErrors.agreeToTerms = agreeError;
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({ general: undefined });
    
    try {
      const result = await registerUser(formData);
      
      if (result.success) {
        alert('Регистрация успешно завершена!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          password: '',
          agreeToTerms: false,
          agreeToBonusTerms: false,
        });
        setErrors({});
      } else {
        setErrors({ general: result.error });
      }
    } catch (error) {
      setErrors({ general: 'Произошла неожиданная ошибка' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const phoneIcon = useMemo(() => (
    <img src="/src/assets/icons/flag_rb.svg" alt="phone" className="w-5 h-5" />
  ), []);

  const termsLabel = useMemo(() => (
    <p>
      Мне больше 21 года. <br /> Я согласен и принимаю{' '}
      <span className="underline">«Правила приема ставок»</span> и{' '}
      <span className="underline">Политику конциденциальности» </span>
    </p>
  ), []);

  const debugInfo = useMemo(() => (
    <div className="text-xs text-gray-500 mt-2">
      <p>Для тестирования ошибок используйте:</p>
      <ul className="list-disc list-inside">
        <li>Номер с окончанием 1111 - уже существует</li>
        <li>Номер с окончанием 2222 - неверный номер</li>
        <li>Номер с окончанием 3333 - ошибка сервера</li>
        <li>Пароль "error123" - не соответствует требованиям</li>
        <li>Пароли менее 6 символов - слишком короткий</li>
      </ul>
    </div>
  ), []);

  return (
    <div className={className}>
      <h2 className="text-title font-medium text-white ">{title}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <InputText
          label="Номер телефона"
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder="+375 (29) 123-45-67"
          className="bg-light text-base"
          leftIcon={phoneIcon}
          error={errors.phone}
        />

        <InputPassword
          label="Пароль"
          value={formData.password}
          onChange={handlePasswordChange}
          placeholder="Придумайте пароль"
          className="bg-light text-black text-base"
          error={errors.password}
        />

        <div className="flex flex-col gap-2">
          <InputCheckbox
            label={termsLabel}
            checked={formData.agreeToTerms}
            onChange={handleAgreeToTermsChange}
            className="text-sm text-black"
            error={errors.agreeToTerms}
          />

          <InputCheckbox
            label="Я принимаю участие и согласен с условиями бонуса"
            checked={formData.agreeToBonusTerms}
            onChange={handleAgreeToBonusTermsChange}
            className="text-sm"
          />
        </div>

        <Button 
          className="w-full text-white text-base uppercase font-medium" 
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Регистрация...' : 'Регистрация'}
        </Button>

        {errors.general && (
          <p className="text-base text-error text-center">
            {errors.general}
          </p>
        )}
      </form>

      {debugInfo}
    </div>
  );
});

FormRegistrationBase.displayName = 'FormRegistration';

export const FormRegistration = FormRegistrationBase;
