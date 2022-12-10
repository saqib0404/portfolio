import React from 'react';
import resume from '../../assets/Saqib Ahmad-Resume.pdf';

const Banner = () => {
    return (
        <div id='home' className='flex-col md:flex-row flex items-center justify-between pt-16 md:pt-28 md:mx-32'>
            <div>

                <div className='text-center md:text-left'>
                    <p className='my-2 font-semibold'>Hello I'm </p>
                    <h2 className='font-bold text-4xl my-2'>Saqib Ahmad</h2>
                    <p className='my-2 font-semibold'>MERN Stack Developer</p>
                </div>

                <div className='mb-10 md:mb-0'>
                    <a className='btn btn-outline mr-3 md:mb-2' href={resume} download>Download Resume</a>
                    <button className='btn'>Lets Talk</button>
                </div>

            </div>


            <div >
                <img className='w-64 md:w-80 rounded-xl md:rounded-full border border-blue-500' src="https://i.ibb.co/Jy26gS3/28.jpg" alt="me" />
            </div>

        </div>
    );
};

export default Banner;