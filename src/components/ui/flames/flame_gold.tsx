import { motion } from 'framer-motion';
import flameGoldBlured from '@assets/images/flames/flame_gold/flame_gold_blured.png';
import flameGoldSharped from '@assets/images/flames/flame_gold/flame_gold_sharped.png';
import innerGold from '@assets/images/flames/flame_gold/inner.png';
import outerGold from '@assets/images/flames/flame_gold/outer.png';

interface FlameGoldProps {
  className?: string;
}

export const FlameGold = ({ className }: FlameGoldProps) => {
  return (
    <div className={`w-64 h-64 ${className}`}>
      <div className="relative w-full h-full">
        <motion.img
          src={flameGoldBlured}
          alt="flame gold blurred"
          className="absolute inset-0 w-full h-full object-contain z-10"
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.8, 0.9, 0.85, 0.95, 0.8],
            filter: [
              'brightness(1) hue-rotate(0deg) saturate(1)',
              'brightness(1.1) hue-rotate(3deg) saturate(1.1)',
              'brightness(1.05) hue-rotate(-2deg) saturate(1.05)',
              'brightness(1.15) hue-rotate(4deg) saturate(1.2)',
              'brightness(1) hue-rotate(0deg) saturate(1)',
            ],
          }}
          transition={{
            scale: {
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            filter: {
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />

        <motion.img
          src={outerGold}
          alt="flame gold outer"
          className="absolute inset-0 w-full h-full object-contain z-40"
          animate={{
            rotate: [10, 370],
            scale: [1.5, 1.52, 1.48, 1.5],
            opacity: [0.85, 0.95, 0.8, 0.9, 0.85],
            filter: [
              'brightness(1) hue-rotate(0deg) saturate(1)',
              'brightness(1.3) hue-rotate(5deg) saturate(1.2)',
              'brightness(0.9) hue-rotate(-4deg) saturate(0.9)',
              'brightness(1.4) hue-rotate(8deg) saturate(1.3)',
              'brightness(0.95) hue-rotate(-3deg) saturate(0.95)',
              'brightness(1) hue-rotate(0deg) saturate(1)',
            ],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            filter: {
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />

        <motion.img
          src={innerGold}
          alt="flame gold inner"
          className="absolute inset-0 w-full h-full object-contain z-30"
          animate={{
            rotate: [0, -360],
            scale: [1.3, 1.33, 1.27, 1.31, 1.3],
            opacity: [0.85, 0.95, 0.8, 0.9, 0.85],
            filter: [
              'brightness(1) hue-rotate(0deg) saturate(1)',
              'brightness(1.4) hue-rotate(8deg) saturate(1.3)',
              'brightness(0.8) hue-rotate(-6deg) saturate(0.8)',
              'brightness(1.5) hue-rotate(10deg) saturate(1.4)',
              'brightness(0.85) hue-rotate(-8deg) saturate(0.85)',
              'brightness(1.3) hue-rotate(6deg) saturate(1.2)',
              'brightness(1) hue-rotate(0deg) saturate(1)',
            ],
          }}
          transition={{
            rotate: {
              duration: 15,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            filter: {
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />

        <motion.img
          src={flameGoldSharped}
          alt="flame gold sharped"
          className="absolute inset-0 w-full h-full object-contain z-20"
          animate={{
            scale: [1, 1.03, 1.01, 1.04, 1],
            opacity: [0.88, 0.95, 0.92, 0.97, 0.88],
            filter: [
              'brightness(1) hue-rotate(0deg) saturate(1)',
              'brightness(1.08) hue-rotate(-3deg) saturate(1.1)',
              'brightness(1.12) hue-rotate(4deg) saturate(1.15)',
              'brightness(1.05) hue-rotate(-2deg) saturate(1.05)',
              'brightness(1) hue-rotate(0deg) saturate(1)',
            ],
          }}
          transition={{
            scale: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            filter: {
              duration: 6.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      </div>
    </div>
  );
};
