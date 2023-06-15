import React from 'react'
import {SiInstagram, SiLinkedin} from 'react-icons/si'
import {handshake} from '../../assets'
const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
                <img className="w-full h-64 object-cover rounded-lg mb-2" src={handshake} alt="contact image"/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold text-white">Pranav Narayan Iyer </h3>
                    <p className="text-lg font-normal text-gray-400">Software Engineer</p>
                    <p className="text-base text-gray-400 tracking-wide">Brooklyn NY, New York University Tandon</p>
                    <p className="text-base text-gray-400 flex items-center gap-2">Phone: <span className="text-lightText">+1-646-956-9715</span></p>
                    <p className="text-base text-gray-400 flex items-center gap-2">Email: <span className="text-lightText">pn2229@nyu.edu</span></p>

                </div>
                <div className="my-2 flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiInstagram/>
          </span>
          <span className="bannerIcon">
            <SiLinkedin/>
          </span>
        </div>
      </div>
              </div>
  )
}

export default ContactLeft