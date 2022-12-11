import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import './Contact.css';

const Contact = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_grg2w4e', 'template_779jl6g', form.current, '3JgX3zdO3hWUCCI0v')

        e.target.reset();
        toast.success('Message Sent')

    };
    return (
        <section id='contacts' className='pt-20 md:pt-28 mx-4 md:mx-32'>
            <Toaster />
            <div data-aos="zoom-in" data-aos-duration="1000" className="section-header text-center"><h2 className='text-3xl font-semibold underline mb-6'>Contact ME</h2></div>

            <div data-aos="zoom-in-right" data-aos-duration="1000" className='md:grid grid-cols-4 gap-8'>
                <form className='col-span-3' ref={form} onSubmit={sendEmail}>
                    <input name='name' className='w-full py-4 px-8 text-white rounded-lg bg-inherit border-2 border-white' type="text" placeholder='Your Name' required /> <br /><br />
                    <input name='email' className='w-full py-4 px-8 text-white rounded-lg bg-inherit border-2 border-white' type="email" placeholder='Your Email' required /><br /><br />
                    <textarea name='message' className='w-full py-4 px-8 text-white rounded-lg bg-inherit border-2 border-white h-44' type="text" placeholder='Your Message' required /><br /><br />
                    <input type='submit' className='submit-btn cursor-pointer w-full' value='submit' />
                </form>

                <div data-aos="zoom-in-left" data-aos-duration="1000" className="contact-icons mt-12 md:mt-0 flex flex-col items-center md:items-start">
                    <a href='mailto:saqibahmad0404@gmail.com' className='flex gap-2 items-center md:flex-col md:items-start'><AiOutlineMail className='text-4xl' /> <span>saqibahmad0404@gmail.com</span></a><br />
                    <a href='tel:+880 1858954065' className='flex gap-2 items-center md:flex-col md:items-start'><AiOutlinePhone className='text-4xl' /> <span>+880 1858954065</span></a><br />
                    {/* <div className='flex gap-2 items-center md:flex-col md:items-start'> <AiFillLinkedin className='text-4xl'/> <span> Saqib Ahmad</span></div> */}
                </div>
            </div>
        </section>
    );
};

export default Contact;