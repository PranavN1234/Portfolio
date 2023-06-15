import React from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Experience from './Experience'
import Volunteer from './Volunteer'


const Resume = () => {
  const [edData, setEdData] = React.useState(true)
  const [expData, setExpData] = React.useState(false)
  const [VolData, setVolData] = React.useState(false)
  return (
    <section id="resume" className="w-full py-20 flex flex-col items-center border-b-[1px] border-b-black">
        <div className="flex items-center justify-center mb-8">

            <Title line="Resume"/>
        
        </div>

        <div>
  <ul className="w-full grid grid-cols-3 gap-12">
    <li onClick={()=>{
        setEdData(true);
        setExpData(false);
        setVolData(false);
    }} className={`${
        edData
          ? "border-red rounded-lg"
          : "border-transparent"
      } resumeLi`}>Education</li>
    <li onClick={()=>{
        setEdData(false);
        setExpData(true);
        setVolData(false);
    }} className={`${
        expData
          ? "border-designColor rounded-lg"
          : "border-transparent"
      } resumeLi`}>Experience</li>
    <li onClick={()=>{
        setEdData(false);
        setExpData(false);
        setVolData(true);
    }} className={`${
        VolData
          ? "border-designColor rounded-lg"
          : "border-transparent"
      } resumeLi`}>Volunteering</li>
  </ul>
</div>

        {edData && <Education/>}
        {expData && <Experience/>}
        {VolData && <Volunteer/>}
        
    </section>
  )
}

export default Resume