'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
// import styles from '../styles'
// import { footerVariants } from '../utils/motion'
const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1)} className="flex md:flex-row flex-col gap-4">
    <img src={imgUrl} alt="" className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover" />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 flex flex-col max-w-[650px] md:ml-[62px]">
        <h4 className="font-normal text-[26px] lg:text-[42px] text-white">{title}</h4>
        <p className="mt-[16px] font-normal text-[14px] lg:text-[20px] text-secondary-white">{subtitle}</p>
      </div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] border-[1px] border-white rounded-full bg-transparent">
        <img src="arrow.svg" alt="" className="w-[40%] h-[40%] object-contain" />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
