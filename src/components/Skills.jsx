import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { skillGroups } from '../data/Skills'

const Skills = () => {
    return (
        <div name='skills' className='py-24 bg-surface/40 border-y border-line'>
            <div className='section-pad'>
                <Fade direction='up' triggerOnce>
                    <p className='text-accent font-semibold tracking-widest text-sm uppercase'>Skills</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-textMain mt-2'>Technologies I work with</h2>
                </Fade>

                <div className='mt-10 space-y-8'>
                    {skillGroups.map((group) => (
                        <div key={group.category}>
                            <h3 className='text-textMuted text-sm uppercase tracking-wider mb-4'>{group.category}</h3>
                            <div className='flex flex-wrap gap-3'>
                                <Fade direction='up' triggerOnce cascade damping={0.06}>
                                    {group.items.map((skill) => (
                                        <a
                                            key={skill.title}
                                            href={skill.url}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='group card px-4 py-3 flex items-center gap-3 hover:border-accent/50 hover:-translate-y-1 duration-300'
                                        >
                                            <img className='w-7 h-7 object-contain' src={skill.img} alt={skill.title} />
                                            <span className='text-sm text-textMain group-hover:text-accent duration-300'>{skill.title}</span>
                                        </a>
                                    ))}
                                </Fade>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
