import React from 'react';
import {motion } from "framer-motion"
const ContactForm = () => {
  return (

    <div id="Contactme" className=" min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <div className="rounded-lg shadow-md p-8 w-250">
        <h2 className="text-5xl font-bold text-white mb-6 text-center">Get in touch</h2> {/* Title */}

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4"> {/* Grid for name fields */}
            <div>
              <label htmlFor="firstName" className="block text-white text-sm text-xl">Name</label>
              <input type="text" id="firstName" className="mt-1 p-2 w-full  rounded-md bg-[#333] text-white focus: focus:border-indigo-500" />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-white text-sm text-xl">Last name</label>
              <input type="text" id="lastName" className="mt-1 p-2 w-full border-[#ffffffc2] rounded-md bg-[#333] text-white focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-white text-sm text-xl">Email</label>
            <input type="email" id="email" className="mt-1 p-2 w-full  border-[#ffffffc2]rounded-md bg-[#333] text-white focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white text-sm text-xl">Phone number</label>
            <input type="tel" id="phone" className="mt-1 p-2 w-full  rounded-md bg-[#333] text-white focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          <div>
            <label htmlFor="message" className="block text-white text-sm text-xl">Message</label>
            <textarea id="message" rows="4" className="mt-1 p-2 w-full  rounded-md bg-[#333] text-white focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>

          <div className="text-center"> {/* Center the button */}
            <button type="submit" className="bg-[#f05a28] hover:bg-[#e44814] text-white font-bold py-2 px-4 rounded"> {/* Orange button */}
              Submit now
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-white text-sm">&copy; Natink 2025</p>
      </div>
    </div>
  );
};

export default ContactForm;