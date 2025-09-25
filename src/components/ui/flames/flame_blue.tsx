import { motion } from 'framer-motion';
import flameBlueBack from '@assets/images/flames/flame_blue/flame_blue_back.png';
import flameBlueFront from '@assets/images/flames/flame_blue/flame_blue_front.png';
import innerBlue from '@assets/images/flames/flame_blue/inner.png';
import outerBlue1 from '@assets/images/flames/flame_blue/outer_1.png';
import outerBlue2 from '@assets/images/flames/flame_blue/outer_2.png';

interface FlameBlueProps {
  className?: string;
}

export const FlameBlue = ({ className }: FlameBlueProps) => {
  return (
    <div className={`size-64 ${className}`}>
      <div className="relative w-full h-full">
        <motion.img
          src={flameBlueBack}
          alt="flame blue back"
          className="absolute inset-0 z-10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 0.95, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.img
          src={outerBlue1}
          alt="flame blue outer 1"
          className="absolute inset-0 z-30"
          animate={{
            rotate: [0, 360],
            opacity: [0.85, 0.95, 0.8, 0.9, 0.85],
            filter: [
              'brightness(1) hue-rotate(0deg)',
              'brightness(1.3) hue-rotate(8deg)',
              'brightness(0.9) hue-rotate(-5deg)',
              'brightness(1.4) hue-rotate(12deg)',
              'brightness(1) hue-rotate(0deg)',
            ],
          }}
          transition={{
            rotate: {
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
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
          src={outerBlue2}
          alt="flame blue outer 2"
          className="absolute inset-0 z-20"
          animate={{
            rotate: [0, 360],
            opacity: [0.8, 0.92, 0.75, 0.88, 0.8],
            filter: [
              'brightness(1) hue-rotate(0deg)',
              'brightness(1.25) hue-rotate(-10deg)',
              'brightness(0.85) hue-rotate(5deg)',
              'brightness(1.3) hue-rotate(-15deg)',
              'brightness(1) hue-rotate(0deg)',
            ],
          }}
          transition={{
            rotate: {
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
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

        <motion.img
          src={innerBlue}
          alt="flame blue inner"
          className="absolute inset-0 z-40"
          animate={{
            rotate: [0, -360],
            opacity: [0.85, 0.95, 0.8, 0.9, 0.85],
            scale: [1, 1.03, 0.98, 1.05, 0.96, 1],
            filter: [
              'brightness(1) hue-rotate(0deg) saturate(1)',
              'brightness(1.4) hue-rotate(15deg) saturate(1.3)',
              'brightness(0.8) hue-rotate(-8deg) saturate(0.8)',
              'brightness(1.5) hue-rotate(18deg) saturate(1.4)',
              'brightness(0.85) hue-rotate(-12deg) saturate(0.85)',
              'brightness(1.3) hue-rotate(12deg) saturate(1.2)',
              'brightness(1) hue-rotate(0deg) saturate(1)',
            ],
          }}
          transition={{
            rotate: {
              duration: 14,
              repeat: Infinity,
              ease: 'linear',
            },
            opacity: {
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            scale: {
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            filter: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />

        <motion.img
          src={flameBlueFront}
          alt="flame blue front"
          className="relative scale-120 z-20"
          animate={{
            scale: [1.2, 1.25, 1.15, 1.22, 1.2],
            opacity: [0.85, 0.95, 0.9, 0.97, 0.85],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
};
