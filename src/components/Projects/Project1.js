import React from 'react';
import './Project1.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Project1 = () => {
    const images = [
        { image: "https://i.ibb.co/DWg9Rrx/er.png" },
        { image: "https://i.ibb.co/pjYQJNr/qq.png" },
        { image: "https://i.ibb.co/HFz6bgh/screencapture-resell-bikes-web-app-dashboard-addproduct-2022-12-11-08-53-41.png" },
        { image: "https://i.ibb.co/2ttJPTz/screencapture-resell-bikes-web-app-dashboard-allsellers-2022-12-11-08-54-27.png" },
        { image: "https://i.ibb.co/xs3GLCC/screencapture-resell-bikes-web-app-dashboard-myproducts-2022-12-11-08-53-23.png" },
        { image: "https://i.ibb.co/JRKwHzV/screencapture-resell-bikes-web-app-dashboard-reporteditems-2022-12-11-08-54-14.png" }
    ]

    return (
        <section className='background-pattern h-full'>
            <div data-aos="zoom-in" data-aos-duration="1000" className="section-header text-center"><h2 className='text-3xl font-semibold underline pt-5 pb-6'>Resale Bikes</h2></div>

            <Swiper className='swiper w-11/12 md:w-7/12 cursor-grab'
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    images.map((photo, idx) => <SwiperSlide className='rounded-lg' key={idx}>
                        <img className='rounded-lg pb-10' src={photo.image} alt="" />
                    </SwiperSlide>
                    )
                }
            </Swiper>

            <div className='text-xl pt-4 mb-10 mx-4 p-4 rounded-lg bg-slate-900'>
                This is a complete MERN Stack Project build by me.
                This is a bike resale website. Any logged-in user can book bikes and purchase it from his dashboard by stripe payment system.
                Also a logged-in seller can put his bike for sale from his dashboard.
                <br /> <br />
                &#8680; User Authentication is handled by Firebase. <br />
                &#8680; All user data and orders api are protected JWT. <br />
                &#8680; Loaders and toasts are used to make the UX better. <br />
                &#8680; Three different roles with different functionality is present. <br />
                &#8680; All Data is handled using MongoDB and the payment system is integrated by Stripe. <br />
            </div>

            <div className='pb-10'>
                <h3 className='text-3xl font-semibold text-center pb-2'>Technologies Used</h3>
                <div className='flex flex-wrap gap-4 justify-center mx-2'>
                    <button className='tech'>React.js</button>
                    <button className='tech'>Tailwind</button>
                    <button className='tech'>DaisyUi</button>
                    <button className='tech'>Firebase</button>
                    <button className='tech'>JWT</button>
                    <button className='tech'>Node.js</button>
                    <button className='tech'>Express.js</button>
                    <button className='tech'>MondoDb</button>
                    <button className='tech'>Stripe</button>
                </div>
            </div>

        </section>
    );
};

export default Project1;