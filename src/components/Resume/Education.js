import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} className='w-full flex flex-col md:flex-row md:gap-10 p-4 md:p-0'>
            <div className="py-6 md:py-12 w-full">
                <p className="text-sm text-designColor tracking-[4px]">Since 2013</p>
                <h2 className="text-2xl md:text-4xl font-bold mt-2">Education</h2>
            </div>
            <div className="mt-4 md:mt-6 md:pl-6 w-full flex flex-col gap-6">
                <ResumeCard
                    title="MS in Computer Engineering"
                    subTitle="New York University, Tandon School of Engineering (2022-Present)"
                    result="3.95/4.00"
                    des="Currently pursuing my Masters in Computer Engineering with courses such as Data Structures and Algorithms, Machine Learning and Computer Networks"
                />
                <ResumeCard
                    title="B.Tech - Computer Science & Engineering"
                    subTitle="Vellore Institute of Technology (2017 - 2021)"
                    result="8.79/10"
                    des="Completed my Bachelors in Computer Science and Engineering and secured Merit award Certificates in my 3rd and 4th year for the same"
                />
                <ResumeCard
                    title="Secondary School Education"
                    subTitle="Indian School Muscat (2013-2017)"
                    result="94%"
                    des="Higher Education with subjects like Physics, Chemistry, Mathematics, Computer Science and English. Scored a 94% in the CBSE Board Examinations, and received a gold medal from my Institution for the same."
                />
            </div>
        </motion.div>
    );
};

export default Education;
