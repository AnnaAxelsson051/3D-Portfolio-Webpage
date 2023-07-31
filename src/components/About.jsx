import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc'

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring",0.5 * index, 0.75)} 
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
<div options={{
  max: 45,
  scale: 1,
  speed: 450
}} className="bg-black rounded-[20px] 
py-5 px-12 min-h-[280px] flex 
justify-evenly items-center flex-col">
<img src={icon} alt={title} className="w-16 h-16 object-contain"/>
<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
</div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
<p className={styles.sectionSubText}>Introduction</p>
<h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    {/*text-white-100 */}
    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 
    text-secondary text-[17px] max-w-3x1 leading-[30px]">
      My expertise range from Java, C#, HTML, CSS, JavaScript, SQL, 
      and databases to frameworks like Spring Boot, ASP.NET Core and React as well as 
      architectural patterns
      like MVC and micro services. I have 
      a strong passion for creating innovative software solutions and 
       enhancing already existing ones. As a highly adept problem solver, I embrace every 
       opportunity to take on new challenges and continuously enhance my skills. 
      {/*
      I am a versatile software developer with expertise in Java, C#, HTML, CSS, JavaScript, SQL, 
      and databases, as well as hands-on experience with frameworks like React. Additionally,
       I have practical knowledge of designing and implementing architectures like MVC and 
       microservices. I have a strong passion for creating innovative software solutions and 
       enhancing existing ones. As a highly adept problem solver, I embrace every opportunity 
       to take on fresh challenges and continually enhance my skills, consistently delivering 
       exceptional results
      
      A quick learner, I am always eager to tackle new challenges 
       and continuously improve my skills to deliver exceptional results
       I'm a software developer with knowledge in Java, C#, Html, Css and JavaScript. 
      I also have experience with frameworks such as React, Angular and Three.js.
     I'm a quick learner with a great passion for developing new software solutions and 
  bettering already existing ones.*/}
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) =>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}

    </div>
    </>
  )
}

export default SectionWrapper (About, "about")