import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { experience } from '../data/Experience'

const Experience = () => {
    return (
        <div name='experience' className='py-24 bg-surface/40 border-y border-line'>
            <div className='section-pad'>
                <Fade direction='up' triggerOnce>
                    <p className='text-accent font-semibold tracking-widest text-sm uppercase'>Experience</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-textMain mt-2'>Where I've worked</h2>
                </Fade>

                <div className='mt-12 relative pl-8'>
                    {/* Vertical rail */}
                    <div className='absolute left-[7px] top-2 bottom-2 w-px bg-line'></div>

                    <div className='space-y-8'>
                        {experience.map((job) => (
                            <Fade key={job.id} direction='up' triggerOnce>
                                <div className='relative'>
                                    {/* Dot */}
                                    <div className='absolute -left-8 top-3 w-4 h-4 rounded-full bg-accent border-4 border-base'></div>

                                    <div className='card p-6 hover:border-accent/50 duration-300'>
                                        <div className='flex flex-wrap items-center justify-between gap-2'>
                                            <h3 className='text-lg font-semibold text-textMain'>
                                                {job.role} <span className='text-accent'>· {job.company}</span>
                                            </h3>
                                            <span className='chip text-accent border-accent/30 bg-accent/10'>{job.period}</span>
                                        </div>
                                        <p className='text-textMuted text-xs mt-1'>{job.location}</p>
                                        <ul className='mt-4 space-y-2'>
                                            {job.points.map((point, i) => (
                                                <li key={i} className='text-textMuted text-sm leading-relaxed flex gap-2'>
                                                    <span className='text-accent mt-1'>▹</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
