import React from 'react';
import resume from '../../assets/Saqib Ahmad-Resume.pdf';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import imaa from '../../assets/saqib (23).jpg'

const Banner = () => {
    return (
        <div className='background-pattern'>
            <div id='home' className='flex-col md:flex-row flex items-center justify-between pt-16 md:pt-28 md:mx-32'>
                <div data-aos="fade-up-right" data-aos-duration="1000">

                    <div className='text-center md:text-left'>
                        <p className='my-2 font-semibold'>Hello I'm </p>
                        <h2 className='font-bold text-4xl my-2'>Saqib Ahmad</h2>
                        <p className='my-2 font-semibold'>MERN Stack Developer</p>
                    </div>

                    <div className='mb-10 md:mb-0'>
                        <a className='btn btn-outline mr-3 md:mb-2 jump' href={resume} download>Download Resume</a>
                        <a href='https://api.whatsapp.com/send?phone=01858954065' target='_blank' rel="noreferrer" className='btn jump'>Lets Talk</a>
                    </div>

                </div>


                <div data-aos="fade-up-left" data-aos-duration="1000">
                    {/* <img className='w-64 md:w-80 rounded-xl md:rounded-full border border-blue-500' src="https://i.ibb.co/Jy26gS3/28.jpg" alt="me" /> */}
                    <img className='w-64 md:w-80 rounded-xl md:rounded-full border border-blue-500' src={imaa} alt="me" />
                </div>

            </div>

            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default Banner;