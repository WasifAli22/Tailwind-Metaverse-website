'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: 'false', amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col `}>

      <TypingText title="| people on the world" textStyles="text-center" />
      <TitleText title={<>Track friends around you and invite them to play together in the same world</>} textStyles="text-center" />
      <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className="relative flex w-full mt-[68px] h-[550px]">
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />
        <div className="absolute p-[6px] rounded-full right-20 bottom-20 w-[70px] h-[70px] bg-[#5d6680]">
          <img src="people-01.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute p-[6px] rounded-full top-10 left-20 w-[70px] h-[70px] bg-[#5d6680]">
          <img src="people-02.png" alt="" className="w-full h-full" />
        </div>
        <div className="absolute p-[6px] rounded-full left-[45%] top-1/2 w-[70px] h-[70px] bg-[#5d6680]">
          <img src="people-03.png" alt="" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
