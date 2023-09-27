'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer variants={footerVariants} initial="hidden" whileInView="show" className={`${styles.paddings} py-8 relative`}>
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} flex flex-col gap-8 mx-auto`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold text-[44px] md:text-[64px] text-white">Enter the Metaverse</h4>
        <button type="button" className="flex items-center py-4 px-6 bg-[#25618b] h-fit rounded-[32px] gap-[12px]">
          <img src="/headset.svg" alt="" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-[16px] text-white">Enter the Metaverse</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] w-100 bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extra-bold text-[24px] text-white">
            Metaversus
          </h4>
          <p className="text-[14px] text-white opacity-50 font-normal">
            Copyright © 2023 Wasif Shahid. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link
                href={social.profileLink || ''}
                key={social.name}
                target={social.name === 'linkedin' ? '_blank' : ''}
                rel="noopener noreferrer"
              >
                <img
                  src={social.url}
                  alt=""
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
