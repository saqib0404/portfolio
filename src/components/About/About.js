import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import imaa from '../../assets/saqib (33).jpg';

import './About.css';

const About = () => {
    return (
        <section id='about' className='pt-20 md:pt-28 md:mx-32'>
            <div data-aos="zoom-in" data-aos-duration="1000" className="section-header text-center"><h2 className='text-3xl font-semibold underline mb-6'>About ME</h2></div>

            <div className='md:grid grid-cols-2 gap-12 items-center'>
                <div className='about-me' data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="about-me-img">
                        <img className='hidden md:block' src={imaa} alt="" />
                    </div>
                </div>
                <div className="about-me-content md:w-11/12"  data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="socials flex justify-center gap-8  my-6">
                        <a rel="noreferrer" className='text-4xl hover:text-blue-700' target='_blank' href="https://www.linkedin.com/in/developer-saqib-ahmad/"><AiFillLinkedin /></a>
                        <a rel="noreferrer" className='text-4xl hover:text-blue-700' target='_blank' href="https://github.com/saqib0404"><AiFillGithub /></a>
                        <a rel="noreferrer" className='text-4xl hover:text-blue-700' target='_blank' href="https://www.facebook.com/saqib.ahmad.52459615"><AiFillFacebook /></a>
                    </div>
                    <div>
                        <p className='text-center md:text-justify'>I am a driven and focused young MERN Stack Developer. I have experience using React.js to build Frontend
                            programs. I am dedicated to this work and I'm committed to it. Recently I completed a professional course of 6 months from Programming Hero. Now I have professional skills to build MEAR stack websites and have also done some projects. I count myself as a hard-working, disciplined, and deadline-oriented person.</p>

                    </div>
                    <div className='flex justify-center md:justify-start mt-3'>
                        <Link to='/blogs'><button className='btn'>Blogs &nbsp; <AiOutlineArrowRight /></button></Link>
                        {/* <Link to="contacts" spy={true} smooth={true} offset={50} duration={500} ><button className='btn'>Lets Talk</button></Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;