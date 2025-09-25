import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import bg_main from '@assets/images/bg_main.png';
import { FlameBlue, FlameGold, FlameTriangle } from './flames';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen relative bg-main-layout font-family-sans overflow-hidden">
      <motion.img
        src={bg_main}
        alt="bg_main"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale: [1, 1.05, 1.02, 1, 1.02],
          x: [0, -2, 0, 2, 0],
          y: [0, 1, 0, -1, 0],
          filter: [
            'brightness(1) saturate(1) hue-rotate(0deg)',
            'brightness(1.05) saturate(1.1) hue-rotate(2deg)',
            'brightness(0.98) saturate(0.95) hue-rotate(-1deg)',
            'brightness(1.03) saturate(1.08) hue-rotate(3deg)',
            'brightness(1) saturate(1) hue-rotate(0deg)',
          ],
        }}
        transition={{
          scale: {
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          x: {
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          y: {
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          filter: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />
      <motion.div
        className="hidden md:block w-[835px] h-[1668px] left-0 top-[30%] bg-gradient-pink absolute inset-0 z-10 rounded-full blur-3xl opacity-80 z-10 mix-blend-color-dodge"
        animate={{
          scale: [1, 1.1, 0.97, 1.12, 1.03, 1],
          x: [0, -10, 3, 8, -5, 0],
          y: [0, 5, -3, 10, -8, 0],
          opacity: [0.8, 0.9, 0.7, 0.85, 0.78, 0.9, 0.8],
          filter: [
            'blur(48px) brightness(1)',
            'blur(52px) brightness(1.18)',
            'blur(46px) brightness(0.9)',
            'blur(56px) brightness(1.28)',
            'blur(50px) brightness(1.1)',
            'blur(48px) brightness(1)',
          ],
        }}
        transition={{
          scale: {
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          x: {
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          y: {
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          opacity: {
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          filter: {
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      ></motion.div>
      <motion.div
        className="hidden md:block w-[835px] h-[1668px] left-auto right-[5%] -top-[130%] bg-gradient-purple absolute inset-0 z-10 rounded-full blur-3xl opacity-80 z-10 mix-blend-color-dodge"
        animate={{
          scale: [1, 0.92, 1.18, 0.97, 1.22, 1.08, 1],
          x: [0, 18, -8, 15, -20, 6, 0],
          y: [0, -12, 8, -18, 20, -6, 0],
          opacity: [0.8, 0.6, 0.95, 0.7, 0.9, 0.55, 0.95, 0.8],
          filter: [
            'blur(48px) brightness(1)',
            'blur(45px) brightness(0.8)',
            'blur(58px) brightness(1.3)',
            'blur(50px) brightness(1.1)',
            'blur(65px) brightness(1.45)',
            'blur(52px) brightness(1.2)',
            'blur(48px) brightness(1)',
          ],
        }}
        transition={{
          scale: {
            duration: 19,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          x: {
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          y: {
            duration: 24,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          opacity: {
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          filter: {
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      ></motion.div>
      <FlameGold className="hidden 2xl:block absolute right-165 -bottom-23 hidden" />
      <FlameTriangle className="-left-75 bottom-45 scale-50 lg:scale-100 lg:-left-67 lg:bottom-10 absolute z-0" />
      <FlameBlue className="absolute -right-30 bottom-65 2xl:right-115 2xl:top-25 scale-70 z-50 md:z-0 md:scale-150 lg:scale-125" />
      <main className="relative z-10 flex flex-col h-full overflow-hidden">{children}</main>
    </div>
  );
}
