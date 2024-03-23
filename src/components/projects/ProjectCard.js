import React from 'react';
import { BsGithub, BsFillBookFill } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, imgsrc, desc, isGlobe, isResearch, gitlink, link }) => {
    return (
        <div className="w-full p-4 h-auto rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group transition-colors duration-500">
            <div className="w-full overflow-hidden rounded-t-lg">
                <img className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer" src={imgsrc} alt={title} />
            </div>

            <div className="flex flex-col gap-4 mt-4">
                <h3 className='text-lg font-semibold text-designColor'>{title}</h3>
                <p className="text-sm text-gray-400">{desc}</p>

                <div className="flex gap-2 mt-2">
                    {isResearch && (
                        <a href={gitlink} target="_blank" rel="noopener noreferrer">
                            <span className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-full bg-black text-gray-400 hover:text-designColor transition-colors duration-300 cursor-pointer">
                                <BsFillBookFill />
                            </span>
                        </a>
                    )}
                    {!isResearch && (
                        <a href={gitlink} target="_blank" rel="noopener noreferrer">
                            <span className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-full bg-black text-gray-400 hover:text-designColor transition-colors duration-300 cursor-pointer">
                                <BsGithub />
                            </span>
                        </a>
                    )}
                    {!isResearch && isGlobe && (
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <span className="inline-flex items-center justify-center w-10 h-10 text-lg rounded-full bg-black text-gray-400 hover:text-designColor transition-colors duration-300 cursor-pointer">
                                <FaGlobe />
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
