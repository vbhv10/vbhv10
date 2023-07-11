import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from '../assets/Logo2.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
// import {HiOutlineMail} from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const toggleNav = () => setNav(!nav)
    
    return(
    <div className='z-10 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1e3751]'>
        <div className='h-50px w-50px rounded-md overflow-hidden'><img className='object-cover h-[100%] w-[100%]' src={Logo} alt="Logo" style={{ width: '50px' }}></img></div>
        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>
                <Link to="home" offset={-80} smooth={true} duration={500}>Home</Link>
            </li>
            <li><Link to="about" offset={-80} smooth={true} duration={500}>About</Link></li>
            <li><Link to="skills" offset={-80} smooth={true} duration={500}>Skills</Link></li>
            <li><Link to="projects" offset={-80} smooth={true} duration={500}>Projects</Link></li>
            <li><Link to="contact" offset={-80} smooth={true} duration={500}>Contact</Link></li>
        </ul>

        {/* Hamburger */}
        <div onClick={toggleNav} className='md:hidden z-10'>
            {nav? <FaTimes className='text-white hover:cursor-pointer'/> : <FaBars className='text-white hover:cursor-pointer'/>}
        </div>

        {/* Mobile Menu */}
        <ul className={nav ?'mobile-menu absolute top-0 left-0 w-full h-screen bg-[#1e3751] flex flex-col items-center justify-center':'hidden'}>
        <li>
                <Link onClick={toggleNav} offset={-80} to="home" spy={true} smooth={true} duration={500}>Home</Link>
            </li>
            <li><Link onClick={toggleNav} offset={-80} to="about" spy={true} smooth={true} duration={500}>About</Link></li>
            <li><Link onClick={toggleNav} offset={-80} to="skills" spy={true} smooth={true} duration={500}>Skills</Link></li>
            <li><Link onClick={toggleNav} offset={-80} to="projects" spy={true} smooth={true} duration={500}>Projects</Link></li>
            <li><Link onClick={toggleNav} offset={-80} to="contact" spy={true} smooth={true} duration={500}>Contact</Link></li>
        </ul>
        
    </div>
    )
}

export default Navbar