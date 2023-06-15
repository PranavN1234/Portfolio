import React from 'react'
import ResumeCard from './ResumeCard'
import {motion} from 'framer-motion'
const Experience = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:1}}} className='w-full flex gap-20'> 
    <div className='w-full flex gap-20'>
        <div className="py-12 font-titleFont gap-20">
          <p className="text-sm text-designColor tracking-[4px]">Since 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        <div className="mt-6 lg:mt-14 pl-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-40">
        
          <ResumeCard
          
            title="API Developer Intern"
            subTitle="NYU IT (May 2023-Present)"
            result="New York"
            des="Currently working as an API Developer at NYU IT, I contribute to a dynamic application integrating a Flask backend with MySQL and a ReactJS frontend."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Bank Of America (June 2021 - August 2022)"
            result="Chennai"
            des="I worked on Python and SQL scripts for classifying sensitive information in the Bank application. I queried the bank databases using SQL, while Python helped create utilities for classification and query generation. I conducted monthly scans to identify potential Highly Restricted Classified Information (HRCI). Additionally, I contributed to a Job Scheduler Utility in Python to optimize job allocation based on available server memory. I also assisted in developing a Validation Filter Utility to eliminate false positives and retain True positives and potential Watch Item records in the final Excel workbook. My role encompassed sensitive data classification, database scanning, job scheduling, and data validation using Python and SQL."
          />
        </div>
        </div>
        </motion.div>
  )
}

export default Experience