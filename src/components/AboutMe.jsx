import React from 'react'
import SocialInfo from './SocialInfo'
import Email from '../images/email.png'
import Phone from '../images/phone-call.png'
import Twitter from '../images/twitter.png'
import { title } from 'motion/react-client'

const AboutMe = () => {


  return (
    <div className=" flex justify-center flex-col items-center">
    <div className="text-white w-280 text-center pt-10 pb-10">
        <h1 className="text-6xl  font-bold">About Me</h1>

        <p className="pt-10 text-justify text-2xl font-light"
        styles="font-family: 'League Spartan', sans-serif;"
        > I received my diploma in hardware and networking from Addis Ababa Tegbareid Polytechnic College. 
        During my studies, I installed and designed network structures, maintained computers, and troubleshooted issues.
         and for creating an entrance security system with my team, I received a gold medal. 
         I began my studies at Addis Abeba University after graduating with a bachelor’s degree in computer science.
          and I have been employed as an IT officer for Droga Pharma for the past 1.5 years.
          I can troubleshoot any computer issues and solve problems. Blender 3D animation, Adobe After Effects, 
        Adobe Premier Pro, Adobe Photoshop, Adobe Illustrator, and other editing software are some of my other skills.
         and I can program a little bit.</p>

              </div>
              <div className="flex justify-center gap-50">
        <SocialInfo IMG={Email} title="Email Address" text="Naitnk4825@gmail.com"/>
        <SocialInfo IMG={Twitter} title="Twitter" text="Naitnk4825@gmail.com"/>
        <SocialInfo IMG={Phone} title="Phone" text="+251 924114825"/>
    </div>
    </div>
    
  )
}

export default AboutMe