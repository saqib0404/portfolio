import React from 'react';
import './Project1.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Project2 = () => {
    const images = [
        { image: "https://i.ibb.co/swH58Yq/fdddd.png" },
        { image: "https://i.ibb.co/b7XvX40/fdsasd.png" },
        { image: "https://i.ibb.co/YhD7cvZ/ddasdsad.png" },
        { image: "https://i.ibb.co/7yR4Lxt/tr.png" },
        { image: "https://i.ibb.co/mBD7cJb/w.png" }
    ]

    return (
        <section className='background-pattern h-full'>
            <div data-aos="zoom-in" data-aos-duration="1000" className="section-header text-center"><h2 className='text-3xl font-semibold underline pt-5 pb-6'>Davids Burger</h2></div>

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
                Here David sells his handmade delicious burgers. Any logged-in user can review his burgers.
                Anyone new to the website should subscribe and know about David from the "About" section.

                <br /> <br />
                &#8680; User Authentication is handled by Firebase. <br />
                &#8680; User Review functionality is handled from the backend. <br />
                &#8680; Loaders and toasts are used to make the UX better. <br />
                &#8680; User can aslo add his own service which will be displayed in the categories. <br />
                &#8680; User can Update and Delete his own reviews. <br />
            </div>

            <div className='pb-10'>
                <h3 className='text-3xl font-semibold text-center pb-2'>Technologies Used</h3>
                <div className='flex flex-wrap gap-4 justify-center mx-2'>
                    <button className='tech'>React.js</button>
                    <button className='tech'>Tailwind</button>
                    <button className='tech'>DaisyUi</button>
                    <button className='tech'>Firebase</button>
                    <button className='tech'>Node.js</button>
                    <button className='tech'>Express.js</button>
                    <button className='tech'>MondoDb</button>
                </div>
            </div>

        </section>
    );
};

export default Project2;