import React from 'react';

const ResumeCard = ({ title, subTitle, result, des }) => {
    return (
        <div className="w-full flex flex-col md:flex-row md:gap-6 p-4 group">
            <div className="w-full">
                <div className="w-10 h-[6px] bgOpacity mt-4 md:mt-16 relative">
          <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
            <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
          </span>
                </div>
                <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 md:p-6 flex flex-col justify-center gap-4 md:gap-6 shadow-shadowOne">
                    <div className="flex justify-between items-center">
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">{title}</h3>
                            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">{subTitle}</p>
                        </div>
                        <div>
                            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">{result}</p>
                        </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-300 break-words">{des}</p>
                </div>
            </div>
        </div>
    );
};

export default ResumeCard;
