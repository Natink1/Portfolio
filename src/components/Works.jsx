import React from 'react';

const Works = () => {
  return (

    <div id="Works" className=" flex flex-col items-center p-8">
      <h1 className="text-white text-5xl font-bold mb-8">Works</h1>
      <div className="grid grid-cols-3 gap-8">

        <div className="bg-[#eee] rounded-lg shadow-md p-6 flex items-center justify-center text-center 
                     row-span-2 relative overflow-hidden transition transform duration-200 hover:scale-105">
          <p className="text-[#999]">Content 1 (Spans 2 rows)</p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div> {/* Gradient overlay */}
        </div>

        <div className="bg-[#eee] rounded-lg shadow-md p-6 flex items-center justify-center text-center 
                     relative overflow-hidden transition transform duration-200 hover:scale-105">
          <p className="text-[#999]">Content 2</p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div> {/* Gradient overlay */}
        </div>


        <div className="bg-[#eee] rounded-lg shadow-md p-6 flex items-center justify-center text-center 
                     relative overflow-hidden transition transform duration-200 hover:scale-105">
          <p className="text-[#999]">Content 3</p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div> {/* Gradient overlay */}
        </div>

        <div className="bg-[#eee] rounded-lg shadow-md p-6 flex items-center justify-center text-center 
                     col-span-2 relative overflow-hidden transition transform duration-200 hover:scale-105">
          <p className="text-[#999]">Content 4 (Spans 2 columns)</p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div> {/* Gradient overlay */}
        </div>
        
        <div className="bg-[#eee] rounded-lg shadow-md p-6 flex items-center justify-center text-center 
                     relative overflow-hidden transition transform duration-200 hover:scale-105">
          <p className="text-[#999]">Content 5</p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div> {/* Gradient overlay */}
        </div>
      </div>
    </div>
  );
};


export default Works;