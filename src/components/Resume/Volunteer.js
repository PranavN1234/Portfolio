import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Volunteer = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} className='w-full flex flex-col md:flex-row md:gap-10 p-4 md:p-0'>
            <div className="py-12 font-titleFont">
                <p className="text-sm text-designColor tracking-[4px]">Since 2017</p>
                <h2 className="text-3xl md:text-4xl font-bold">Volunteering</h2>
            </div>
            <div className="mt-4 md:mt-6 md:pl-6 w-full flex flex-col gap-6">
                <ResumeCard
                    title="2040 Now Ambassador"
                    subTitle="New York University (Apr 2023)"
                    result="New York"
                    des="As a 2040 Ambassador at NYU, I had the incredible opportunity to contribute to the 2040 Now initiative. My role revolved around event management and coordinating various events, such as the Ethan Brown food event, to promote sustainable food choices and the eco-friendly fashion show, which promoted sustainable clothing."
                />
                <ResumeCard
                    title="Youth Red Cross Member"
                    subTitle="Vellore Institute of Technology (2018-2021)"
                    result="Vellore"
                    des="Registered in YRC as a volunteer to raise awareness on health-related issues like tobacco smoking and road safety."
                />
            </div>
        </motion.div>
    );
};

export default Volunteer;
