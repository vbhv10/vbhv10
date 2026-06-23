import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaAws, FaShieldAlt, FaInfinity } from 'react-icons/fa'
import { BsBoxSeam } from 'react-icons/bs'
import { bioData } from '../data/Bio'
import ProfileImage from '../assets/Self2.jpg'

const capabilities = [
    {
        icon: <FaAws />,
        title: 'Cloud Infrastructure',
        desc: 'Design and operate AWS infrastructure with Terraform across multi-account, multi-environment landscapes.',
    },
    {
        icon: <FaInfinity />,
        title: 'GitOps & Continuous Delivery',
        desc: 'ArgoCD and Kargo progressive delivery, automating promotions from development to production.',
    },
    {
        icon: <BsBoxSeam />,
        title: 'Release Engineering',
        desc: 'Automated cross-platform installers and CI/CD pipelines that ship software reliably and repeatably.',
    },
    {
        icon: <FaShieldAlt />,
        title: 'Secrets & Security',
        desc: 'HashiCorp Vault platforms with OIDC auth and zero static credentials across cloud accounts.',
    },
]

const About = () => {
    return (
        <div name='about' className='py-24'>
            <div className='section-pad'>
                <Fade direction='up' triggerOnce>
                    <p className='text-accent font-semibold tracking-widest text-sm uppercase'>About</p>
                    <h2 className='text-3xl md:text-4xl font-bold text-textMain mt-2'>Who I am</h2>
                </Fade>

                <div className='mt-10 grid md:grid-cols-[300px_1fr] gap-10 items-start'>
                    <Fade direction='up' triggerOnce>
                        <div className='relative mx-auto md:mx-0 w-[240px]'>
                            <div className='absolute inset-0 bg-gradient-to-tr from-accentDeep/30 to-sky-500/20 rounded-2xl blur-xl'></div>
                            <img className='relative rounded-2xl border border-line object-cover w-[240px] h-[280px]' src={ProfileImage} alt='Vaibhav Mahajan' />
                        </div>
                    </Fade>

                    <div>
                        <Fade direction='up' triggerOnce cascade damping={0.12}>
                            {bioData.map((bio, index) => (
                                <p key={index} className='text-textMuted leading-relaxed mb-4' dangerouslySetInnerHTML={{ __html: bio.para }}></p>
                            ))}
                        </Fade>
                    </div>
                </div>

                {/* Capability cards */}
                <div className='mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <Fade direction='up' triggerOnce cascade damping={0.1}>
                        {capabilities.map((cap) => (
                            <div key={cap.title} className='card p-6 hover:border-accent/50 hover:-translate-y-1 duration-300'>
                                <div className='text-accent text-3xl mb-4'>{cap.icon}</div>
                                <h3 className='text-textMain font-semibold text-lg mb-2'>{cap.title}</h3>
                                <p className='text-textMuted text-sm leading-relaxed'>{cap.desc}</p>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default About
