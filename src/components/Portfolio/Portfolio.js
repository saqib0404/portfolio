import React from 'react';
import { AiOutlineArrowRight, AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section className='pt-20 md:pt-28 mx-4 md:mx-32'>
            <div data-aos="zoom-in" data-aos-duration="1000" className="section-header text-center"><h2 className='text-3xl font-semibold underline mb-6'>Portfolio</h2></div>
            <div data-aos="fade-up" data-aos-duration="1000" className="projects gap-8 grid md:grid-cols-2 lg:md:grid-cols-3">

                <div className="card card-compact border border-slate-800 bg-slate-900 shadow-xl">
                    <figure className="px-4 pt-4"><img className="rounded-xl" src="https://i.ibb.co/cggfpP3/screencapture-resell-bikes-web-app-2022-12-10-10-57-32.png" alt="Project-1" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Resale Bikes</h2>
                        <p>This is a second hand bikes survice website. Anyone can buy their liked bikes at a cheap rate. Also a seller can put his bike for sale here.</p>
                        <div className="card-actions justify-center mt-2">
                            <a rel="noreferrer" href='https://github.com/saqib0404/resale-bikes-client' target='_blank' className="btn btn-sm btn-info">Git-Client</a>
                            <a rel="noreferrer" href='https://github.com/saqib0404/resell-bikes-server' target='_blank' className="btn btn-sm btn-info">Git-Server</a>
                            <a rel="noreferrer" className='btn btn-sm btn-info' href="https://resell-bikes.web.app/" target='_blank'><AiOutlineLink /></a>
                            <Link to='/project1' className='btn btn-sm btn-info' ><AiOutlineArrowRight /></Link>
                        </div>
                    </div>
                </div>

                <div className="card card-compact border border-slate-800 bg-slate-900  bg-inhert shadow-xl">
                    <figure className="px-4 pt-4"><img className="rounded-xl" src="https://i.ibb.co/7NhzCB4/screencapture-davids-burger-web-app-2022-12-10-10-59-36.png" alt="Project-2" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Davids Burger</h2>
                        <p>Yumm Burgers made by David is being sold here. David is a passionate foodist. He makes delicious burger which are available on the website.</p>
                        <div className="card-actions justify-center mt-2">
                            <a rel="noreferrer" href='https://github.com/saqib0404/davids-burger-client' target='_blank' className="btn btn-sm btn-info">Git-Client</a>
                            <a rel="noreferrer" href='https://github.com/saqib0404/devids-burger-server' target='_blank' className="btn btn-sm btn-info">Git-Server</a>
                            <a rel="noreferrer" className='btn btn-sm btn-info' href="https://davids-burger.web.app/" target='_blank'><AiOutlineLink /></a>
                            <Link to='/project2' className='btn btn-sm btn-info' ><AiOutlineArrowRight /></Link>                        </div>
                    </div>
                </div>

                <div className="card card-compact border border-slate-800 bg-slate-900 shadow-xl">
                    <figure className="px-4 pt-4"><img className="rounded-xl" src="https://i.ibb.co/jbcPd8t/screencapture-market-holder-web-app-2022-12-10-10-40-24.png" alt="Project-1" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Market Holder</h2>
                        <p>Freelancing course at a cheap rate can be found on this web site. You can simply login and do these course. You can also the pdf of the course details.</p>
                        <div className="card-actions justify-center mt-2">
                            <a rel="noreferrer" href='https://github.com/saqib0404/market-holder-client' target='_blank' className="btn btn-sm btn-info">Git-Client</a>
                            <a rel="noreferrer" href='https://github.com/saqib0404/market-holder-server' target='_blank' className="btn btn-sm btn-info">Git-Server</a>
                            <a rel="noreferrer" className='btn btn-sm btn-info' href="https://market-holder.web.app/" target='_blank'><AiOutlineLink /></a>
                            <Link to='/project3' className='btn btn-sm btn-info' ><AiOutlineArrowRight /></Link>                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;