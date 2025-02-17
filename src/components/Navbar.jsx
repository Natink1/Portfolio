import React, {useState} from 'react'
import { CiMenuBurger } from "react-icons/ci"
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const items = [
        {id:1, text: "Home"},
        { id:2, text: "Services"},
        {id:3, text: "About Me"},
        {id:4, text: "My Skills"},
        {id:5, text: "Works"},
        { id:6, text: "Contact Me"},
    ];
    return(
        <div>
            <div class="container mx-auto hidden md:flex justify-between items-center py-6">
                <div class="text-xl font-bold flex items-center gap-1">
                    <span class="text-orange-400">Portfolio</span>
                </div>
                <div>
                    <ul class="hidden md:flex items-center space-x-6  list-none lg:text-lg md:text-base text-white">
                        
                        {items.map(({id, text}) => ( 
                        
                        <li class="hover:text-orange-400 cursor-pointer"    
                            key={id}>{text}</li>
                            ))}
                            </ul>
                </div>
            <span></span>
        </div>

        <div class="flex md:hidden justify-between">
            <div>
                    {/* <div
                  
                    class="bg-white w-2/3 h-screen text-black fixed z-10"> 
                    <div   onClick={() => setMenu((prev) => !prev)} class= "px-7 py-5 ">
                    {menu ? <IoMdClose size={30} /> : <CiMenuBurger size={30} />}
                    </div>
                    {menu && (
                        <div class="flex flex-col items-center justify-center">
                        <ul class="space-y-4 font-bold text-black">                     
                        {items.map(({ id, text}) => ( 
                        <li class="hover:text-orange-400 cursor-pointer"
                        key={id}
                            
                            >{text}</li>
                            ))}
                        </ul>
                        </div>
                    )}
                    </div> */}
            </div>
        </div>
        </div>




        // <nav class="text-white py-5 md:px-16 lg:px-24 flex" >
        //     <div class="container py-2 text-2x1 font-bold w-30">Portfolio</div>
        // <div class="container py-2 flex justify-center">
        //         <div className='space-x-10 justify-between'>
                  
        //             <a href="#home" class="hover:text-orange-400 ">Home</a>
        //             <a href="#Services" class="hover:text-orange-400">Services</a>
        //             <a href="#Aboutme" class="hover:text-orange-400">About Me</a>
        //             <a href="#My Skills" class="hover:text-orange-400">My Skills</a>
        //             <a href="#Works" class="hover:text-orange-400">Works</a>
        //             <a href="#Contactme" class="hover:text-orange-400">Contact Me</a>
                    
        //         </div>

        //     </div>
        // </nav>

        
        
    )
}

export default Navbar