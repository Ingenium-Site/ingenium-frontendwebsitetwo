import React, { useEffect, useRef, useState } from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

// Rotating "In" + suffix word morph with color changes and animated underline
function InWordMorph({ intervalMs = 2000 }) {
    const suffixes = ["sight", "genium", "fluence", "tegrity", "genium"];
    const colors = ["#ff6b6b", "#4ecdc4", "#ffd166", "#6a0572", "#1a936f"]; // Different colors for each word
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            setIdx((prev) => (prev + 1) % suffixes.length);
        }, intervalMs);
        return () => clearInterval(t);
    }, [intervalMs]);

    // Key forces re-mount so the keyframe animation restarts every swap
    return (
        <>
            <span className="inword-morph" aria-live="polite" aria-atomic="true">
                <span 
                    key={idx} 
                    className="inword-morph__word"
                    style={{ color: colors[idx] }}
                >
                    {suffixes[idx]}
                </span>
                <span className="inword-morph__underline"></span>
            </span>

            <style>{`
                .inword-morph {
                    display: inline-block;
                    position: relative;
                    vertical-align: baseline;
                    line-height: 1;
                }
                .inword-morph__word {
                    display: inline-block;
                    will-change: transform, opacity, filter;
                    animation: inwordFadeUp 520ms ease both;
                }
                .inword-morph__underline {
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: linear-gradient(to right, transparent, #FF6B35, #FFA500, #FF6B35, transparent);
                    border-radius: 50%;
                    animation: curveLine 2s infinite alternate ease-in-out;
                    content: "";
                }
                @keyframes inwordFadeUp {
                    from { opacity: 0; transform: translateY(6px); filter: blur(8px); }
                    to   { opacity: 1; transform: translateY(0);   filter: blur(0); }
                }
                @keyframes curveLine {
                    0% { transform: translateY(0) scaleY(1); }
                    50% { transform: translateY(-2px) scaleY(1.2); }
                    100% { transform: translateY(0) scaleY(1); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .inword-morph__word { animation: none; }
                    .inword-morph__underline { animation: none; }
                }
            `}</style>
        </>
    );
}

function BannerHomeSection() {
    const playerRef = useRef(null);
    const videoContainerRef = useRef(null);

    useEffect(() => {
        // Initialize YouTube player when API is ready
        const initializeYouTubePlayer = () => {
            playerRef.current = new window.YT.Player("banner-video-background", {
                videoId: "P68V3iH4TeE",
                playerVars: {
                    autoplay: 1,
                    controls: 0,
                    mute: 1,
                    loop: 1,
                    playlist: "P68V3iH4TeE",
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    disablekb: 1,
                    modestbranding: 1,
                    iv_load_policy: 3,
                    'origin': window.location.origin
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange
                }
            });
        };

        // Player ready callback
        const onPlayerReady = (event) => {
            event.target.playVideo();
            setYoutubeSize();
            window.addEventListener("resize", setYoutubeSize);
        };

        // Player state change callback
        const onPlayerStateChange = (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
                playerRef.current.playVideo();
            }
            if (event.data === window.YT.PlayerState.PLAYING) {
                playerRef.current.setPlaybackQuality("hd1080");
            }
        };

        // Set YouTube video size based on container
        const setYoutubeSize = () => {
            const container = videoContainerRef.current;
            if (!container || !playerRef.current?.getIframe) return;

            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            const aspectRatio = 16 / 9;

            let newWidth, newHeight;
            if (containerWidth / containerHeight > aspectRatio) {
                newWidth = containerWidth;
                newHeight = containerWidth / aspectRatio;
            } else {
                newWidth = containerHeight * aspectRatio;
                newHeight = containerHeight;
            }

            const iframe = playerRef.current.getIframe();
            iframe.style.width = `${newWidth}px`;
            iframe.style.height = `${newHeight}px`;
        };

        // Check if YouTube API is already available
        if (window.YT && window.YT.Player) {
            initializeYouTubePlayer();
        } else {
            // Load YouTube API script if not available
            if (!window.YT) {
                const tag = document.createElement("script");
                tag.src = "https://www.youtube.com/iframe_api";
                
                const firstScriptTag = document.getElementsByTagName("script")[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
            
            // Define global callback function
            window.onYouTubeIframeAPIReady = initializeYouTubePlayer;
        }

        // Cleanup function
        return () => {
            window.removeEventListener("resize", setYoutubeSize);
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, []); // Empty dependency array since we only want this to run once

    return (
        <div className="section-banner">
            <AnimateOnScroll animation="fadeInUp">
                <div
                    ref={videoContainerRef}
                    className="banner-video-container keep-dark"
                >
                    <div id="banner-video-background"></div>
                    <div className="hero-container position-relative">
                        <div className="d-flex flex-column gspace-2">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <h1 className="title-heading-banner">
                                    Ingenuity with intent strategy and creative work that endures
                                </h1>
                            </AnimateOnScroll>
                            <div className="banner-heading">
                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="banner-video-content order-lg-1 order-2">
                                        <div className="d-flex flex-column flex-lg-row text-lg-start text-center align-items-center gspace-5">
                                            <VideoButton videoUrl="https://youtu.be/FlB2qzJM3lw?si=JTAnnWDx7ko59Q42?autoplay=1" />
                                            <p>
                                                See how insight becomes strategy—and strategy becomes durable execution.
                                            </p>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="banner-content order-lg-2 order-1">
                                        <p>
                                            INGENIUM is a strategy and creative firm built on thinking that leads to
                                            durable execution. We help organisations turn insight into strategy, and
                                            strategy into work that holds up in the real world.
                                        </p>
                                        <div className="d-flex flex-md-row flex-column justify-content-center justify-content-lg-start align-self-center align-self-lg-start gspace-3">
                                            <a href="./about" className="btn btn-accent">
                                                <div className="btn-title">
                                                    <span>Learn More</span>
                                                </div>
                                                <div className="icon-circle">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </a>
                                            <div className="banner-reviewer">
                                                <div className="detail">
                                                    <h3>In <span><InWordMorph /></span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>  
            </AnimateOnScroll>
        </div>
    );
}

export default BannerHomeSection;