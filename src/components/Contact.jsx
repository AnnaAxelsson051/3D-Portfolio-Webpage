
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange =(e) =>{}

  const handleSubmit = (e) =>{}

  return(
    <div className="xl-mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2,1 )}
      className="flex-[0.75] bg-black-100 p8 rounded-2x1">
<p className={styles.sectionSubtext}>Contact me</p>
<h3 className={styles.sectionHeadText}>Contact.</h3>

<form 
ref={formRef}
onSubmit={handleSubmit}
className="mt-12 flex flex-col gap8">
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">
      Sender name
    </span>
    <input 
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Sender name"
    className="bg-tertiary py-4 px-6
     placeholder:text-secondary text-white rounded-1g 
     outlined-none
      border-none font-medium"></input>
  </label>
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">
      Sender email
    </span>
    <input 
    type="text"
    name="name"
    value={form.email}
    onChange={handleChange}
    placeholder="Sender email"
    className="bg-tertiary py-4 px-6
     placeholder:text-secondary text-white rounded-1g 
     outlined-none
      border-none font-medium"></input>
  </label>
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">
     Message
    </span>
    <textarea 
    rows="7"
    name="name"
    value={form.message}
    onChange={handleChange}
    placeholder="Message"
    className="bg-tertiary py-4 px-6
     placeholder:text-secondary text-white rounded-1g 
     outlined-none
      border-none font-medium"></textarea>
  </label>
 <button type="submit"
 className="bg-tertiary py-3 px-8 outline-none w-fit text-white 
 font-bold shadow-md shadow-primary 
 rounded-xl">
  {loading ? 'Sending...' : 'Send'}
 </button>

</form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")