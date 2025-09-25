import { motion } from 'framer-motion';
import { BonusShape } from '@/components';
import flameLeft from '@assets/images/flame_left.png';
import flameRight from '@assets/images/flame_right.png';

export const Bonus = () => {
  return (
    <div className="w-full md:w-xl mx-auto 2xl:w-[705px] h-fit min-h-[200px] relative overflow-visible font-mts md:absolute md:top-[15%] lg:top-[20%] xl:top-[31%] md:left-1/2 md:-translate-x-1/2 xl:left-[30%] 2xl:left-1/2 xl:-translate-x-1/2 z-10">
      <div className="px-4 pt-11 relative">
        <div className="relative">
          <BonusShape />
          <motion.img
            src={flameLeft}
            alt="Flame Left"
            className="absolute inset-0 w-full h-full object-cover scale-120 z-10"
            animate={{
              opacity: [0.9, 1, 0.85, 0.95, 0.88, 1, 0.9],
              x: [0, 1, -1, 0.5, -0.5, 0],
              y: [0, -0.5, 0.5, -1, 1, 0],
              filter: [
                'brightness(1) hue-rotate(0deg) saturate(1) blur(0px)',
                'brightness(1.2) hue-rotate(8deg) saturate(1.3) blur(1px)',
                'brightness(0.9) hue-rotate(-5deg) saturate(0.9) blur(0.5px)',
                'brightness(1.3) hue-rotate(12deg) saturate(1.4) blur(1.5px)',
                'brightness(0.95) hue-rotate(-3deg) saturate(0.95) blur(0px)',
                'brightness(1.15) hue-rotate(6deg) saturate(1.2) blur(1px)',
                'brightness(1) hue-rotate(0deg) saturate(1) blur(0px)',
              ],
            }}
            transition={{
              opacity: {
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              x: {
                duration: 3.8,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              y: {
                duration: 4.2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              filter: {
                duration: 2.1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />
          <motion.img
            src={flameRight}
            alt="Flame Right"
            className="absolute inset-0 w-full h-full object-cover scale-120 z-10"
            animate={{
              opacity: [0.95, 0.87, 1, 0.91, 0.89, 0.96, 0.95],
              x: [0, -0.8, 1.2, -0.4, 0.6, 0],
              y: [0, 0.8, -0.6, 1.1, -0.9, 0],
              filter: [
                'brightness(1) hue-rotate(0deg) saturate(1) blur(0px)',
                'brightness(0.92) hue-rotate(-4deg) saturate(0.92) blur(0.5px)',
                'brightness(1.25) hue-rotate(10deg) saturate(1.25) blur(1.2px)',
                'brightness(1.08) hue-rotate(-2deg) saturate(1.08) blur(0px)',
                'brightness(1.3) hue-rotate(12deg) saturate(1.3) blur(1.8px)',
                'brightness(1.15) hue-rotate(5deg) saturate(1.15) blur(0.8px)',
                'brightness(1) hue-rotate(0deg) saturate(1) blur(0px)',
              ],
            }}
            transition={{
              opacity: {
                duration: 3.1,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              x: {
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              y: {
                duration: 3.7,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              filter: {
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />

          <div className="absolute bottom-[35%] sm:bottom-[70%] md:bottom-[50%] lg:bottom-[45%] xl:bottom-[42%] 2xl:bottom-[35%] left-1/2 -translate-x-1/2 z-20">
            <span
              className="relative text-white text-2xl font-bold uppercase leading-none text-shadow-3d z-15"
              data-text="200"
            >
              200
            </span>
          </div>

          <div className="absolute -bottom-1 sm:bottom-[12%] md:bottom-0 lg:-bottom-0 2xl:-bottom-2 left-1/2 -translate-x-1/2 z-30">
            <span className="text-xl lg:text-[50px] 2xl:text-[70px] font-bold text-blue-primary whitespace-nowrap">
              ФРИСПИНОВ
            </span>
          </div>
        </div>
      </div>

      <div className="text-center mt-0 md:mt-5 2xl:mt-0">
        <span className="text-white text-lg font-bold bordered-text">ЗА РЕГИСТРАЦИЮ</span>
      </div>
    </div>
  );
};
