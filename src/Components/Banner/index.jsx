import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

// Particles.js (UMD) attaches window.particlesJS
import "particles.js";

// Background image served from /public
const bannerBg = "/assets/images/ingenium-banner-bg.png";

// Ingenium brand colors
const BRAND = {
  teal: "#00C2B8",
  blue: "#00A3FF",
  orange: "#F55A1F",
  gold: "#C9A227",
  dark: "#08080D",
  white: "#FFFFFF",
};

// ----------------------------
// BIG BOLD WORDS (CENTER)
// Animates in -> slams to center -> shakes -> slides out
// ----------------------------
function SlamWords({
  words = ["INTEGRITY", "INFLUENCE", "INSIGHT", "INGENIUM"],
  intervalMs = 2200,
}) {
  const [idx, setIdx] = useState(0);
  const reduceMotion = useReducedMotion();

  const accents = [BRAND.gold, BRAND.orange, BRAND.blue, BRAND.teal];

  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % words.length), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, words.length]);

  const word = words[idx] || "INGENIUM";
  const accent = accents[idx % accents.length];

  return (
    <div className="slam" aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${word}-${idx}`}
          className="slam__word"
          style={{
            backgroundImage: `linear-gradient(90deg, ${accent}, rgba(255,255,255,0.92))`,
            boxShadow: `0 0 0 1px ${accent}22 inset`,
          }}
          initial={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  x: 120,
                  y: 40,
                  scale: 0.78,
                  rotate: 6,
                  filter: "blur(14px)",
                }
          }
          animate={
            reduceMotion
              ? { opacity: 0.16 }
              : {
                  opacity: [0, 0.14, 0.16],
                  x: [120, 0, -6, 6, -4, 4, 0],
                  y: [40, 0, 2, -2, 2, -2, 0],
                  rotate: [6, 0, -0.6, 0.6, -0.35, 0.35, 0],
                  scale: [0.78, 1.02, 1.0],
                  filter: ["blur(14px)", "blur(0px)", "blur(0px)"],
                }
          }
          exit={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  x: -160,
                  y: -40,
                  scale: 1.06,
                  rotate: -6,
                  filter: "blur(16px)",
                }
          }
          transition={{
            duration: 1.05,
            ease: [0.22, 1, 0.36, 1],
            times: reduceMotion ? undefined : [0, 0.55, 1],
          }}
        >
          {word}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ----------------------------
// KINETIC WORDS (BOTTOM-RIGHT)
// Separate in/out animations + brand color cycling
// ----------------------------
function KineticWords({
  words = ["INSIGHT", "INFLUENCE", "INTEGRITY", "INGENIUM"],
  intervalMs = 2400,
}) {
  const [idx, setIdx] = useState(0);
  const reduceMotion = useReducedMotion();
  const accents = [BRAND.teal, BRAND.blue, BRAND.orange, BRAND.gold];

  useEffect(() => {
    const t = setInterval(() => setIdx((v) => (v + 1) % words.length), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, words.length]);

  const word = words[idx] || "INGENIUM";
  const accent = accents[idx % accents.length];

  return (
    <div className="banner-kinetic banner-kinetic--br" aria-hidden="true">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${word}-${idx}`}
          className="banner-kinetic__word"
          style={{
            backgroundImage: `linear-gradient(90deg, ${accent}, rgba(255,255,255,0.92))`,
            boxShadow: `0 0 0 1px ${accent}22 inset, 0 12px 48px rgba(0,0,0,0.35)`,
          }}
          initial={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  x: 26,
                  y: 16,
                  scale: 0.92,
                  rotate: 2,
                  filter: "blur(14px)",
                  clipPath: "inset(0 0 100% 0)",
                }
          }
          animate={
            reduceMotion
              ? { opacity: 0.95 }
              : {
                  opacity: 0.95,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                  filter: "blur(0px)",
                  clipPath: "inset(0 0 0% 0)",
                }
          }
          exit={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  x: -10,
                  y: -22,
                  scale: 1.08,
                  rotate: -2,
                  filter: "blur(16px)",
                  clipPath: "inset(100% 0 0 0)",
                }
          }
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function BannerHomeSection() {
  const reduceMotion = useReducedMotion();

  // Particles background (repulse)
  useEffect(() => {
    const initParticles = () => {
      if (!window.particlesJS) return;

      // Destroy existing instances (HMR / route changes)
      try {
        if (window.pJSDom && window.pJSDom.length) {
          window.pJSDom.forEach((p) => p?.pJS?.fn?.vendors?.destroypJS?.());
          window.pJSDom.length = 0;
        }
      } catch {}

      window.particlesJS("particles-js", {
        particles: {
          number: { value: 86, density: { enable: true, value_area: 950 } },
          color: { value: [BRAND.teal, BRAND.blue, BRAND.orange, BRAND.gold] },
          shape: { type: "circle" },
          opacity: { value: 0.42, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 145,
            color: BRAND.teal,
            opacity: 0.16,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.25,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 170, duration: 0.45 },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      });
    };

    const raf = requestAnimationFrame(initParticles);

    return () => {
      cancelAnimationFrame(raf);
      try {
        if (window.pJSDom && window.pJSDom.length) {
          window.pJSDom.forEach((p) => p?.pJS?.fn?.vendors?.destroypJS?.());
          window.pJSDom.length = 0;
        }
      } catch {}
    };
  }, []);

  return (
    <section className="section-banner section-banner--xl">
      <AnimateOnScroll animation="fadeInUp">
        <div className="banner-hero keep-dark">
          {/* Particles background */}
          <div id="particles-js" className="banner-particles" aria-hidden="true" />

          {/* Big slam words (center) */}
          <SlamWords />

          {/* Overlay tint */}
          <div className="banner-overlay" aria-hidden="true" />

          {/* Content */}
          <div className="hero-container">
            <div className="hero-grid">
              <div className="hero-copy">
                <motion.div
                  className="hero-chiprow"
                  initial={reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={reduceMotion ? false : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="chip chip--teal">Strategic</span>
                  <span className="chip chip--blue">Creative</span>
                  <span className="chip chip--orange">Digital</span>
                </motion.div>

                <motion.h1
                  className="hero-title"
                  initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(10px)" }}
                  animate={reduceMotion ? false : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                >
                  Build with <span className="hero-title__grad">Ingenium</span>
                </motion.h1>

                <motion.p
                  className="hero-sub"
                  initial={reduceMotion ? false : { opacity: 0, y: 14, filter: "blur(8px)" }}
                  animate={reduceMotion ? false : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
                >
                  Strategy, creative, and digital execution — engineered to move brands forward.
                </motion.p>

                <motion.div
                  className="hero-actions"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
                >
                  <a href="/contact" className="btn-ingenium btn-ingenium--primary">
                    Let’s Talk
                  </a>
                  <a href="/services" className="btn-ingenium btn-ingenium--ghost">
                    Explore Services
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="hero-right"
                initial={reduceMotion ? false : { opacity: 0, x: 26, filter: "blur(10px)" }}
                animate={reduceMotion ? false : { opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              >
                <div className="hero-card">
                  <div className="hero-card__glow" aria-hidden="true" />
                  <div className="hero-card__title">Ingenium Momentum</div>
                  <div className="hero-card__text">
                    Bold strategy + modern creative + measurable digital execution — in one team.
                  </div>
                  <div className="hero-card__bars">
                    <span className="bar bar--teal" />
                    <span className="bar bar--blue" />
                    <span className="bar bar--orange" />
                    <span className="bar bar--gold" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom-right kinetic words */}
          <KineticWords />
        </div>
      </AnimateOnScroll>

      <style>{`
        .banner-hero{
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 100vh;
          height: 100vh;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: ${BRAND.dark};
          background-image: url(${bannerBg});
          background-size: cover;
          background-position: center;
        }

        /* Particles layer */
        .banner-particles{
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: auto;
        }
        .banner-particles canvas{ pointer-events: none; }

        /* Big slam words layer */
        .slam{
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          display: grid;
          place-items: center;
          mix-blend-mode: screen;
        }
        .slam__word{
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.10em;
          line-height: 1;
          text-align: center;
          font-size: clamp(70px, 12vw, 210px);
          padding: 0 18px;
          opacity: 0.16;

          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;

          text-shadow: 0 18px 80px rgba(0,0,0,0.55);
          filter: drop-shadow(0 18px 60px rgba(0,0,0,0.35));
        }

        /* Overlay tint */
        .banner-overlay{
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background:
            radial-gradient(1100px 560px at 50% 20%, rgba(0,194,184,0.18), transparent 60%),
            radial-gradient(900px 520px at 72% 65%, rgba(0,163,255,0.14), transparent 60%),
            radial-gradient(900px 520px at 22% 70%, rgba(245,90,31,0.10), transparent 60%),
            linear-gradient(to bottom, rgba(8,8,13,0.18), rgba(8,8,13,0.88));
        }

        /* Content */
        .hero-container{
          position: relative;
          z-index: 4;
          height: 100%;
          display: flex;
          align-items: center;
          padding: clamp(80px, 9vw, 140px) 0;
        }

        .hero-grid{
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 18px;
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: clamp(18px, 3vw, 40px);
          align-items: center;
        }

        .hero-chiprow{
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 14px;
        }

        .chip{
          font-weight: 700;
          letter-spacing: 0.04em;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 12px;
          backdrop-filter: blur(10px);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.10);
          color: #fff;
        }
        .chip--teal{ box-shadow: 0 0 0 1px rgba(0,194,184,0.18) inset; }
        .chip--blue{ box-shadow: 0 0 0 1px rgba(0,163,255,0.18) inset; }
        .chip--orange{ box-shadow: 0 0 0 1px rgba(245,90,31,0.18) inset; }

        .hero-title{
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.02em;
          color: #fff;
          font-size: clamp(44px, 5.4vw, 84px);
          margin: 0 0 12px 0;
          text-shadow: 0 18px 70px rgba(0,0,0,0.55);
        }

        .hero-title__grad{
          background: linear-gradient(90deg, ${BRAND.teal}, ${BRAND.blue}, ${BRAND.orange});
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-sub{
          margin: 0;
          max-width: 680px;
          color: rgba(255,255,255,0.86);
          font-weight: 600;
          line-height: 1.6;
          font-size: clamp(15px, 1.45vw, 18px);
          text-shadow: 0 18px 70px rgba(0,0,0,0.35);
        }

        .hero-actions{
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 18px;
          align-items: center;
        }

        .btn-ingenium{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 12px 18px;
          font-weight: 800;
          letter-spacing: 0.02em;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.06);
          color: #fff;
          text-decoration: none;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
          backdrop-filter: blur(12px);
        }
        .btn-ingenium:hover{
          transform: translateY(-1px);
          border-color: rgba(255,255,255,0.24);
          background: rgba(255,255,255,0.09);
        }
        .btn-ingenium--primary{
          border-color: rgba(0,194,184,0.35);
          background: linear-gradient(90deg, rgba(0,194,184,0.22), rgba(0,163,255,0.16), rgba(245,90,31,0.14));
          box-shadow: 0 18px 50px rgba(0,0,0,0.35);
        }
        .btn-ingenium--ghost{ border-color: rgba(255,255,255,0.12); }

        /* Right card */
        .hero-card{
          position: relative;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(8,8,13,0.35);
          backdrop-filter: blur(14px);
          padding: 18px 18px;
          overflow: hidden;
          box-shadow: 0 18px 70px rgba(0,0,0,0.45);
        }
        .hero-card__glow{
          position: absolute;
          inset: -80px;
          background:
            radial-gradient(300px 220px at 35% 35%, rgba(0,194,184,0.18), transparent 60%),
            radial-gradient(300px 220px at 70% 60%, rgba(0,163,255,0.14), transparent 60%),
            radial-gradient(300px 220px at 55% 75%, rgba(245,90,31,0.10), transparent 60%);
          filter: blur(10px);
          opacity: 0.95;
          animation: glowPulse 5.8s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes glowPulse{
          0%{ transform: scale(1); opacity: .85; }
          50%{ transform: scale(1.04); opacity: 1; }
          100%{ transform: scale(1); opacity: .85; }
        }

        .hero-card__title{
          position: relative;
          z-index: 1;
          font-weight: 900;
          font-size: 18px;
          letter-spacing: 0.02em;
          color: #fff;
        }
        .hero-card__text{
          position: relative;
          z-index: 1;
          margin-top: 8px;
          color: rgba(255,255,255,0.85);
          font-weight: 600;
          line-height: 1.55;
          font-size: 14px;
        }

        .hero-card__bars{
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-top: 14px;
        }
        .bar{ height: 6px; border-radius: 999px; background: rgba(255,255,255,0.10); overflow: hidden; position: relative; }
        .bar::after{ content:""; position:absolute; inset:0; transform: translateX(-40%); animation: slide 2.8s ease-in-out infinite; opacity: .9; }
        @keyframes slide{ 0%{ transform: translateX(-50%); } 50%{ transform: translateX(0%); } 100%{ transform: translateX(-50%); } }
        .bar--teal::after{ background: linear-gradient(90deg, transparent, ${BRAND.teal}, transparent); }
        .bar--blue::after{ background: linear-gradient(90deg, transparent, ${BRAND.blue}, transparent); }
        .bar--orange::after{ background: linear-gradient(90deg, transparent, ${BRAND.orange}, transparent); }
        .bar--gold::after{ background: linear-gradient(90deg, transparent, ${BRAND.gold}, transparent); }

        /* Bottom-right kinetic */
        .banner-kinetic--br{
          position: absolute;
          right: clamp(16px, 3vw, 44px);
          bottom: clamp(14px, 3vh, 42px);
          z-index: 5;
          pointer-events: none;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
        .banner-kinetic__word{
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          line-height: 1;
          text-align: right;
          font-size: clamp(18px, 3vw, 44px);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 18px 70px rgba(0,0,0,0.45);
          padding: 8px 12px;
          border-radius: 16px;
          background-color: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
        }

        @media (max-width: 991px){
          .hero-grid{ grid-template-columns: 1fr; }
          .hero-right{ display:none; }
          .slam__word{ font-size: clamp(56px, 14vw, 120px); letter-spacing: 0.08em; }
          .banner-kinetic__word{ font-size: clamp(16px, 5vw, 28px); letter-spacing: 0.10em; }
        }
      `}</style>
    </section>
  );
}

export default BannerHomeSection;
