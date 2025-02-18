import React, {useState} from 'react'
import { CiMenuBurger } from "react-icons/ci"
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react"

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const items = [
        {id:1, text: "Home"},
        {id:2, text: "Services"},
        {id:3, text: "About Me"},
        {id:4, text: "My Skills"},
        {id:5, text: "Works"},
        {id:6, text: "Contact Me"},
    ];
    
    return(

        <div>
            <div className="container mx-auto md:flex justify-between items-center py-6">
                <div className="text-xl font-bold flex items-center gap-1">
                    <span className="text-orange-400">Portfolio</span>
                </div>
                <div>
                    <ul className="md:flex items-center space-x-6 lg:text-lg md:text-base text-white">

                        {items.map(({ id, text }) => (

                            <li className="hover:text-orange-400 text-xl"
                                key={id}>{text}</li>
                        ))}
                    </ul>
                </div>
                <span></span>
            </div>

{/* 
        <div className="flex md:hidden justify-between">
            <div>
                    <div
                  
                    className="bg-white w-2/3 h-screen text-black fixed z-10"> 
                    <div   onClick={() => setMenu((prev) => !prev)} className= "px-7 py-5 ">
                    {menu ? <IoMdClose size={30} /> : <CiMenuBurger size={30} />}
                    </div>
                    {menu && (
                        <div className="flex flex-col items-center justify-center">
                        <ul className="space-y-4 font-bold text-black">                     
                        {items.map(({ id, text}) => ( 
                        <li className="hover:text-orange-400 cursor-pointer"
                        key={id}
                            
                            >{text}</li>
                            ))}
                        </ul>
                        </div>
                    )}
                    </div>
            </div>
        </div> */}
        </div>




        // <nav className="text-white py-5 md:px-16 lg:px-24 flex" >
        //     <div className="container py-2 text-2x1 font-bold w-30">Portfolio</div>
        // <div className="container py-2 flex justify-center">
        //         <div classNameName='space-x-10 justify-between'>
                  
        //             <a href="#home" className="hover:text-orange-400 ">Home</a>
        //             <a href="#Services" className="hover:text-orange-400">Services</a>
        //             <a href="#Aboutme" className="hover:text-orange-400">About Me</a>
        //             <a href="#My Skills" className="hover:text-orange-400">My Skills</a>
        //             <a href="#Works" className="hover:text-orange-400">Works</a>
        //             <a href="#Contactme" className="hover:text-orange-400">Contact Me</a>
                    
        //         </div>

        //     </div>
        // </nav>

        
        
    )
}

export default Navbar