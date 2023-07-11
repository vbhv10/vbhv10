import React from 'react'
import { skills } from '../data/Skills'


const Skills = () => {
  return (
    <div name = 'skills' className='text-[#1e3751] md:min-h-screen'>
        <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-[#C3073F] inline'>Skills</p>
                <p className='py-4'>Some of the technologies and tools I've worked with</p>
            </div>
        
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 m-1'>
                {skills.map((skill, index)=>(
                    <div key={index} className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-md'>
                    <a href={skill.url}>
                        <img className='mt-4 w-20 mx-auto' src={skill.img}  alt={skill.title}></img>
                        <p className='my-4'>{skill.title}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills