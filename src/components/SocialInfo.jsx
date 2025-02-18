import React from 'react'
const SocialInfo = (props) => {

  return (
    <div className=" pt-8 text-center">
        <img className="place-self-center w-15" src={props.IMG}/>
        <h3 className="text-[#F0E3CA] text-xl pt-3">{props.title}</h3>
        <p className="text-white pt-2">{props.text}</p>
    </div>
  )
}

export default SocialInfo