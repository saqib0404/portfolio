import React from 'react';
import './Skill.css';
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
    return (
        <section id='skills' className='pt-20 md:pt-28 md:mx-32'>
            <div className="section-header text-center"><h2 className='text-3xl font-semibold underline mb-6'>My Skills</h2></div>

            <div className='skill-container mx-2 md:mx-0 text-white  grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className="frontend-skill">
                    <h3 className='text-xl text-center mb-2'>Frontend</h3>
                    <div className="skill-container  grid grid-cols-2">
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill className='text-blue-600'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-gray-500'>Expert</small>
                            </div>
                        </article>
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill className='text-blue-600'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-gray-500'>Expert</small>
                            </div>
                        </article>
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill  className='text-blue-600'/>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-gray-500'>Expert</small>
                            </div>
                        </article>
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill  className='text-blue-600'/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-gray-500'>Comfortable</small>
                            </div>
                        </article>
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill className='text-blue-600'/>
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-gray-500'>intermediate</small>
                            </div>
                        </article>
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill className='text-blue-600'/>
                            <div>
                                <h4>React</h4>
                                <small className='text-gray-500'>intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="backend-skill">
                    <h3 className='text-xl text-center mb-2'>Backend</h3>
                    <div className="skill-container  grid grid-cols-2">
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill className='text-blue-600'/>
                            <div>
                                <h4>Firebase</h4>
                                <small className='text-gray-500'>Comfortable</small>
                            </div>
                        </article>
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill className='text-blue-600'/>
                            <div>
                                <h4>JWT</h4>
                                <small className='text-gray-500'>Comfortable</small>
                            </div>
                        </article>
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill className='text-blue-600'/>
                            <div>
                                <h4>Node</h4>
                                <small className='text-gray-500'>Comfortable</small>
                            </div>
                        </article>
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill className='text-blue-600'/>
                            <div>
                                <h4>Express</h4>
                                <small className='text-gray-500'>Comfortable</small>
                            </div>
                        </article>
                        <article className='skill-details flex items-center gap-5 my-4'>
                            <BsPatchCheckFill className='text-blue-600'/>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-gray-500'>Comfortable</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Skills;