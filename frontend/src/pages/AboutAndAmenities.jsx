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
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              About Our Gym
            </h2>
            <p className="text-gray-600 mb-4 text-lg">
              At MorrisvilleFit, we’re committed to helping you achieve your
              fitness goals. Our experienced trainers, modern equipment, and
              welcoming community make every workout effective and enjoyable.
            </p>
            <p className="text-gray-600 text-lg">
              Whether you’re starting your fitness journey or looking to level
              up, we provide a supportive environment where everyone can thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-white shadow-lg rounded-xl">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Our Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Free Weights
            </h3>
            <p className="text-gray-600">
              A wide variety of free weights to build strength and target specific muscle groups. Definitely try them out if you want to better your balance and coordination as you are in full control of the weight you're picking up.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Machines
            </h3>
            <p className="text-gray-600">
              A selection of machines for strength training, targeting every muscle group to enhance your workout. For beginners, these are strongly recommended as they teach the form.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Barbells
            </h3>
            <p className="text-gray-600">
              Heavy-duty barbells for serious lifters, perfect for compound movements and maximizing strength.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Group Fitness Classes
            </h3>
            <p className="text-gray-600">
              Join a variety of group fitness classes including yoga, HIIT, spinning, and more to stay motivated.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Sauna & Relaxation
            </h3>
            <p className="text-gray-600">
              Unwind after a tough session with our sauna and dedicated relaxation areas, helping to ease muscle tension.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Locker Rooms
            </h3>
            <p className="text-gray-600">
              Secure lockers, showers, and changing areas to keep your belongings safe and stay fresh.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Nutrition Bar
            </h3>
            <p className="text-gray-600">
              Grab a post-workout protein shake, snack, or hydration boost at our on-site nutrition bar.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Hydromassage Machines
            </h3>
            <p className="text-gray-600">
              Relax with our hydromassage machines to soothe tired muscles and speed up recovery.
            </p>
          </div>

          {/* New Amenities */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Cardio Machines
            </h3>
            <p className="text-gray-600">
              Get your heart pumping with our state-of-the-art treadmills, ellipticals, and stationary bikes.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Personal Training
            </h3>
            <p className="text-gray-600">
              Work with our certified personal trainers for customized workout plans and guidance.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out text-center">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Stretching Area
            </h3>
            <p className="text-gray-600">
              A dedicated area for stretching and flexibility exercises to help you recover and improve mobility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
