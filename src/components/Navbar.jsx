
import React from 'react'

const Navbar = () => {
    
    return(
        <nav class="text-white py-5 md:px-16 lg:px-24 flex" >
            <div class="container py-2 text-2x1 font-bold w-30">Portfolio</div>
        <div class="container py-2 flex justify-center">
                <div className='space-x-6'>
                    <a href="#home" class="hover:text-orange-400 ">Home</a>
                    <a href="#Services" class="hover:text-orange-400">Services</a>
                    <a href="#Aboutme" class="hover:text-orange-400">About Me</a>
                    <a href="#My Skills" class="hover:text-orange-400">My Skills</a>
                    <a href="#Works" class="hover:text-orange-400">Works</a>
                    <a href="#Contactme" class="hover:text-orange-400">Contact Me</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar