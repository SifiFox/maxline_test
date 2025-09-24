import { BonusShape } from '../shared';

export const Bonus = () => {
  return (
    <div className="w-full 2xl:max-w-[705px] h-fit relative overflow-hidden font-mts lg:absolute lg:top-[31%] lg:left-1/2 lg:-translate-x-1/2">
      <div className="px-4 pt-11 relative">
        <div className="relative">
          <BonusShape />
          <img
            src="/src/assets/images/flame_left.png"
            alt="Flame Left"
            className="absolute inset-0 w-full h-full object-cover scale-120 z-10"
          />
          <img
            src="/src/assets/images/flame_right.png"
            alt="Flame Right"
            className="absolute inset-0 w-full h-full object-cover scale-120 z-10"
          />

          <div className="absolute bottom-[35%] sm:bottom-[70%] md:bottom-[50%] lg:bottom-[40%] 2xl:bottom-[38%] left-1/2 -translate-x-1/2 z-20">
            <span className="relative text-white text-2xl font-bold uppercase leading-none text-shadow-3d lg:text-shadow-3d-lg xl:text-shadow-3d-xl z-15">
              200
            </span>
          </div>

          <div className="absolute -bottom-1 sm:bottom-[12%] md:bottom-[5%] lg:-bottom-2 left-1/2 -translate-x-1/2 z-30">
            <span className="text-xl font-bold text-blue-primary whitespace-nowrap">ФРИСПИНОВ</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-0 md:mt-5 2xl:mt-0">
        <span className="text-white text-lg font-bold tracking-wider">ЗА РЕГИСТРАЦИЮ</span>
      </div>
    </div>
  );
};
