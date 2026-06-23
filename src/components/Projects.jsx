import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/Projects'

const Projects = () => {
    return (
        <div name='projects' className='py-24'>
            <div className='section-pad'>
                <Fade direction='up' triggerOnce>
                    <p className='text-accent font-semibold tracking-widest text-sm uppercase'>Projects</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-textMain mt-2'>Things I've built</h2>
                    <p className='text-textMuted mt-2'>A selection of professional and personal work I'm proud of.</p>
                </Fade>

                <div className='mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <Fade direction='up' triggerOnce cascade damping={0.06}>
                        {projects.map((project) => (
                            <div key={project.id} className='card p-6 flex flex-col hover:border-accent/50 hover:-translate-y-1 duration-300'>
                                {/* Badges */}
                                <div className='flex flex-wrap items-center gap-2 mb-3'>
                                    {project.category && (
                                        <span className={`text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 ${project.category === 'Professional' ? 'bg-accent/15 text-accent border border-accent/30' : 'bg-surfaceAlt text-textMuted border border-line'}`}>
                                            {project.category}
                                        </span>
                                    )}
                                    {project.isPrivate && (
                                        <span className='text-[10px] uppercase tracking-wide rounded-full px-2 py-0.5 bg-surfaceAlt text-textMuted border border-line'>
                                            Private
                                        </span>
                                    )}
                                </div>

                                <h3 className='text-lg font-semibold text-textMain'>{project.name}</h3>
                                <p className='text-textMuted text-xs mt-1'>
                                    {project.date}{project.company ? ` · ${project.company}` : ''}
                                </p>

                                <p className='text-textMuted text-sm leading-relaxed mt-3 flex-grow'>{project.tagline}</p>

                                <div className='flex flex-wrap gap-2 mt-4'>
                                    {project.tech.map((tech) => (
                                        <span key={tech} className='text-[11px] text-textMuted bg-surfaceAlt border border-line rounded px-2 py-0.5'>{tech}</span>
                                    ))}
                                </div>

                                {(project.source || project.demo) && (
                                    <div className='flex gap-3 mt-5'>
                                        {project.source && (
                                            <a href={project.source} target='_blank' rel='noreferrer' className='inline-flex items-center gap-2 text-sm text-textMain hover:text-accent duration-300'>
                                                <FaGithub /> View Code
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target='_blank' rel='noreferrer' className='text-sm text-textMain hover:text-accent duration-300'>
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Projects
