import React from 'react';
import { motion } from 'framer-motion';

const MidSection: React.FC = () => {
  return (
    <section className="flex items-center animate-fade-in-up">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 flex-1">
          {/* Label */}

		  <div className='flex items-center gap-3'>
          <motion.div 
            className="inline-block bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Reliable, and Efficient
             
          </motion.div>

          <motion.div  className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            >
            
            <svg width="160" height="106" viewBox="0 0 160 106" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M121 39.3521C121 39.3521 116.333 44.5362 110 41.2961L97.6672 39.3521C97.6672 39.3521 92.6673 36.112 93.6672 42.2682V48.1038L87 57.5" stroke="#171C27"/>
            <path d="M13 94.5L40.1061 76.2011C43.6292 73.8227 44.7274 70.652 48.9781 70.6745V70.6745C51.966 70.6904 54.7917 76.0621 56.7852 78.2878L61.8045 83.8917C61.8045 83.8917 65.4816 87.2083 66.8187 83.8917L75.8557 65.9591C76.5138 64.6532 76.9094 63.2142 77.624 61.9383C78.1186 61.055 78.8741 60.2465 79.959 60.3636C81.6968 60.5512 82.9786 62.0888 84.5203 62.9124L86.5411 63.992V63.992C86.5411 63.992 91.6864 59.9218 94.1955 56.9338L94.7345 56.2919C96.1452 54.612 96.9949 52.5327 97.1644 50.3456L98.2408 36.4623C98.2408 36.4623 98.2408 31.5888 102.807 34.102C103.572 34.523 104.334 34.9648 105.147 35.2831L116.626 39.7769C116.626 39.7769 124.314 43.0935 122.309 36.4623V36.4623C122.309 36.4623 128.408 31.6655 130.841 28.6937L131 28.5" stroke="url(#paint0_linear_770_7196)" stroke-width="2"/>
            <g filter="url(#filter0_f_770_7196)">
            <path d="M11 94.5L38.7691 75.3873C42.399 72.8889 43.508 69.5388 47.9143 69.5918V69.5918C50.9864 69.6287 53.8457 75.2143 55.8734 77.5224L61.0453 83.4095C61.0453 83.4095 64.8159 86.8769 66.187 83.4095L75.5089 64.5503C76.1472 63.2589 76.5388 61.8473 77.2066 60.5708C77.7213 59.587 78.5333 58.6503 79.7264 58.8202C81.4663 59.0679 82.7388 60.6053 84.2822 61.4459L86.4108 62.6053V62.6053C86.4108 62.6053 91.6784 58.3605 94.2486 55.2399L94.8233 54.542C96.2638 52.7931 97.129 50.6421 97.3008 48.3829L98.4079 33.8242C98.4079 33.8242 98.4079 28.7117 103.115 31.3702C103.883 31.8041 104.649 32.2558 105.469 32.5829L117.261 37.2895C117.261 37.2895 125.144 40.7568 123.088 33.8242V33.8242C123.088 33.8242 129.347 28.8029 131.825 25.7173L132 25.5" stroke="#233B5C" stroke-width="2"/>
            </g>
            <g filter="url(#filter1_f_770_7196)">
            <ellipse cx="132" cy="28" rx="11" ry="10.5" fill="url(#paint1_linear_770_7196)"/>
            </g>
            <g filter="url(#filter2_f_770_7196)">
            <ellipse cx="133" cy="26" rx="4" ry="4.5" fill="#646B75"/>
            </g>
            <g filter="url(#filter3_f_770_7196)">
            <ellipse cx="19" cy="0.5" rx="19" ry="0.5" transform="matrix(1 0 0 -1 113 27.5)" fill="#4C629E"/>
            </g>
            <defs>
            <filter id="filter0_f_770_7196" x="0.433105" y="14.8738" width="142.347" height="90.45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_770_7196"/>
            </filter>
            <filter id="filter1_f_770_7196" x="104" y="0.5" width="56" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="8.5" result="effect1_foregroundBlur_770_7196"/>
            </filter>
            <filter id="filter2_f_770_7196" x="124" y="16.5" width="18" height="19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_770_7196"/>
            </filter>
            <filter id="filter3_f_770_7196" x="110" y="23.5" width="44" height="7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_770_7196"/>
            </filter>
            <linearGradient id="paint0_linear_770_7196" x1="78.8527" y1="56.3595" x2="13.2607" y2="94.6158" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6972B1"/>
            <stop offset="1" stop-color="#445A77" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_770_7196" x1="132" y1="17.5" x2="132" y2="38.5" gradientUnits="userSpaceOnUse">
            <stop stop-color="#364E6F"/>
            <stop offset="1" stop-color="#135FCB" stop-opacity="0"/>
            </linearGradient>
            </defs>
            </svg>

          </motion.div>
		  </div>
          {/* Headline */}
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Simplify the payments process 
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="text-lg text-gray-400 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Tools crafted to simplify and enhance your payout processes.
          </motion.p>
        </div>

      </div>
    </section>
  );
};

export default MidSection; 