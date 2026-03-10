import { motion } from 'framer-motion';
import { OrbitingCircles } from './ui/orbiting-circles';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const techIcons = {
  react:      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  java:       "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  spring:     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  docker:     "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
  gcp:        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
};

const TechIcon = ({ src, alt, size = 40 }) => (
  <div className="rounded-full bg-white/90 shadow-md border border-[#cbd5e1] p-2 flex items-center justify-center">
    <img src={src} alt={alt} width={size} height={size} className="object-contain" />
  </div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
      </motion.div>

      <div className="mt-16 flex flex-col xl:flex-row items-center justify-start gap-16">
        <div className="relative flex h-[380px] w-[380px] items-center justify-center">
          <span className="text-[#0f172a] font-black text-[18px] z-10 text-center leading-tight">
            Full<br />Stack
          </span>

          {/* Inner orbit — core stack */}
          <OrbitingCircles className="size-[42px] border-none bg-transparent" duration={22} delay={0} radius={100}>
            <TechIcon src={techIcons.java} alt="Java" />
          </OrbitingCircles>
          <OrbitingCircles className="size-[42px] border-none bg-transparent" duration={22} delay={5.5} radius={100}>
            <TechIcon src={techIcons.spring} alt="Spring Boot" />
          </OrbitingCircles>
          <OrbitingCircles className="size-[42px] border-none bg-transparent" duration={22} delay={11} radius={100}>
            <TechIcon src={techIcons.react} alt="React" />
          </OrbitingCircles>
          <OrbitingCircles className="size-[42px] border-none bg-transparent" duration={22} delay={16.5} radius={100}>
            <TechIcon src={techIcons.typescript} alt="TypeScript" />
          </OrbitingCircles>

          {/* Outer orbit — Cloud & DevOps (reverse) */}
          <OrbitingCircles className="size-[50px] border-none bg-transparent" duration={30} delay={0} radius={170} reverse>
            <TechIcon src={techIcons.docker} alt="Docker" size={46} />
          </OrbitingCircles>
          <OrbitingCircles className="size-[50px] border-none bg-transparent" duration={30} delay={7.5} radius={170} reverse>
            <TechIcon src={techIcons.kubernetes} alt="Kubernetes" size={46} />
          </OrbitingCircles>
          <OrbitingCircles className="size-[50px] border-none bg-transparent" duration={30} delay={15} radius={170} reverse>
            <TechIcon src={techIcons.gcp} alt="GCP" size={46} />
          </OrbitingCircles>
          <OrbitingCircles className="size-[50px] border-none bg-transparent" duration={30} delay={22.5} radius={170} reverse>
            <TechIcon src={techIcons.postgresql} alt="PostgreSQL" size={46} />
          </OrbitingCircles>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-[#0f172a] font-bold text-[16px] mb-2">Backend</p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'FastAPI', 'REST APIs', 'JUnit', 'SQLAlchemy'].map((t) => (
                <span key={t} className="px-3 py-1 bg-white border border-[#e2e8f0] rounded-full text-secondary text-[13px]">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#0f172a] font-bold text-[16px] mb-2">Frontend</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Vite', 'Tailwind CSS'].map((t) => (
                <span key={t} className="px-3 py-1 bg-white border border-[#e2e8f0] rounded-full text-secondary text-[13px]">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#0f172a] font-bold text-[16px] mb-2">Cloud & DevOps</p>
            <div className="flex flex-wrap gap-2">
              {['GCP', 'Docker', 'Kubernetes', 'Jenkins', 'ArgoCD', 'CI/CD'].map((t) => (
                <span key={t} className="px-3 py-1 bg-white border border-[#e2e8f0] rounded-full text-secondary text-[13px]">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[#0f172a] font-bold text-[16px] mb-2">Languages</p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'C#'].map((t) => (
                <span key={t} className="px-3 py-1 bg-white border border-[#e2e8f0] rounded-full text-secondary text-[13px]">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
