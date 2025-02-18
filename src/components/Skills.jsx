import React from 'react'
import after from '../images/after-effects.png'
import chart from '../images/character-animator.png'
import css from '../images/css3.png' 
import html from '../images/html.png'
import illust from '../images/illustrator.png'
import javascript from '../images/java-script.png'
import photoshop from '../images/photoshop.png'
import php from '../images/php.png'
import postg from '../images/postgre.png'
import premier from '../images/premiere-pro.png'

const Skills = () => {

    const skillImg = [
        {
            img: html,
            title: "HTML"
        },
        {
            img: css,
            title: "CSS"
        },
        {
            img: javascript,
            title: "Javascript"
        },
        {
            img: php,
            title: "PHP"
        },
        {
            img: postg,
            title: "PostgreSQL"
        },
        {
            img: premier,
            title: "Premiere Pro"
        },
        {
            img: chart,
            title: "Chart.js"
        },
        {
            img: after,
            title: "After Effects"
        },
        {
            img: illust,
            title: "Illustrator"
        },
        {
            img: photoshop,
            title: "Photoshop"
        },
    ]    

  return (

    <div>
    <div>

        <h1 class="text-center text-white font-bold text-6xl pt-10">Skills</h1>
        <p class="text-center text-white leading-10 pt-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
    </div>

    <div className="px-90 py-5 ">
    <div className="bg-[#212121] rounded-4xl h-150 grid grid-cols-5 justify-between p-10 ">
    {
                skillImg.map((Skills, index) => (

                <div key={index} className="py-10 place-self-center">
                   <div className="text-center"> 
                    <img className="w-25"src={Skills.img}>
                 </img>
                 <h1 className="pt-5 text-white text-xl text-center"  >{Skills.title}</h1>
                 </div>
                
                </div>
                )
            )
            }

    </div>
    </div>
    </div>
  )
}

export default Skills