import { FormRegistration } from './forms/form-registration/form-registration';

export const FormLayout = ({ className }: { className?: string }) => {
  return (
    <div
      className={`h-full w-full xl:w-[580px] backdrop-blur-sm bg-black md:bg-black/50 ${className}`}
    >
      <FormRegistration
        className="pt-9 px-12 xl:px-25 pb-12 h-full flex flex-col justify-start xl:justify-center gap-4 xl:gap-5"
        title="Регистрация"
      />
    </div>
  );
};
