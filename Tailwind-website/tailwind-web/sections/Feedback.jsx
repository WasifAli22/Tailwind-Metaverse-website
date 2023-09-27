'use client';

import { motion } from 'framer-motion';
// import { TypingText, TitleText, InsightCard } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: 'false', amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}>
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[0.5] lg:max-w-[370px] flex gradient-05 sm:p-8 flex-col justify-end rounded-[32px] border-[1px] border-[#6a6a6a] relative">
        <div className="feedback-gradient" />
        <div className="">
          <h4 className="sm:leading[40px] sm:text-[32px] font-bold text-[26px] text-white leading-[36px]">Samantha </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">Founder Metaverus</p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">“With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”</p>
      </motion.div>
      <motion.div initial="hidden" whileInView="show" variants={fadeIn('left', 'tween', 0.2, 1)} className="relative flex flex-1 justify-center items-center">
        <img src="/planet-09.png" alt="" className="w-full lg:h-[650px] rounded-[40px] h-auto object-cover min-h-[270px]" />
        <motion.div initial="hidden" whileInView="show" variants={zoomIn(0.4, 1)} className="hidden lg:block absolute -left-[10%] top-[3%]">
          <img src="/stamp.png" alt="" className="w-[155px] h-[155px] object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
