import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function AboutSection(){

    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column flex-lg-row gspace-5">
                    <div className="about-img-layout">
                        <div className="image-container about-img">
                            <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <img
                                src="/assets/images/dummy-img-600x400.jpg"
                                alt="About Us Image"
                                className="img-fluid"
                            />
                            </AnimateOnScroll>
                        
                            <div className="about-layout">
                                <div className="d-flex flex-column">
                                    <div className="card-about-wrapper">
                                        <AnimateOnScroll animation="fadeInDown" speed="normal">
                                            <div
                                                className="card card-about"
                                                >
                                                <div className="d-flex flex-row align-items-center">
                                                    <span className="counter" data-target="21"></span>
                                                    <span className="counter-detail">+</span>
                                                </div>
                                                <h6>Years of experience in strategy, creativity, and execution</h6>
                                            </div>
                                        </AnimateOnScroll>
                                    </div>
                                <div className="about-spacer"></div>
                                </div>
                                <div className="about-spacer"></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-title">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div
                                    className="sub-heading"
                                >
                                    <i className="fa-regular fa-circle-dot"></i>
                                    <span>About Us</span>
                                </div>
                            </AnimateOnScroll>

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <h2 className="title-heading">What INGENIUM Is</h2>
                            </AnimateOnScroll>

                            <p>
                                INGENIUM is a strategy and creative firm built on thinking that leads to durable execution.
                                The name is drawn from an old Italian and Latin root describing natural intelligence,
                                inventive capability, and the disciplined judgment required to build wisely.
                            </p>
                            <p>
                                We are grounded in historical intelligence—how enduring systems, institutions, and ideas
                                have been built over time. We believe the strongest solutions emerge from understanding
                                first, structure second, and execution that respects both.
                            </p>

                            <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">Insight & Research</a></li>
                                        <li><a href="./single_services">Strategy & Positioning</a></li>
                                        <li><a href="./single_services">Brand & System Design</a></li>
                                    </ul>
                                </div>

                                <div className="about-list">
                                    <ul className="check-list">
                                        <li><a href="./single_services">Creative Direction</a></li>
                                        <li><a href="./single_services">Emerging Technology</a></li>
                                        <li><a href="./single_services">Durable Execution</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>

    );
}

export default AboutSection;