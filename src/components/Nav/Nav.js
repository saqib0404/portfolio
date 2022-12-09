import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineBulb } from 'react-icons/ai';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BiMessageDots } from 'react-icons/bi';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('')
    return (
        <nav>
            <a onClick={() => setActiveNav('#home')} className={activeNav === '#home' && 'active'} href="#home"><AiOutlineHome /></a>
            <a onClick={() => setActiveNav('#about')} className={activeNav === '#about' && 'active'} href="#about"><AiOutlineUser /></a>
            <a onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' && 'active'} href="#skills"><AiOutlineBulb /></a>
            <a onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' && 'active'} href="#projects"><AiOutlineFundProjectionScreen /></a>
            <a onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' && 'active'} href="#contacts"><BiMessageDots /></a>
        </nav>
    );
};

export default Nav;