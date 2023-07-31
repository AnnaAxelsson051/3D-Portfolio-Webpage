import { motion } from 'framer-motion';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute 
      inset-0 top-[60px] max-w-7xl mx-auto flex 
      flex-row items-start gap-5`}>
        <div className="flex flex-col 
        justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full green-pink-gradient"/>
{/*<div className="w-5 h-5 rounded-full bg-white"/>*/}
{/*<div className="w-1 sm:h-80 h-40 green-pink-gradient"/>*/}
<div className="w-1 sm:h-60 h-40 green-pink-gradient1"/>
{/*violet-gradient */}
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-primary2`}>Welcome to my page. <span className="text-white-100"></span></h1>
        <p className={`${styles.heroSubText} text-white`}>  I am a passionate and versatile full-stack developer, <br className="sm:block hidden"/>dedicated to crafting dynamic and responsive web applications</p>
        </div>
      </div>
      {/*lila: text-[#915eff] 
      text-white-100
      I am a passionate full stack developer focused on building dynamic and responsive web applications
      I am a versatile full stack developer  specializing in <br className="sm:block hidden"/>crafting dynamic and responsive web applications. 
      I am a passionate and versatile full-stack developer, dedicated to crafting dynamic and responsive web applications */}

      <ComputersCanvas/>
      <div className="absolute xs:bottom-2 
      bottom-32 w-full flex justify-center 
      items-center ">
        <a href="#about">
          <div className="w-[33px] h-[46px] rounded-3xl border-2 border-white
           flex justify-center items-start p-2 shadow-card ">
            {/*green-pink-gradient border-secondary ist för green pink gradient */}
            <motion.dev 
            animate={{
              y: [0, 15, 0]
            }}
            transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
            }}
            className="w-5 h-3 rounded-full  mb-1 bg-secondary"/>
          </div>
          {/*bg-white black-gradient ist för green pink gradient */}
        </a>
      </div>
    </section>
  )
}

export default Hero