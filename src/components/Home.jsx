import React from 'react'
import { BsDownload } from 'react-icons/bs'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { Fade } from 'react-awesome-reveal'
import ProfileImage from '../assets/Self.png'

const highlights = [
    'CKA Certified',
    'Kubernetes / EKS',
    'GitOps & Continuous Delivery',
    'Infrastructure as Code',
    'AWS · Azure · GCP',
    'CI/CD & Automation',
]

const Home = () => {
    return (
        <div name='home' className='relative min-h-screen flex items-center overflow-hidden pt-[70px]'>
            {/* Background flourishes */}
            <div className='absolute inset-0 grid-bg opacity-40'></div>
            <div className='absolute -top-32 -left-32 w-[420px] h-[420px] bg-accentDeep/20 rounded-full blur-3xl animate-glow'></div>
            <div className='absolute bottom-0 right-0 w-[380px] h-[380px] bg-sky-500/10 rounded-full blur-3xl animate-glow'></div>

            <div className='section-pad relative w-full grid md:grid-cols-2 gap-10 items-center'>
                {/* Text */}
                <div className='order-2 md:order-1'>
                    <Fade direction='up' triggerOnce cascade damping={0.1}>
                        <span className='inline-flex items-center gap-2 chip text-accent border-accent/30 bg-accent/10 mb-5'>
                            <span className='w-2 h-2 rounded-full bg-accent animate-pulse'></span>
                            Available for new opportunities
                        </span>
                        <h1 className='text-4xl md:text-6xl font-bold text-textMain leading-tight'>
                            Vaibhav Mahajan
                        </h1>
                        <h2 className='text-xl md:text-2xl font-semibold text-textMuted mt-3'>
                            DevOps &amp; Platform Engineer
                        </h2>
                        <p className='text-textMuted mt-4 max-w-[560px] leading-relaxed'>
                            I build the platforms and tooling that help engineering teams ship software
                            faster and more safely — across cloud infrastructure, CI/CD, release
                            automation, and application platforms. Primarily on <span className='text-textMain'>AWS</span>,
                            with Azure and GCP experience. Certified Kubernetes Administrator (CKA).
                        </p>

                        <div className='flex flex-wrap gap-2 mt-6 max-w-[560px]'>
                            {highlights.map((item) => (
                                <span key={item} className='chip text-textMain border-line bg-surfaceAlt'>{item}</span>
                            ))}
                        </div>

                        <div className='flex flex-wrap items-center gap-3 mt-8'>
                            <a download='VaibhavMahajan_Resume.pdf' href='/files/Vaibhav_Mahajan_Resume.pdf'>
                                <button className='flex items-center text-white bg-accentDeep hover:bg-accent rounded-lg px-6 py-3 duration-300'>
                                    Download Resume <BsDownload className='ml-2' />
                                </button>
                            </a>
                            <Link to='projects' offset={-70} smooth={true} duration={500}>
                                <button className='flex items-center text-textMain border border-line hover:border-accent hover:text-accent rounded-lg px-6 py-3 duration-300 cursor-pointer'>
                                    View Work <HiArrowNarrowRight className='ml-2' />
                                </button>
                            </Link>
                            <div className='flex items-center gap-3 ml-1'>
                                <a href='https://github.com/vbhv10' target='_blank' rel='noreferrer' aria-label='GitHub' className='text-textMuted hover:text-accent text-2xl duration-300'><FaGithub /></a>
                                <a href='https://www.linkedin.com/in/vbhv/' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='text-textMuted hover:text-accent text-2xl duration-300'><FaLinkedin /></a>
                                <a href='mailto:i.vaibhavmahajan@gmail.com' aria-label='Email' className='text-textMuted hover:text-accent text-2xl duration-300'><HiOutlineMail /></a>
                            </div>
                        </div>
                    </Fade>
                </div>

                {/* Image */}
                <div className='order-1 md:order-2 flex justify-center md:justify-end'>
                    <Fade direction='right' triggerOnce>
                        <div className='relative'>
                            <div className='absolute inset-0 bg-gradient-to-tr from-accentDeep/30 to-sky-500/20 rounded-full blur-2xl'></div>
                            <div className='relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full overflow-hidden border border-line bg-surface animate-floaty'>
                                <img className='object-cover h-full w-full' src={ProfileImage} alt='Vaibhav Mahajan' />
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Home
