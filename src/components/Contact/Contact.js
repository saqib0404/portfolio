import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

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
            <div className="section-header text-center"><h2 className='text-3xl font-semibold underline mb-6'>Contact ME</h2></div>

            <form ref={form} onSubmit={sendEmail}>
                <input name='name' className='w-full py-4 px-8 text-white rounded-lg bg-inherit border-2 border-white' type="text" placeholder='Your Name' required /> <br /><br />
                <input name='email' className='w-full py-4 px-8 text-white rounded-lg bg-inherit border-2 border-white' type="email" placeholder='Your Email' required /><br /><br />
                <textarea name='message' className='w-full py-4 px-8 text-white rounded-lg bg-inherit border-2 border-white h-44' type="text" placeholder='Your Message' required /><br /><br />
                <input type='submit' className='submit-btn cursor-pointer w-full' value='submit' />
            </form>
        </section>
    );
};

export default Contact;