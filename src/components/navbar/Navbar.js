import React, { useState } from 'react';
import { navLinksdata } from '../../constants';
import { Link } from 'react-scroll';
import { dummyimage, myphoto, myimage, logo, logowhite, whiteback } from '../../assets';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4 md:px-0">
            <div>
                <img src={whiteback} alt="my photo" style={{ width: '80px', height: 'auto' }}/>
            </div>
            <div className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <div className={`absolute top-24 left-0 w-full bg-bodyColor shadow-md py-4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block md:static md:bg-transparent md:shadow-none`}>
                <ul className="flex flex-col md:flex-row items-center gap-10 md:gap-10 px-4">
                    {navLinksdata.map((link) => (
                        <li id={link._id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={link._id}>
                            <Link activeClass="active" to={link.link} spy={true} smooth={true} offset={-70} duration={500} onClick={() => setIsMobileMenuOpen(false)}>{link.title}</Link>
                        </li>
                    ))}
                    <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                        <a href="https://6zbfn5foz3o72gjprvkoajeila0esjpt.lambda-url.us-east-2.on.aws/">Chatbot</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
