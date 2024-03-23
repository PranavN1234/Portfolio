import React from 'react';
import { SiInstagram, SiLinkedin } from 'react-icons/si';
import { handshake } from '../../assets';
import { Link } from 'react-router-dom';

const ContactLeft = () => {
    return (
        <div className="w-full md:w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 md:p-8 rounded-lg shadow-shadowOne">
            <img className="w-full object-cover rounded-lg mb-4" src={handshake} alt="Handshake" />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Pranav Narayan Iyer</h3>
                <p className="text-lg font-normal text-gray-400">Software Engineer</p>
                <p className="text-base text-gray-400 tracking-wide">Brooklyn, NY, New York University Tandon</p>
                <p className="text-base text-gray-400 flex items-center gap-2">Phone: <span className="text-lightText">+1-646-956-9715</span></p>
                <p className="text-base text-gray-400 flex items-center gap-2">Email: <span className="text-lightText">pn2229@nyu.edu</span></p>
            </div>
            <div className="my-2 flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                <div className="flex gap-4">
                    <Link to={"https://www.instagram.com/pranav.dd_/"} target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <SiInstagram />
            </span>
                    </Link>
                    <Link to={"https://www.linkedin.com/in/pranav-iyer-906256170/"} target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <SiLinkedin />
            </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactLeft;
