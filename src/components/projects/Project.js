import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import {project1, Resnet, elevator, farmer, portfolio, chess, scorepred, eatalone, nba, leya, partselect} from '../../assets/index'

const Project = () => {
  return (
      <section id="projects" className="w-full py-10 flex flex-col items-center border-b-[1px] border-b-black">
          <div className="flex items-center justify-center mb-6">
            <Title line="Projects"/>
        </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-screen-lg px-4 md:px-0'>
          <ProjectCard title="Leya" imgsrc={leya} desc="AI coding assistant which can directly be ported into the terminal and be used to query complex Git repositories" isGlobe={false} gitlink="https://github.com/PranavN1234/Leya" link="https://pypi.org/project/leya/"/>
          <ProjectCard title="Farmers Market" imgsrc={partselect} desc="An RAG(Retrieval Augmented generation) based Chrome extension that allows users to query the partselect website for information" isGlobe={false} gitlink="https://github.com/PranavN1234/case-study" link=""/>
            <ProjectCard title="Portfolio" imgsrc={portfolio} desc="Created and deployed a complex portfolio website with ReactJS and Tailwind CSS. The website comes with a personal Chatbot made using OpenAI" isGlobe={true} gitlink="https://github.com/PranavN1234/Portfolio" link="https://pranavn1234.github.io/Portfolio"/>
            <ProjectCard title="NBA Stat Visualizer" imgsrc={nba} desc="
The NBA dataset visualizer is a Java project that processes and visualizes 20 years of NBA match data. It uses Java technologies like Spring Batch and JPA for backend processing, and ReactJS for the frontend UI. The application is containerized using Docker for easy deployment." isGlobe={false} gitlink="https://github.com/PranavN1234/nbadashboardjava"/>
              <ProjectCard title="South Indian Sales" imgsrc={project1} desc="An E-commerce site made using ReactJs and Firebase for the sale of Pickles and household items" isGlobe={false} gitlink="https://github.com/PranavN1234/PallakadSales" link=""/>
              <ProjectCard title="Don't Eat Alone" imgsrc={eatalone} desc="NYU 2023 Hackathon winning project, an application that allows users to find and meet people over lunch based on reference, Application uses live chat and presence feature using SignalR. Application made using .Net and Angular Js." isGlobe={false} gitlink="https://github.com/PranavN1234/donteatalone" link=""/>
            <ProjectCard title="NYU Fantasy" imgsrc={scorepred} desc="An app that allows you to play with friends and predict scores with friends and win trophies. It was made on Django and ReactJS" isGlobe={false} gitlink="https://github.com/PranavN1234/ScorePredictor-API" link=""/>
            <ProjectCard title="Pay to Play" imgsrc={chess} desc="A React Native application in TypeScript that illustrates the use of paywalls" isGlobe={false} gitlink="https://github.com/PranavN1234/PlayWithMe/tree/main" link=""/>
            <ProjectCard title="Elevator Control System" imgsrc={elevator} desc="A Complex Elevator control system designed in C and HiFive Microcontroller" isGlobe={false} gitlink="https://github.com/PranavN1234/Elevator-Control-System" link=""/>
            <ProjectCard title="Modified ResNet" imgsrc={Resnet} desc="Modified the ResNet model to under 5 million parameters for image classification in the CIFAR 10 dataset" gitlink="https://github.com/PranavN1234/Modified-ResNet" isGlobe={false} link=""/>
            <ProjectCard title="Farmers Market" imgsrc={farmer} desc="A Farmers Market portal that aims to eliminate the middleman, made in PHP and SQL" isGlobe={false} gitlink="https://github.com/PranavN1234/Farmers-Market" link=""/>



            
        </div>
        
    </section>
  )
}

export default Project