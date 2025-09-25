import { motion } from 'framer-motion';
import hero from '../../assets/images/hero_main.png';

export const Hero = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <motion.img
          src={hero}
          alt="Zeus"
          className="relative z-20 -mb-2"
          animate={{
            scale: [1, 1.01, 1, 1.02, 1],
            rotateY: [0, 2, -1, 3, 0],
            filter: [
              'brightness(1) contrast(1) saturate(1) hue-rotate(0deg)',
              'brightness(1.2) contrast(1.1) saturate(1.3) hue-rotate(5deg)',
              'brightness(0.9) contrast(0.95) saturate(0.9) hue-rotate(-3deg)',
              'brightness(1.4) contrast(1.2) saturate(1.5) hue-rotate(10deg)',
              'brightness(1.1) contrast(1.05) saturate(1.1) hue-rotate(2deg)',
              'brightness(1) contrast(1) saturate(1) hue-rotate(0deg)',
            ],
          }}
          transition={{
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotateY: {
              duration: 7,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            filter: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          whileHover={{
            scale: 1.08,
            filter:
              'brightness(1.3) contrast(1.15) saturate(1.4) drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))',
            transition: { duration: 0.4 },
          }}
        />
      </motion.div>
    </div>
  );
};
