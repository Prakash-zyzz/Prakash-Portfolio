import React from 'react'
import Workitems from "./Workitems"

const data = [
    {
        year:'Present',
        title:"Process Associate",
        duration:("Amazon"),
        details:
       " Monitoring the competitors by performing mapping using Electron Mapping Tool and Achieving Daily target with 100% Accuracy.Performing mapping with 100% quality and maintaining Accuracy and Mapping the given ASIN by following the guidelines for different products gl."
    },
    {
        year:'2021-2022',
        title:"Tooling Engineer",
        duration:("Formoplastic Controls Pvt Ltd"),
        details:
       " Read technical drawings and set up the machines in accordance with these blueprints and Use computer software to model cutting paths and program machines accordingly.Consider tools required to cut particular materials and program machines accordingly and Perform quality assurance tests to ensure products meet design specifications."
    }
]

const datas=[
    {
        year:'2023',
        title:"The Web Developer Bootcamp By Colt Steele",
        duration:"Udemy",
        details:
       " 'The Web Developer Bootcamp' by Colt Steele is a highly regarded and comprehensive web development course. It is aimed at beginners and intermediate learners who want to gain practical skills in front-end and back-end web development. Throughout the course, students build several real-world projects to apply the concepts they learn, ensuring hands-on experience with web development."
    },
    {
        year:'2022',
        title:"Front End Developement",
        duration:"Fita Academy",
        details:
       " The FITA Academy Front-End Development Course is designed to equip students with the essential skills and knowledge needed to become proficient front-end developers. The course aims to provide a comprehensive understanding of web technologies and techniques required to build visually appealing and interactive user interfaces for websites and web applications."

       
    }
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] mx-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#00172D] py-2'>Work</h1>
        {data.map((item,idx)=>(
            <Workitems
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
             />
        ))}

        <h1 className='text-4xl font-bold text-center text-[#00172D] py-2'>Certifications</h1>
        {datas.map((item,idx)=>(
            <Workitems
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
             />
        ))}
    </div>
  )
}

export default Work