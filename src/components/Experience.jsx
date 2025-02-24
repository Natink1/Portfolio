import React from 'react'

const Experience = () => {
  return (
    
    <div id="Experience" className="px-50 flex flex-col justify-center">

      <div>
        <h1 className="text-center text-white font-bold text-6xl pt-15">Experience</h1>
        <p className="text-center text-white leading-10 pt-5 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>
      </div>

      <div className="flex justify-between px-30 py-20">
        <div>
            <h1 className="text-white text-4xl font-bold">Droga Pharma PLC</h1>
            <p className="text-[#FF8303]"> July 2022 - July 2024</p>        
      </div>
      <div className='w-150'>
        <h1 className="text-white text-4xl font-bold">Information Technology Officer</h1>
          <p className="text-[#FF8303]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>    
      </div>
      </div>
      <hr className="text-white place-self-center w-full"></hr>

      <div className="flex justify-between px-30 py-20">
        <div>
            <h1 className="text-white text-4xl font-bold">Droga Consulting PLC</h1>
            <p className="text-[#FF8303]"> July 2024 - Present</p>        
      </div>
      <div className='w-150'>
        <h1 className="text-white text-4xl font-bold">Information Technology Officer</h1>
          <p className="text-[#FF8303]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p>    
      </div>
      </div>
        
    </div>
  )
}

export default Experience