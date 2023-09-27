'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingText, ExploreCard, TitleText } from '../components';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section id="explore" className={`${styles.paddings}`}>
      <motion.div variants={staggerContainer} initial="hidden" viewport={{ once: false, amount: 0.25 }} whileInView="show" className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText textStyles="text-center" title={<>Choose the world you want <br className="md:block hidden" /> to explore</>} />
        <div className="mt=[50px] flex flex-col lg:flex-row gap-5 min-h-[70vh]">
          {exploreWorlds.map((world, index) => (
            <ExploreCard key={world.id} {...world} index={index} active={active} handleClick={setActive} />
          ))}

        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
