import { motion } from 'framer-motion';
import flame from '../../../assets/images/flames/flame_triangle/flame.png';
import triangleBack from '../../../assets/images/flames/flame_triangle/triangle_back.png';
import triangleFront from '../../../assets/images/flames/flame_triangle/triangle_front.png';

interface FlameTriangleProps {
  className?: string;
}

export const FlameTriangle = ({ className }: FlameTriangleProps) => {
  return (
    <div className={`size-150 ${className}`}>
      <div className="relative w-full h-full">
        <motion.img
          src={triangleBack}
          alt="triangle back"
          className="absolute inset-0 w-full h-full object-contain scale-120 z-10"
          animate={{
            scale: [1.2, 1.25, 1.15, 1.2],
            opacity: [0.8, 1, 0.9, 1, 0.8],
            filter: [
              'brightness(1) hue-rotate(0deg) saturate(1)',
              'brightness(1.2) hue-rotate(10deg) saturate(1.3)',
              'brightness(1.1) hue-rotate(-5deg) saturate(1.1)',
              'brightness(1.3) hue-rotate(15deg) saturate(1.4)',
              'brightness(1) hue-rotate(0deg) saturate(1)',
            ],
          }}
          transition={{
            scale: {
              duration: 3.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            filter: {
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />

        <motion.img
          src={flame}
          alt="flame"
          className="absolute inset-0 w-full h-full object-contain scale-80 z-30"
          animate={{
            rotate: [0, 360],
            opacity: [0.8, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0.8],
            scale: [0.8, 0.75, 0.78, 0.85, 0.9, 0.82, 0.8],
            filter: [
              'brightness(1) hue-rotate(0deg) saturate(1)',
              'brightness(0.05) hue-rotate(0deg) saturate(0.2)',
              'brightness(0.02) hue-rotate(-5deg) saturate(0.1)',
              'brightness(0.03) hue-rotate(0deg) saturate(0.15)',
              'brightness(0.05) hue-rotate(5deg) saturate(0.2)',
              'brightness(0.02) hue-rotate(-10deg) saturate(0.1)',
              'brightness(4.8) hue-rotate(45deg) saturate(3.0)',
              'brightness(0.03) hue-rotate(0deg) saturate(0.15)',
              'brightness(0.05) hue-rotate(-5deg) saturate(0.2)',
              'brightness(0.02) hue-rotate(10deg) saturate(0.1)',
              'brightness(0.05) hue-rotate(0deg) saturate(0.2)',
              'brightness(0.02) hue-rotate(5deg) saturate(0.1)',
              'brightness(1) hue-rotate(0deg) saturate(1)',
            ],
          }}
          transition={{
            rotate: {
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            },
            opacity: {
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            },
            scale: {
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            filter: {
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        />

        <motion.img
          src={triangleFront}
          alt="triangle front"
          className="absolute inset-0 w-full h-full object-contain scale-120 z-20"
          animate={{
            scale: [1.2, 1.22, 1.18, 1.24, 1.2],
            opacity: [0.85, 1, 0.92, 1, 0.85],
            filter: [
              'brightness(1) hue-rotate(0deg) saturate(1)',
              'brightness(1.15) hue-rotate(-8deg) saturate(1.2)',
              'brightness(1.25) hue-rotate(12deg) saturate(1.35)',
              'brightness(1.05) hue-rotate(-3deg) saturate(1.05)',
              'brightness(1) hue-rotate(0deg) saturate(1)',
            ],
          }}
          transition={{
            scale: {
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            opacity: {
              duration: 3.1,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            filter: {
              duration: 2.6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        />
      </div>
    </div>
  );
};
