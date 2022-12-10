import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './About.css';

const About = () => {
    return (
        <section className='pt-20 md:pt-28 md:mx-32'>
            <div className="section-header text-center"><h2 className='text-2xl font-semibold underline mb-6'>About ME</h2></div>
            {/* <div className='md:flex gap-8 items-center justify-around'> */}
            <div className='md:grid grid-cols-2 gap-28 items-center'>
                <div className='about-me'>
                    <div className="about-me-img">
                        <img className='hidden md:block' src="https://i.ibb.co/Jy26gS3/28.jpg" alt="" />
                    </div>
                </div>
                <div className="about-me-content md:w-11/12">
                    <div className="socials flex justify-center gap-8  my-6">
                        <a className='text-2xl hover:text-3xl' target='_blank' href="https://www.linkedin.com/in/developer-saqib-ahmad/"><AiFillLinkedin /></a>
                        <a className='text-2xl hover:text-3xl' target='_blank' href="https://github.com/saqib0404"><AiFillGithub /></a>
                        <a className='text-2xl hover:text-3xl' target='_blank' href="https://www.facebook.com/saqib.ahmad.52459615"><AiFillFacebook /></a>
                    </div>
                    <div>
                        <p className='text-center md:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus laborum maxime laudantium quos aliquam iure ex molestiae iste sequi nihil.</p>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <button className='btn  my-4'>Let's Talk</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;