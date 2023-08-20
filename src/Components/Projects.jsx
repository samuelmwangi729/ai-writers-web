import React, { Component } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = {
             
        }
    }

    render() {
        return (
            <div className='availableProjects mt-5'>
                <h2 className='text-3xl text-center py-3 bg-red-600 text-white'>
                    Available Projects
                </h2>
                <div className="sliders">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        speed={1000}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        breakpoints={{
                            640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            },
                            768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            },
                            1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                            },
                        }}
                        >
                        <SwiperSlide>
                            <div className="projectContent mt-3 px-1">
                                <h2 className='text-left text-xl  text-[var(--secondary-color)] overline w-[100%]'>
                                    Type: <span className='font-bold text-black lowercase'>Article Writing</span>
                                </h2>
                                <div className="project-description text-left">
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Topic <span className='font-bold text-black lowercase'>
                                            How to Mask Poor Communications
                                            </span>
                                    </div>
                                    <br/>
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Due Date <span className='font-bold text-black lowercase'>
                                            12/08/23
                                            </span>
                                    </div>
                                    <hr/>
                                    <div className="contents text-left text-xl   text-[var(--secondary-color)]">
                                        Price <span className='font-bold text-black lowercase'>
                                            $200
                                            </span>
                                    </div>
                                    <div className="ctaButton text-center mt-2 mb-5">
                                        <button className='bg-[var(--primary-color)] px-4 text-white'>
                                            Bind This
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="projectContent mt-3 px-2">
                                <h2 className='text-left text-xl  text-[var(--secondary-color)] overline w-[100%]'>
                                    Type: <span className='font-bold text-black lowercase'>Article Writing</span>
                                </h2>
                                <div className="project-description text-left">
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Topic <span className='font-bold text-black lowercase'>
                                            How to Mask Poor Communications
                                            </span>
                                    </div>
                                    <br/>
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Due Date <span className='font-bold text-black lowercase'>
                                            12/08/23
                                            </span>
                                    </div>
                                    <hr/>
                                    <div className="contents text-left text-xl   text-[var(--secondary-color)]">
                                        Price <span className='font-bold text-black lowercase'>
                                            $200
                                            </span>
                                    </div>
                                    <div className="ctaButton text-center mt-2 mb-5">
                                        <button className='bg-[var(--primary-color)] px-4 text-white'>
                                            Bind This
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="projectContent mt-3 px-2">
                                <h2 className='text-left text-xl  text-[var(--secondary-color)] overline w-[100%]'>
                                    Type: <span className='font-bold text-black lowercase'>Article Writing</span>
                                </h2>
                                <div className="project-description text-left">
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Topic <span className='font-bold text-black lowercase'>
                                            How to Mask Poor Communications
                                            </span>
                                    </div>
                                    <br/>
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Due Date <span className='font-bold text-black lowercase'>
                                            12/08/23
                                            </span>
                                    </div>
                                    <hr/>
                                    <div className="contents text-left text-xl   text-[var(--secondary-color)]">
                                        Price <span className='font-bold text-black lowercase'>
                                            $200
                                            </span>
                                    </div>
                                    <div className="ctaButton text-center mt-2 mb-5">
                                        <button className='bg-[var(--primary-color)] px-4 text-white'>
                                            Bind This
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="projectContent mt-3 px-2">
                                <h2 className='text-left text-xl  text-[var(--secondary-color)] overline w-[100%]'>
                                    Type: <span className='font-bold text-black lowercase'>Article Writing</span>
                                </h2>
                                <div className="project-description text-left">
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Topic <span className='font-bold text-black lowercase'>
                                            How to Mask Poor Communications
                                            </span>
                                    </div>
                                    <br/>
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Due Date <span className='font-bold text-black lowercase'>
                                            12/08/23
                                            </span>
                                    </div>
                                    <hr/>
                                    <div className="contents text-left text-xl   text-[var(--secondary-color)]">
                                        Price <span className='font-bold text-black lowercase'>
                                            $200
                                            </span>
                                    </div>
                                    <div className="ctaButton text-center mt-2 mb-5">
                                        <button className='bg-[var(--primary-color)] px-4 text-white'>
                                            Bind This
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="projectContent mt-3 px-2">
                                <h2 className='text-left text-xl  text-[var(--secondary-color)] overline w-[100%]'>
                                    Type: <span className='font-bold text-black lowercase'>Article Writing</span>
                                </h2>
                                <div className="project-description text-left">
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Topic <span className='font-bold text-black lowercase'>
                                            How to Mask Poor Communications
                                            </span>
                                    </div>
                                    <br/>
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Due Date <span className='font-bold text-black lowercase'>
                                            12/08/23
                                            </span>
                                    </div>
                                    <hr/>
                                    <div className="contents text-left text-xl   text-[var(--secondary-color)]">
                                        Price <span className='font-bold text-black lowercase'>
                                            $200
                                            </span>
                                    </div>
                                    <div className="ctaButton text-center mt-2 mb-5">
                                        <button className='bg-[var(--primary-color)] px-4 text-white'>
                                            Bind This
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="projectContent mt-3 px-2">
                                <h2 className='text-left text-xl  text-[var(--secondary-color)] overline w-[100%]'>
                                    Type: <span className='font-bold text-black lowercase'>Article Writing</span>
                                </h2>
                                <div className="project-description text-left">
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Topic <span className='font-bold text-black lowercase'>
                                            How to Mask Poor Communications
                                            </span>
                                    </div>
                                    <br/>
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Due Date <span className='font-bold text-black lowercase'>
                                            12/08/23
                                            </span>
                                    </div>
                                    <hr/>
                                    <div className="contents text-left text-xl   text-[var(--secondary-color)]">
                                        Price <span className='font-bold text-black lowercase'>
                                            $200
                                            </span>
                                    </div>
                                    <div className="ctaButton text-center mt-2 mb-5">
                                        <button className='bg-[var(--primary-color)] px-4 text-white'>
                                            Bind This
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="projectContent mt-3 px-2">
                                <h2 className='text-left text-xl  text-[var(--secondary-color)] overline w-[100%]'>
                                    Type: <span className='font-bold text-black lowercase'>Article Writing</span>
                                </h2>
                                <div className="project-description text-left">
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Topic <span className='font-bold text-black lowercase'>
                                            How to Mask Poor Communications
                                            </span>
                                    </div>
                                    <br/>
                                    <div className="contents text-left text-xl  text-[var(--secondary-color)]">
                                        Due Date <span className='font-bold text-black lowercase'>
                                            12/08/23
                                            </span>
                                    </div>
                                    <hr/>
                                    <div className="contents text-left text-xl   text-[var(--secondary-color)]">
                                        Price <span className='font-bold text-black lowercase'>
                                            $200
                                            </span>
                                    </div>
                                    <div className="ctaButton text-center mt-2 mb-5">
                                        <button className='bg-[var(--primary-color)] px-4 text-white'>
                                            Bind This
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <h2 className='text-center py-3'>
                    <button className='px-2 text-white bg-[var(--secondary-color)] py-1'>
                        View All Projects
                    </button>
                </h2>
            </div>
        )
    }
}

export default Projects
