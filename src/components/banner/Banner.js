import React from 'react'
import LeftBanner from './LeftBanner'
import {bannerimg, transparent} from '../../assets'
function Banner() {

    return (
        <section id="home" className="w-full pt-10 pb-20 flex items-center border-b-[1px] font-titleFont border-b-black">
            <LeftBanner/>
            <div className='w-1/2 flex justify-center items-center relative'>
                <img className='w-[500px] h-[680px] z-10' src={transparent} alt="banner image"/>
                <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
            </div>
        </section>
    )
}

export default Banner