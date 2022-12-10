import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineBulb } from 'react-icons/ai';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiMessageDots } from 'react-icons/bi';
import { Link } from 'react-scroll';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('')
    return (
        // <nav>
        //     <a onClick={() => setActiveNav('#home')} className={activeNav === '#home' && 'active'} href="#home"><AiOutlineHome /></a>
        //     <a onClick={() => setActiveNav('#about')} className={activeNav === '#about' && 'active'} href="#about"><AiOutlineUser /></a>
        //     <a onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' && 'active'} href="#skills"><AiOutlineBulb /></a>
        //     <a onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' && 'active'} href="#projects"><AiOutlineFundProjectionScreen /></a>
        //     <a onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' && 'active'} href="#contacts"><BiMessageDots /></a>
        // </nav>
        <nav>
            <Link onClick={() => setActiveNav('home')} className={activeNav === 'home' ? 'active' : ''} to="home" spy={true} smooth={true} offset={50} duration={500} > <AiOutlineHome /></Link>
            <Link onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''} to="about" spy={true} smooth={true} offset={50} duration={500} > <AiOutlineUser /></Link>
            <Link onClick={() => setActiveNav('skills')} className={activeNav === 'skills' ? 'active' : ''} to="skills" spy={true} smooth={true} offset={50} duration={500} > <AiOutlineBulb /></Link>
            <Link onClick={() => setActiveNav('projects')} className={activeNav === 'projects' ? 'active' : ''} to="projects" spy={true} smooth={true} offset={50} duration={500} > <AiOutlineFundProjectionScreen /></Link>
            <Link onClick={() => setActiveNav('contacts')} className={activeNav === 'contacts' ? 'active' : ''} to="contacts" spy={true} smooth={true} offset={50} duration={500} ><BiMessageDots /></Link>
        </nav>
    );
};

export default Nav;