import React from 'react'
import { projects } from '../data/Projects'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:min-h-screen text-[#1e3751]'>
      <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#C3073F]'>
            Projects
          </p>
          <p className='py-4'>Projects that I am proud of</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
                
            {/* Grid Item */}
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="shadow-md shadow-[#040c16] group container rounded-md 
                            flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto"
                >
                    {/* Div for content */}
                    <div>
                        <h3 className="pt-3 text-2xl font-bold text-[#1e3751] ">
                            {project.name}
                        </h3>
                        <p className='text-[#6a7280]'>
                            {project.date}
                        </p>
                        {/* Div for Tech Stack */}
                        <div className='pt-1 flex flex-wrap justify-center gap-0 items-center'>
                            {project.tech.map((tech)=>(
                                <p className='text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white hover:cursor-pointer'>{tech}</p>
                            ))}
                        </div>
                        <p className='py-2 text-[#6a7280]'>
                            {project.tagline}
                        </p>
                    </div>

                    {/* Div for buttons */}
                    <div className="flex text-center ">
                        {/* eslint-disable-next-line */}
                        {project.source && (
                        <a href={project.source} target="_blank" rel="noreferrer">
                            <button
                            className="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">
                            Code
                        </button>
                        </a>
                        )}
                        {/* eslint-disable-next-line */}
                        {project.demo && (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                            <button
                            className="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">
                            Demo
                        </button>
                        </a>
                        )}
                    </div>
                </div>
            ))}


        </div>
      </div>
    </div>
  )
}

export default Projects