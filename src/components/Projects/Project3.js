import React from 'react';
import './Project1.css';
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Project3 = () => {
    const images = [
        { image: "https://i.ibb.co/6FsLRvP/tf.png" },
        { image: "https://i.ibb.co/Dk6MdkH/ddddddd.png" },
        { image: "https://i.ibb.co/NTSP71V/ll.png" },
        { image: "https://i.ibb.co/SXY9LBG/ggg.png" },
        { image: "https://i.ibb.co/2sM3GsJ/asdqwe.png" }
    ]

    return (
        <section className='background-pattern h-full'>
            <div data-aos="zoom-in" data-aos-duration="1000" className="section-header text-center"><h2 className='text-3xl font-semibold underline pt-5 pb-6'>Market Holder</h2></div>

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
                This is a Full Stack Project build by me.
                Here Online Courses are available at a cheap prise. User can choose a course of his liking mentor.
                To learn about Technologies user can explore our blogs and see our previous user questions from FAQ.

                <br /> <br />
                &#8680; React Router Dom is used for SPA. <br />
                &#8680; Private Routes are protected using React Router Dom and firebase. <br />
                &#8680; Downloading PDF has been implemented by react-to-pdf. <br />
                &#8680; User Authentication is handled by Firebase. <br />
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
                </div>
            </div>

        </section>
    );
};

export default Project3;