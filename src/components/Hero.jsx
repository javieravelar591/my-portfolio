import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SpecialText } from './ui/special-text';
import { GridPattern } from './ui/grid-pattern';
import { cn } from '../lib/utils';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>

      <GridPattern
        width={40}
        height={40}
        className={cn(
          "fill-blue-500/10 stroke-blue-500/10",
          "[mask-image:radial-gradient(900px_circle_at_60%_50%,white,transparent)]",
        )}
      />

      <div className={`${styles.paddingX} absolute inset-0 top-0 max-w-7xl mx-auto flex flex-col justify-center h-full gap-6`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-[#3b82f6] font-semibold text-[16px] uppercase tracking-widest mb-3'>
            Software Engineer
          </p>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className='text-[#3b82f6]'>Javier</span>
          </h1>
          <div className={`${styles.heroSubText} mt-4`}>
            <SpecialText className='text-[#64748b]' speed={25}>I like to develop things!</SpecialText>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='flex flex-row gap-4 mt-2'
        >
          <a
            href='#about'
            className='px-6 py-3 bg-[#3b82f6] text-white font-semibold rounded-lg hover:bg-[#2563eb] transition-colors text-[15px] flex items-center justify-center'
          >
            About me
          </a>
          <a
            href='#work'
            className='px-6 py-3 border-2 border-[#0f172a] text-[#0f172a] font-semibold rounded-lg hover:bg-[#0f172a] hover:text-white transition-colors text-[15px]'
          >
            View work
          </a>
        </motion.div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
