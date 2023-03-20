import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import{fadeIn, textVariant} from '../utils/motion';

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
<p className={styles.sectionSubText}>Introduction</p>
<h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 
    text-secondary text-[17px] max-w-3x1 leading-[30px]">
    Test text: Testamente möjliggör till en fördelning av 
    kvarlåtenskapen i enlighet med testators vilja 
    framför de regler som anges i arvsordningen. För 
    det fall att ett giltigt testamente föreligger kan 
    detta medföra ett partiellt eller totalt åsidosättande 
    av arvsordningens fördelningsregler. Upprättande av testamente 
    är således ett sätt att ge den individuella viljan genomslag 
    framför traditionen med släktarv..
    </motion.p>
    </>
  )
}

export default About