import React from "react";
import assets from "../assets/assets";
import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white 
                 bg-[url('/src/assets/heroImage.jpg')] bg-no-repeat bg-cover bg-center h-screen"
      style={{ 
        backgroundImage: `url(${assets.nicegym})`,
        backgroundPositionY: `${scrollY * 0.5}px`
      }}
    >

      {/*Tagline*/}
      <div className="relative z-10"></div>
        <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20 text-sm md:text-base animate-fade-in-down">
          The Ultimate Gym Experience
        </p>

      {/* Main heading */}
      <h1 className="font-playfair text-3xl md:text-5xl md:text-[56px] md:leading-[56px] font-extrabold max-w-xl mt-4 animate-fade-in-up">
        Discover Your <span className="text-indigo-200">Stronger Self</span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-white/90 max-w-lg md:text-lg animate-fade-in-up delay-100">
        Train with expert coaches and world-class facilities designed for
        results. Join QuickFit and start your journey today.
      </p>

      {/* Call to actions */}
      <div className="mt-8 flex gap-3 animate-fade-in-up delay-200">
        <a
          href="/memberships"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:opacity-90 hover:scale-105 transition-transform"
        >
          View Memberships
        </a>
        <a
          href="/classes"
          className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/40 hover:bg-white/20 hover:scale-105 transition-transform"
        >
          See Classes
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
