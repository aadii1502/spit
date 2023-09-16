import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const About2 = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });
  return (
    <div className=' gradient_color'>
    <div className=' text-5xl text-center ml-[350px] py-20 font-bold font-serif  flex justify-center w-[800px] text-white'>
    <p className=' py-2'>Connect and Collaborate: Empowering Projects on Solana Crowdfunding to Unite Friends and Create Shared Experiences</p>
    </div>
      <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 100 }}
       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
       transition={{ duration: 1 }}
      >
      <div className=' mx-[370px] '>
        <img className=' absolute mt-28 h-[70px]' src="https://sol-funding.vercel.app/people-01.png" alt="" />
        </div>
        <img className=' absolute mx-[720px] mt-64 h-[70px]' src="https://sol-funding.vercel.app/people-02.png" alt="" />
        <img className=' absolute mx-[1130px] h-[70px] mt-[375px]' src="https://sol-funding.vercel.app/people-03.png" alt="" />
        <img className=' py-10 w-[1300px] pl-64 flex justify-center rounded-lg bg-blend-lighten' src="https://sol-funding.vercel.app/map.png" alt="" />
        
      </motion.div>
   
    </div>
  )
}

export default About2
