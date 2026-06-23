import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { Fade } from 'react-awesome-reveal'

const socialLinks = [
    { id: 1, icon: <FaGithub />, url: 'https://github.com/vbhv10', label: 'GitHub' },
    { id: 2, icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/vbhv/', label: 'LinkedIn' },
    { id: 3, icon: <HiOutlineMail />, url: 'mailto:i.vaibhavmahajan@gmail.com', label: 'Email' },
]

const navItems = ['home', 'about', 'skills', 'experience', 'projects']

const Footer = () => {
    return (
        <>
            <div name='contact' className='py-24'>
                <div className='section-pad text-center'>
                    <Fade direction='up' triggerOnce cascade damping={0.12}>
                        <p className='text-accent font-semibold tracking-widest text-sm uppercase'>Contact</p>
                        <h2 className='text-3xl md:text-5xl font-bold text-textMain mt-2'>Let's build something</h2>
                        <p className='text-textMuted mt-4 max-w-[560px] mx-auto leading-relaxed'>
                            I'm open to new opportunities in platform, DevOps, and cloud engineering.
                            Whether you want to talk shop or discuss a role, my inbox is always open.
                        </p>
                        <p className='text-textMuted text-sm mt-3'>📍 San Francisco Bay Area · Remote-friendly</p>

                        <a href='mailto:i.vaibhavmahajan@gmail.com'>
                            <button className='mt-8 text-white bg-accentDeep hover:bg-accent rounded-lg px-8 py-3 duration-300'>Say Hello</button>
                        </a>

                        <div className='flex justify-center gap-5 mt-8'>
                            {socialLinks.map((link) => (
                                <a key={link.id} href={link.url} target='_blank' rel='noreferrer' aria-label={link.label}
                                    className='text-textMuted hover:text-accent text-3xl duration-300'>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </Fade>
                </div>
            </div>

            {/* Bottom bar */}
            <div className='border-t border-line'>
                <div className='section-pad py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-textMuted'>
                    <div>&copy; {new Date().getFullYear()} Vaibhav Mahajan</div>
                    <div className='flex gap-4'>
                        {navItems.map((item) => (
                            <Link key={item} to={item} offset={-70} smooth={true} duration={500}
                                className='capitalize cursor-pointer hover:text-accent duration-300'>
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
