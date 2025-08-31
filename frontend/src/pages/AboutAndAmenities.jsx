import React from "react";
import assets from "../assets/assets";

export default function AboutAndAmenities() {
  return (
    <div className="w-full bg-gray-50">
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={assets.aboutGym}
              alt="Our Gym"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Our Gym
            </h2>
            <p className="text-gray-600 mb-4">
              At MorrisvilleFit, we’re committed to helping you achieve your
              fitness goals. Our experienced trainers, modern equipment, and
              welcoming community make every workout effective and enjoyable.
            </p>
            <p className="text-gray-600">
              Whether you’re starting your fitness journey or looking to level
              up, we provide a supportive environment where everyone can thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      {/* Amenities Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              State-of-the-Art Equipment
            </h3>
            <p className="text-gray-600">
              Our gym is equipped with the latest cardio and strength machines
              to ensure a complete workout experience.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Personal Training
            </h3>
            <p className="text-gray-600">
              Work with our certified trainers to get customized workout plans
              tailored to your fitness goals.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Group Classes
            </h3>
            <p className="text-gray-600">
              Join a variety of group fitness classes including yoga, HIIT,
              spinning, and more to stay motivated.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Sauna & Relaxation
            </h3>
            <p className="text-gray-600">
              Unwind after a tough session with our sauna and dedicated
              relaxation areas.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Locker Rooms
            </h3>
            <p className="text-gray-600">
              Secure lockers, showers, and changing areas to keep your
              belongings safe and stay fresh.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Nutrition Bar
            </h3>
            <p className="text-gray-600">
              Grab a post-workout protein shake, snack, or hydration boost at
              our on-site nutrition bar.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
