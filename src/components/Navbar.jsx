import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'experience', label: 'Experience' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
]

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const toggleNav = () => setNav(!nav)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <div className={`z-20 fixed w-full h-[70px] flex justify-between items-center px-5 sm:px-8 duration-300 ${scrolled ? 'bg-base/80 backdrop-blur-md border-b border-line' : 'bg-transparent'}`}>
            <Link to='home' smooth={true} duration={500} className='cursor-pointer flex items-center'>
                <img src='/assets/logo-mark.png' alt='Vaibhav Mahajan logo' className='h-11 w-auto' />
            </Link>

            {/* Desktop menu */}
            <ul className='hidden md:flex items-center gap-1'>
                {navItems.map((item) => (
                    <li key={item.to}>
                        <Link
                            to={item.to}
                            spy={true}
                            offset={-70}
                            smooth={true}
                            duration={500}
                            activeClass='!text-accent'
                            className='text-sm text-textMuted hover:text-textMain px-3 py-2 cursor-pointer duration-200'
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                <a download='VaibhavMahajan_Resume.pdf' href='/files/Vaibhav_Mahajan_Resume-devops-engineer.pdf'>
                    <button className='ml-3 text-sm text-white bg-accentDeep hover:bg-accent rounded-lg px-4 py-2 duration-300'>Resume</button>
                </a>
            </ul>

            {/* Hamburger */}
            <div onClick={toggleNav} className='md:hidden z-20 text-textMain'>
                {nav ? <FaTimes className='hover:cursor-pointer' /> : <FaBars className='hover:cursor-pointer' />}
            </div>

            {/* Mobile menu */}
            <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-base flex flex-col items-center justify-center gap-2' : 'hidden'}>
                {navItems.map((item) => (
                    <li key={item.to}>
                        <Link
                            onClick={toggleNav}
                            to={item.to}
                            spy={true}
                            offset={-70}
                            smooth={true}
                            duration={500}
                            activeClass='!text-accent'
                            className='text-2xl text-textMuted hover:text-textMain py-3 cursor-pointer'
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                <a download='VaibhavMahajan_Resume.pdf' href='/files/Vaibhav_Mahajan_Resume-devops-engineer.pdf' onClick={toggleNav}>
                    <button className='mt-4 text-white bg-accentDeep hover:bg-accent rounded-lg px-6 py-3 duration-300'>Download Resume</button>
                </a>
            </ul>
        </div>
    )
}

export default Navbar
