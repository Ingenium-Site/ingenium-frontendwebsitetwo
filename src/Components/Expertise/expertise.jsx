import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";
import { services } from "../../Data/ServiceData";
import ServiceCard from "../Card/ServiceCard";
function ExpertiseSection(){

    return(
        <>
           <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-lg-row gspace-5">
                        <div className="expertise-img-layout">
                            <div className="image-container expertise-img">
                                {/* <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <img
                                        src="/assets/images/dummy-img-600x400.jpg"
                                        alt="Expertise Image"
                                        className="img-fluid"
                                    />
                                </AnimateOnScroll> */}
                                {/* <div className="expertise-layout">
                                    <div className="d-flex flex-column">
                                        <div className="card-expertise-wrapper">
                                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                                <div className="card card-expertise">
                                                    <h4>Ready to Elevate Your Digital Presence?</h4>
                                                    <p>Let's create a custom strategy that fits your business goals.</p>
                                                    <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                                                        <a href="./contact">Get Free Consultation</a>
                                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </AnimateOnScroll>
                                        </div>
                                    <div className="expertise-spacer"></div>
                                        </div>
                                    <div className="expertise-spacer"></div>
                                </div> */}
                            </div>
                        </div>
                      <div className="d-flex flex-column justify-content-center text-center gspace-5">
                        <div className="d-flex flex-column justify-content-center text-center gspace-2"></div>    
                        <div className="expertise-title">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>Our Expertise</span>
                                </div>
                            </AnimateOnScroll>

                            {/* <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">
                                    Insight, intelligence, and invention
                                </h2>
                            </AnimateOnScroll> */}
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <h2 className="title-heading heading-container heading-container-medium">
                                   Insight, intelligence, and invention
                                </h2>
                            </AnimateOnScroll>
                            <div className="d-flex flex-column flex-md-row gspace-2">
                                <div className="expertise-list">
                                    <h5>What We Do Best</h5>
                                    <ul className="check-list">
                                        <li><a href="./single_services">Social Media Growth</a></li>
                                        <li><a href="./single_services">Content Marketing</a></li>
                                        <li><a href="./single_services">Domain and Hosting Services</a></li>
                                        <li><a href="./single_services">Website Creation</a></li>
                                        <li><a href="./single_services">Brand Strategy</a></li>
                                        <li><a href="./single_services">Conversion Optimization</a></li>
                                    </ul>
                                </div>

                                {/* <AnimateOnScroll animation="fadeInUp">
                                    <div className="card card-expertise card-expertise-counter animate-box">
                                        <div className="d-flex flex-row gspace-2 align-items-center">
                                            <div className="d-flex flex-row align-items-center">
                                            <CounterOnScroll
                                                target={21}
                                                suffix="+"
                                                counterClassName="counter"
                                                suffixClassName="counter-detail"
                                            />
                                            </div>
                                            <h6>Years of experience in strategy and execution</h6>
                                        </div>
                                        <p>
                                            We build brands, systems, and outcomes with disciplined judgment—work evaluated by how well it performs in the real world.
                                        </p>
                                    </div>
                                </AnimateOnScroll> */}
                            </div>
                        </div>
                    </div>
                      </div>
                     <div className="d-flex flex-column justify-content-center text-center gspace-5">
                        <div className="d-flex flex-column justify-content-center text-center gspace-2">
            
                            <AnimateOnScroll animation="fadeInDown" speed="normal">
                                <h3 className="title-heading heading-container heading-container-medium">
                                    Digital Solutions That Drive Real Results
                                </h3>
                            </AnimateOnScroll>
                        </div>
                        <div className="card-service-wrapper">
                            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 grid-spacer-2">
                                {services.map((item) => (
                                    <div className="col" key={item.id}>
                                        <ServiceCard 
                                            icon={item.icon}
                                            title={item.title}
                                            content={item.content}
                                            speed={item.speed}
                                            link={item.link}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="service-link-footer">
                            <p>
                                Need a custom solution? Let&apos;s create a strategy tailored for your business.
                                <a href="./contact"> Get a Free Strategy Call</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default ExpertiseSection;