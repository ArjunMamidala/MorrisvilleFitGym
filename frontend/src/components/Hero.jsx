import React from "react";
import assets from "../assets/assets";

export default function Hero() {
  return (
    <section
      className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white 
                 bg-[url('/src/assets/heroImage.jpg')] bg-no-repeat bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${assets.workingout})` }}
    >
      {/*Tagline*/}
      <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20 text-sm md:text-base">
        The Ultimate Gym Experience
      </p>

      {/* Main heading */}
      <h1 className="font-playfair text-3xl md:text-5xl md:text-[56px] md:leading-[56px] font-extrabold max-w-xl mt-4">
        Discover Your <span className="text-indigo-200">Stronger Self</span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-white/90 max-w-lg md:text-lg">
        Train with expert coaches and world-class facilities designed for
        results. Join QuickFit and start your journey today.
      </p>

      {/* Call to actions */}
      <div className="mt-8 flex gap-3">
        <a
          href="/memberships"
          className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:opacity-90"
        >
          View Memberships
        </a>
        <a
          href="/classes"
          className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/40 hover:bg-white/20"
        >
          See Classes
        </a>
      </div>
    </section>
  );
}
