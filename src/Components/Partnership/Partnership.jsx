/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { partnerships } from "../../Data/PartnershipData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import "swiper/css";

// Install the required modules
SwiperCore.use([Autoplay]);

const PartnershipSection = () => {
    return (
        <div className="section-partner">
            <div className="hero-container">
                <AnimateOnScroll animation="fadeInRight" speed="normal">
                    <div className="card card-partner">
                        <div className="partner-spacer"></div>

                        <div className="row row-cols-lg-2 row-cols-1 align-items-center px-5 position-relative z-2">
                            <div className="col">
                                <div className="d-flex flex-column justify-content-start pe-lg-3 pe-0">
                                    <h3 className="title-heading">Powering Success for Top Brands</h3>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-column ps-lg-3 ps-0">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ex ligula, varius at rutrum et, finibus sed felis. 
                                        Quisque eget tincidunt lectus. Sed quis diam sed neque mattis feugiat.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="swiperPartner-layout">
                            <div className="swiperPartner-overlay">
                                <div className="spacer"></div>
                            </div>

                            <div className="swiperPartner-container">
                                <Swiper
                                    slidesPerView={6}
                                    spaceBetween={20}
                                    loop={true}
                                    modules={[Autoplay]}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    breakpoints={{
                                        230: { slidesPerView: 3 },
                                        767: { slidesPerView: 4 },
                                        1024: { slidesPerView: 6 },
                                    }}
                                    className="swiperPartner"
                                    grabCursor={true}
                                >
                                    {partnerships.map((partner, index) => (
                                        <SwiperSlide key={`partner-${partner.id}-${index}`}>
                                            <div className="partner-slide">
                                                <img 
                                                    src={partner.logo} 
                                                    alt="Client" 
                                                    className="partner-logo img-fluid" 
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    {/* Duplicate slides to ensure seamless looping */}
                                    {partnerships.map((partner, index) => (
                                        <SwiperSlide key={`partner-duplicate-${partner.id}-${index}`}>
                                            <div className="partner-slide">
                                                <img 
                                                    src={partner.logo} 
                                                    alt="Client" 
                                                    className="partner-logo img-fluid" 
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>   
                            </div>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </div>
    );
};

export default PartnershipSection;