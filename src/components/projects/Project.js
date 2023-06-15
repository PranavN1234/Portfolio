import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {project1, Resnet, elevator, placeholder} from '../../assets/index'

const Project = () => {
  return (
    <section id="projects" className="w-full py-20 flex flex-col items-center border-b-[1px] border-b-black">
        <div className="flex items-center justify-center mb-8">
            <Title line="Projects"/>
        </div>

        <div className='grid grid-cols-2 gap-14 w-full max-w-screen-lg'>
        <ProjectCard title="Portfolio" imgsrc={placeholder} desc="Created and deployed a complex portfolio website with ReactJS and Tailwind CSS" isGlobe={true} link="https://pranavn1234.github.io/Portfolio"/>
            <ProjectCard title="South Indian Sales" imgsrc={project1} desc="An E-commerce site made for the sale of Pickles and household items" isGlobe={false} link=""/>
            <ProjectCard title="Elevator Control System" imgsrc={elevator} desc="A Complex Elevator control system designed in C and HiFive Microcontroller" isGlobe={false} link=""/>
            <ProjectCard title="Modified ResNet" imgsrc={Resnet} desc="Modified the ResNet model to under 5 million parameters for image classification in the CIFAR 10 dataset" isGlobe={false} link=""/>
            
        </div>
        
    </section>
  )
}

export default Project