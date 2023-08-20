import React, { Component } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {TfiBook,TfiArrowCircleDown} from 'react-icons/tfi';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../Styles/slider.css';
import { EffectCoverflow, Autoplay, Pagination, Navigation  } from 'swiper/modules';
import Td from '../Assets/Slider/timelydelivery.png';
import Pe from '../Assets/Slider/peerexperience.png';
import Li from '../Assets/Slider/loveit.png';
import Ew from '../Assets/Slider/explanationwell.png';
class Slider extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render = () =>{
        return(
            <>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              speed={2500}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 1000,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={true}
              modules={[EffectCoverflow, Autoplay, Pagination, Navigation ]} className="mySwiper">
                <SwiperSlide>
                    <div className="slideContent relative w-full">
                        <div className="sliderImage">
                        <img src={Ew} />
                        </div>
                        <div className="sliderComment">
                        <h2 className='sliderHeading'>
                            The Founder's Visit to Utumishi Girls Academy for jasdkjkjsjk
                        </h2>
                        <div className="description">
                            <p>
                            Description Goes Here
                            </p>
                        </div>
                        <div className="cta mb-3 mt-2">
                            <button>
                            <div className="btn-content">
                                <div className="btn-icon">
                                <TfiBook/>
                                </div>
                                <div className="btn-label">
                                Read More
                                </div>
                            </div>
                            </button>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContent relative w-full">
                        <div className="sliderImage">
                        <img src={Pe} />
                        </div>
                        <div className="sliderComment">
                        <h2 className='sliderHeading'>
                            The Founder's Visit to Utumishi Girls Academy for jasdkjkjsjk
                        </h2>
                        <div className="description">
                            <p>
                            Description Goes Here
                            </p>
                        </div>
                        <div className="cta mb-3 mt-2">
                            <button>
                            <div className="btn-content">
                                <div className="btn-icon">
                                <TfiBook/>
                                </div>
                                <div className="btn-label">
                                Read More
                                </div>
                            </div>
                            </button>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContent relative w-full">
                        <div className="sliderImage">
                        <img src={Li} />
                        </div>
                        <div className="sliderComment">
                        <h2 className='sliderHeading'>
                            The Founder's Visit to Utumishi Girls Academy for jasdkjkjsjk
                        </h2>
                        <div className="description">
                            <p>
                            Description Goes Here
                            </p>
                        </div>
                        <div className="cta mb-3 mt-2">
                            <button>
                            <div className="btn-content">
                                <div className="btn-icon">
                                <TfiBook/>
                                </div>
                                <div className="btn-label">
                                Read More
                                </div>
                            </div>
                            </button>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContent relative w-full">
                        <div className="sliderImage">
                        <img src={Td} />
                        </div>
                        <div className="sliderComment">
                        <h2 className='sliderHeading'>
                            The Founder's Visit to Utumishi Girls Academy for jasdkjkjsjk
                        </h2>
                        <div className="description">
                            <p>
                            Description Goes Here
                            </p>
                        </div>
                        <div className="cta mb-3 mt-2">
                            <button>
                            <div className="btn-content">
                                <div className="btn-icon">
                                <TfiBook/>
                                </div>
                                <div className="btn-label">
                                Read More
                                </div>
                            </div>
                            </button>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </>
        )
    }
}
export default Slider