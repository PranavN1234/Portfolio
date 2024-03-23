import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} className='w-full flex flex-col md:flex-row md:gap-10 p-4 md:p-0'>
            <div className="py-6 md:py-12 w-full">
                <p className="text-sm text-designColor tracking-[4px]">Since 2021</p>
                <h2 className="text-2xl md:text-4xl font-bold mt-2">Work Experience</h2>
            </div>
            <div className="mt-4 md:mt-6 md:pl-6 w-full flex flex-col gap-6">
                <ResumeCard
                    title="API Developer Intern"
                    subTitle="NYU IT (May 2023-Present)"
                    result="New York"
                    des="Currently working as an API Developer at NYU IT, contributing to a dynamic application integrating a Flask backend with MySQL and a ReactJS frontend."
                />
                <ResumeCard
                    title="Software Engineer"
                    subTitle="Bank Of America (June 2021 - August 2022)"
                    result="Chennai"
                    des="Worked on Python and SQL scripts for classifying sensitive information in the Bank application, and contributed to utilities for classification, query generation, and job scheduling."
                />
            </div>
        </motion.div>
    );
};

export default Experience;
