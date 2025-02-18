import React from 'react'
import Image from "../images/cards.png"


export const Cards = (props) => {
  return (

    <div>    
    <div className="hover:shadow-xl hover:shadow-[#FF8303] transition-all duration-500 bg-[#1B1B1B] rounded-lg w-100 text-center m-10 py-15 px-15">
        <img class="place-self-center"src={Image} alt=""/>
        <h2 class="text-[#FF8303] leading-12 font-bold text-2xl">{props.title} </h2>
        <p class="text-white pt-4">{props.text} </p>
    </div>

    </div>
  )
}


export default Cards
