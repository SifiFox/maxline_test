import logo from '@assets/images/logo.svg';
import { LazyImage } from '@shared/lazy-image';

export const Header = () => {
  return (
    <header className="flex items-center justify-center pt-9 lg:pt-20">
      <LazyImage src={logo} alt="logo" className="w-44 lg:w-83" />
    </header>
  );
};
