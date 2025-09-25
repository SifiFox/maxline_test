import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo, useMemo } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-green hover:bg-green-hover text-white border-transparent',
  secondary: 'bg-placeholder hover:bg-placeholder-hover text-white border-transparent',
  outline:
    'bg-transparent hover:bg-purple-50 text-purple-primary border-purple-primary hover:text-purple-700',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border-transparent',
  danger: 'bg-error hover:bg-error-hover text-white border-transparent',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-6 py-4 text-lg',
};

const spinner = () => (
  <svg
    className="animate-spin mr-2 h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const ButtonBase = memo(
  ({
    children,
    className = '',
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    fullWidth = false,
    ...props
  }: ButtonProps) => {
    const baseStyles =
      'font-medium rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center';

    const isDisabled = disabled || loading;

    const buttonStyles = useMemo(
      () =>
        [
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth ? 'w-full' : '',
          isDisabled ? 'opacity-50 cursor-not-allowed' : '',
          className,
        ]
          .filter(Boolean)
          .join(' '),
      [variant, size, fullWidth, isDisabled, className]
    );

    return (
      <button className={buttonStyles} disabled={isDisabled} {...props}>
        <div className="flex items-center justify-center">
          {loading && spinner()}
          <span>{children}</span>
        </div>
      </button>
    );
  }
);

ButtonBase.displayName = 'Button';

export const Button = ButtonBase;

export const ButtonPrimary = memo((props: Omit<ButtonProps, 'variant'>) => {
  return <Button {...props} variant="primary" />;
});

export const ButtonSecondary = memo((props: Omit<ButtonProps, 'variant'>) => {
  return <Button {...props} variant="secondary" />;
});

export const ButtonOutline = memo((props: Omit<ButtonProps, 'variant'>) => {
  return <Button {...props} variant="outline" />;
});

export const ButtonGhost = memo((props: Omit<ButtonProps, 'variant'>) => {
  return <Button {...props} variant="ghost" />;
});

export const ButtonDanger = memo((props: Omit<ButtonProps, 'variant'>) => {
  return <Button {...props} variant="danger" />;
});

ButtonPrimary.displayName = 'ButtonPrimary';
ButtonSecondary.displayName = 'ButtonSecondary';
ButtonOutline.displayName = 'ButtonOutline';
ButtonGhost.displayName = 'ButtonGhost';
ButtonDanger.displayName = 'ButtonDanger';
