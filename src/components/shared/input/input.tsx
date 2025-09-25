
import React, { useState, memo, useCallback } from 'react';
import eyeClosedIcon from '../../../assets/icons/eye_closed.svg';
import eyeOpenIcon from '../../../assets/icons/eye_open.svg';

interface BaseInputProps {
  className?: string;
  label?: React.ReactNode;
  error?: string;
}

interface TextInputProps extends BaseInputProps {
  type?: 'text' | 'password' | 'number';
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  leftIcon?: React.ReactNode;
}

interface CheckboxInputProps extends BaseInputProps {
  type: 'checkbox';
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

type InputProps = TextInputProps | CheckboxInputProps;

const InputBase = memo((props: InputProps) => {
  const { className, label, error } = props;

  if (props.type === 'checkbox') {
    const { checked, onChange } = props;
    
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.checked);
    }, [onChange]);
    
    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className={`size-[18px] rounded-sm border-2 border-gray-300 bg-white appearance-none focus:outline-none transition-colors checked:bg-purple-600 checked:border-purple-600 ${className || ''}`}
            />
            {checked && (
              <svg
                className="absolute top-0 left-0 size-4 text-white pointer-events-none transition-opacity opacity-100"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          {label && (
            <label className="font-medium text-label cursor-pointer text-sm">
              {label}
            </label>
          )}
        </div>
        {error && (
          <span className="text-base text-error">{error}</span>
        )}
      </div>
    );
  }

  const { type = 'text', value, onChange, placeholder, leftIcon } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  
  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;
  const showPasswordToggle = type === 'password';
  
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }, [onChange]);
  
  const handleTogglePassword = useCallback(() => {
    setIsPasswordVisible(prev => !prev);
  }, []);
  
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-base text-label">
          {label}
        </label>
      )}
      <div className="relative group focus-within:ring-2 focus-within:ring-purple-600 rounded-md">
        {leftIcon && (
          <div className={`absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none bg-white rounded-l-md ${error ? 'border border-error border-r-transparent group-focus-within:border-transparent' : ''}`}>
            {leftIcon}
          </div>
        )}
        <input
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          className={`px-3 py-2 ${leftIcon ? 'pl-13' : ''} ${showPasswordToggle ? 'pr-10' : ''} rounded-md placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-transparent w-full ${error ? 'border-error' : 'border-gray-300'} border ${className || ''}`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          >
            <img
              src={isPasswordVisible ? eyeOpenIcon : eyeClosedIcon}
              alt={isPasswordVisible ? 'Скрыть пароль' : 'Показать пароль'}
              className="w-5 h-5"
            />
          </button>
        )}
      </div>
      {error && (
        <span className="text-base text-error">{error}</span>
      )}
    </div>
  );
});

InputBase.displayName = 'Input';

export const Input = InputBase;

export const InputText = memo((props: Omit<TextInputProps, 'type'>) => {
  return <Input {...props} type="text" />;
});

export const InputPassword = memo((props: Omit<TextInputProps, 'type'>) => {
  return <Input {...props} type="password" />;
});

export const InputCheckbox = memo((props: Omit<CheckboxInputProps, 'type'>) => {
  return <Input {...props} type="checkbox" />;
});

InputText.displayName = 'InputText';
InputPassword.displayName = 'InputPassword';
InputCheckbox.displayName = 'InputCheckbox';