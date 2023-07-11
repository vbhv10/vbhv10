import React from 'react'
import { bioData } from '../data/Bio'
import ProfileImage from "../assets/Self2.jpg"

const About = () => {
  return (
    <div name="about" className='md:min-h-screen'>
      <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-[#C3073F] inline'>About</p>
            </div>
            <div className='max-w-[1000px] w-full sm:flex sm:flex-row sm:justify-center sm:items-center sm:mx-auto gap-2'>
              <div className="hidden sm:block lg:w-[300px] lg:h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden mx-8 sm:mr-8">
                  <img className='object-cover h-[100%] w-[100%]' src={ProfileImage} alt="Profile"/>
              </div>
                {/* Container flexbox for text */}
                <div className='w-full md:max-w-[950px] text-left'>
                    <div className='max-w-[1000px] flex flex-col justify-center h-full sm:mx-8 sm:ml-8'>
                      {bioData.map((bio, index)=>(
                        <p key={index} className='text-[#6a7280] py-4 ' dangerouslySetInnerHTML={{ __html: bio.para }}></p>
                      ))}
                      </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default About