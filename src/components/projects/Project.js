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
            <ProjectCard title="South Indian Sales" imgsrc={project1} desc="An E-commerce site made for the sale of Pickles and household items" isGlobe={true} />
            <ProjectCard title="Elevator Control System" imgsrc={elevator} desc="A Complex Elevator control system designed in C and HiFive Microcontroller" isGlobe={true}/>
            <ProjectCard title="Modified ResNet" imgsrc={Resnet} desc="Modified the ResNet model to under 5 million parameters for image classification in the CIFAR 10 dataset" isGlobe={true}/>
            <ProjectCard title="Placeholder title" imgsrc={placeholder} desc="Project 4 not decided yet" isGlobe={false}/>
        </div>
        
    </section>
  )
}

export default Project