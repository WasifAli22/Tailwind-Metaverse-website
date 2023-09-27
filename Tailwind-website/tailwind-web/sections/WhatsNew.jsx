'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText, NewFeatures } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { newFeatures } from '../constants';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: 'false', amount: 0.25 }} className={`${styles.innerWidth} grid lg:grid-cols-2 grid-cols-1`}>

      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[0.75] flex justify-center flex-col">
        <TypingText title="| Whats new?" />
        <TitleText title={<>What's new about metaversus</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div variants={planetVariants('right')} initial="hidden" whileInView="show" className={`${styles.flexCenter}`}>
        <img src="/whats-new.png" alt="Get started" className="h-[90%] w-[90%] object-contain" />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
