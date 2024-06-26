import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] mb-10 max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm 
            <span className='text-[#915eff]'> Javier</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* ¡Hola! I'm Javi I'm a passionate and collaborative developer on a mission to make technology more accessible. My experience in software development, coupled with a degree in Computer Science, equips me to create efficient, effective, and empathetic solutions.
            A little more about me:
            As a first-generation Latinx student, I bring a unique perspective shaped by my upbringing in an immigrant household. Witnessing the impact of non-accessible technology drives my commitment to breaking down barriers and serving diverse communities.
            Beyond coding, I stay abreast of industry trends and emerging technologies, particularly in Artificial Intelligence. I'm fascinated by its potential to elevate our quality of life.
            When I'm not immersed in the tech world, you'll find me engaged in the art of combat sports, skateboarding, or simply enjoying of a well-brewed cup of coffee. ☕ */}
            I like to develop things! <br className='sm:block hidden' />
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px]
            rounded-3xl border-4 border-secondary flex 
            justify-center items-start p-2'>
              <motion.div 
                animate={{
                  y: [0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>'
        </a>
      </div>
    </section>
  )
}

export default Hero