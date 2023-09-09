import React from 'react'
import { dummyimage, myphoto, myimage, logo, logowhite, whiteback} from '../../assets'
import { navLinksdata } from '../../constants'
import { Link } from 'react-scroll'
function Navbar() {
    return (
        <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
            <div>
                <img src={whiteback} alt="my photo" style={{ width: '80px', height: 'auto' }}/>
            </div>
            <div>
                <ul className="flex items-center gap-10">
                    {navLinksdata.map((link)=>(
                        <li id={link._id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300" key={link._id}>
                            <Link activeClass="active" to={link.link} spy={true} smooth={true} offset={-70} duration={500}>{link.title}</Link>
                        </li>
                    ))}
                    <li className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"><a href="https://6zbfn5foz3o72gjprvkoajeila0esjpt.lambda-url.us-east-2.on.aws/">Chatbot</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar