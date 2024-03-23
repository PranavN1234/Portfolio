import React from 'react';
import Title from '../layouts/Title';
import ProjectCard from '../projects/ProjectCard';
import { agile, ego, vm, handwritten } from '../../assets/index';

const Publications = () => {
    return (
        <section id="research" className="w-full py-10 flex flex-col items-center border-b-[1px] border-b-black">
            <div className="flex items-center justify-center mb-6">
                <Title line="Publications"/>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-screen-lg px-4 md:px-0'>
                <ProjectCard title="XPS-MoSCoW: A Prioritization-Based Hybrid Agile Model of SCRUM and Extreme Programming(ACM)" gitlink="https://dl.acm.org/doi/abs/10.4018/IJSI.297989" imgsrc={agile} desc="This paper presents a hybrid model for software development that combines the strengths of the SCRUM and Extreme programming models. By analyzing existing agile models, we identified that the SCRUM model focuses on management while Extreme programming emphasizes engineering practices. However, neither model effectively balances both aspects. Our proposed XPS-MoSCoW Hybrid programming model integrates features from both models and prioritizes tasks using MoSCoW prioritization rules. Through implementation in a startup, our hybrid model has demonstrated superior performance compared to static models." isResearch={true}/>
                <ProjectCard title="Egocentric Analysis of GitHub User Network(IEEE)" gitlink="https://ieeexplore.ieee.org/document/9456183" imgsrc={ego} desc="This project aims to address the challenge of mapping influence in social networks with a focus on the GitHub application. With the exponential growth of data in social networks, it has become crucial to identify the most influential members and understand their impact and connections. Existing users often struggle to find relevant users to follow or engage with, hindering their social presence. To address this, we propose a technique that maps prominent users, allowing for categorization and identification of subgroups with meaningful connections. By leveraging the GitHub API, we extract member data and employ the page rank algorithm to identify strong egos and their alters. Ultimately, we utilize these main egos to recommend new followers based on clustering techniques." isResearch={true}/>
                <ProjectCard title="Finding the Optimal Virtual Machine Setup for Nested Virtualization(IEEE)" gitlink="https://ieeexplore.ieee.org/document/9579665" imgsrc={vm} desc="This paper presents a comparative analysis of nested virtualization between Oracle's VirtualBox and VMware's Workstation. By setting up virtual machines on both platforms and measuring performance, we determined which hypervisor is better suited for nested virtualization tasks." isResearch={true}/>
                <ProjectCard title="One Shot Verification of Handwritten Signatures using Siamese Networks(IEEE)" gitlink="https://ieeexplore.ieee.org/document/9697248" imgsrc={handwritten} desc="Our paper introduces an efficient offline signature verification method that automates the process of validating handwritten signatures on official documents, ensuring authenticity and detecting forgery. By using a one-shot learning approach with a Siamese network, our solution achieves high accuracy while minimizing time, energy, and human error in the verification process." isResearch={true}/>
            </div>
        </section>
    );
};

export default Publications;
