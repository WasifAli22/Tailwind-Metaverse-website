'use client';

import { motion } from 'framer-motion';
// import { TypingText, TitleText } from '../components';
// import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  // <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)} className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] cursor-pointer duration-[0.7s] ease-out-flex`} >
  //   {title}
  // </motion.div>
  <motion.div variants={fadeIn('right', 'spring', index * 0.5, 0.75)} className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] cursor-pointer duration-[0.7s] ease-out-flex`} onClick={() => handleClick(id)}>
    <img src={imgUrl} alt={title} className="w-full h-full object-cover object-center" />
    <h3 className="absolute bottom-0 left-0 right-0 text-white font-bold text-lg p-4 bg-gradient-to-t from-black bg-opacity-50">{title}</h3>
  </motion.div>

);

export default ExploreCard;
