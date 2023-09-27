'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div variants={staggerContainer} initia="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="flex flex-col items-center justify-center relative z-10">
        <motion.h1 className={`${styles.heroHeading}`} variants={textVariant(1.1)}>
          Metaverse
        </motion.h1>
        <motion.div initial="hidden"
          whileInView="show" variants={textVariant(1.2)} className="flex justify-center flex-row items-center"
        >
          <h1 className={styles.heroHeading}>MA</h1>
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div initial="hidden"
        whileInView="show" variants={slideIn('right', 'tween', 0.2, 1)} className="relative md:-mt-[20px] -mt-[12px] w-full"
      >
        <div className="absolute w-full hero-gradient h-[300px] z-0 rounded-tl-[140px] -top-[30px]" />
        <img src="/cover.png" alt="cover" className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative" />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] relative pr-[40px] z-10">
            <img src="/stamp.png" alt="stamp" className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain" />
          </div>
        </a>
      </motion.div>

    </motion.div>
  </section>
);

export default Hero;
