import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {FaGithubAlt, FaInstagram, FaLinkedin, FaJava} from 'react-icons/fa'
import {DiJava} from 'react-icons/di'
import {SiPython, SiReact, SiGit, SiMysql,SiFlask} from 'react-icons/si'
function LeftBanner() {
    const [text] = useTypewriter({
        words: ["Computer Engineering Graduate at NYU", "an API-Developer at NYU IT", "Ex Software Engineer at Bank of America", "a Full Stack Developer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
  return (
    <div className='w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h1 className="text-6xl font-bold text-white">Hello, My name is {" "}
                    <span className="text-nameColor capitalize">Pranav Narayan Iyer</span>
                </h1>
                <h2 className='text-2xl font-bold text-white'><span>{text}</span><Cursor cursorColor='red'/></h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                I am a Computer Engineering graduate student at NYU. I enjoy programming and web development, with experience in Python, React, and SQL. I also contribute to sustainability and health awareness initiatives like NYU 2040 Now and Youth Red Cross
                </p>
                <div className='flex flex-col xl:flex-row gap-10 lgl:gap-0 justify-between'>
                <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    Find me in
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'><FaInstagram/></span>
    
                    <span className='bannerIcon'><FaGithubAlt/></span>

                    <span className='bannerIcon'><FaLinkedin/></span>
                </div>
                </div>
                <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    Skills
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'><SiPython/></span>
                    <span className='bannerIcon'><SiReact/></span>
                    <span className='bannerIcon'><SiGit/></span>
                    <span className='bannerIcon'><SiMysql/></span>
                    <span className='bannerIcon'><SiFlask/></span>
                </div>
                </div>
                </div>
                
            </div>
            </div>
  )
}

export default LeftBanner