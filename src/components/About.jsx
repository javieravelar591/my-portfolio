import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const stats = [
  { value: '300K+', label: 'Users impacted at Global Payments' },
  { value: '50%',   label: 'Test coverage increase across 10+ services' },
  { value: '40K+',  label: 'Users migrated from legacy systems' },
  { value: '2+',    label: 'Years of professional experience' },
];

const StatCard = ({ value, label, index }) => (
  <Tilt className='flex-1 min-w-[200px]' options={{ max: 25, scale: 1.05, speed: 400 }}>
    <motion.div
      variants={fadeIn('up', 'spring', 0.15 * index, 0.6)}
      className='w-full green-pink-gradient p-[2px] rounded-2xl shadow-card overflow-hidden'
    >
      <div className='bg-white rounded-[14px] p-8 flex flex-col gap-2'>
        <span className='text-[#3b82f6] text-[42px] font-black leading-none'>{value}</span>
        <span className='text-secondary text-[15px] leading-snug'>{label}</span>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex flex-col gap-4'>
        <p>
          ¡Hola! I'm Javi — a fullstack software engineer building cloud-native systems with Java, Spring Boot, and React. Right now I'm at Global Payments, where I help build secure platforms that handle financial transactions for hundreds of thousands of merchants.
        </p>
        <p>
          I care deeply about writing clean, reliable software and about building things that actually matter to people. Outside of work you'll find me on a skateboard, training combat sports, or overthinking my coffee order. ☕
        </p>
      </motion.div>

      <div className='mt-16 flex flex-wrap gap-6'>
        {stats.map((stat, index) => (
          <StatCard key={stat.value} index={index} {...stat} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")