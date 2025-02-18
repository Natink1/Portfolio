import React from "react"
import { motion } from "framer-motion"

const Hero = () => {

return(
        <div class="py-20 px-45 flex justify-between" >
            <motion.div
            initial={{opacity:0, x:-100}}
            animate={{opacity:1, x:0}}
            transition={{
                delay: 0.3,
                duration: 0.8
            }}
            class="pt-50 container mx-auto "  >
            <h1 class="text-orange-400 text-4xl md:text-5xl font-bold" >Hi, I am Natnael Deribe</h1> 
            <h2 class="text-white leading-15 text-2xl md:text-3xl" >IT Support Specialist &
             Motion Graphics Designer</h2>   
             <button class=" mt-10 bg-orange-500 text-white w-35 h-12 rounded-lg transition-all duration-300 hover:border border-orange-600 hover:bg-transparent hover:drop-shadow-[0_0_3px_rgba(255,145,1,1)]">Email Me</button>
             </motion.div>

            <div >
                <motion.img
                initial={{opacity:0, scale:0}}
                animate={{opacity:1, scale:1}}
                transition={{
                    delay: 0.2,
                    duration: 0.7
                }} 
                src="/src/images/Image.png" class="mx-auto w-100 md:w-160 ld:w-200 opacity-15 transition-all ease-linear hover:opacity-100 focus:opacity-100" />
                </div>
        </div>  
    )
}

export default Hero