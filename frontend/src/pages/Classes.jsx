import React from "react";
import assets from "../assets/assets"; // Ensure you have images for each class
import { Link } from "react-router-dom";

export default function Classes() {
  const classes = [
    {
      name: "Yoga",
      description: "A calming and meditative class that focuses on flexibility and mindfulness.",
      image: assets.yoga,
      schedule: "Mon, Wed, Fri - 6:00 PM to 7:00 PM",
    },
    {
      name: "Pilates",
      description: "A low-impact workout focusing on core strength, flexibility, and posture.",
      image: assets.pilatesnew,
      schedule: "Tue, Thu - 7:00 AM to 8:00 AM",
    },
    {
      name: "Cardio",
      description: "High-energy workout to get your heart pumping and improve cardiovascular health.",
      image: assets.cardio, 
      schedule: "Mon, Wed - 7:00 AM to 8:00 AM",
    },
    {
      name: "Indoor Cycling",
      description: "Spin your way to fitness in an indoor cycling class designed to improve endurance.",
      image: assets.indoorcycling,
      schedule: "Mon, Fri - 8:00 AM to 9:00 AM",
    },
    {
      name: "Strength Training",
      description: "Build muscle and increase strength through weightlifting and resistance exercises.",
      image: assets.strengthtraining,
      schedule: "Tue, Thu, Sat - 6:00 PM to 7:00 PM",
    },
    {
      name: "Zumba",
      description: "A fun dance workout that combines Latin and international music with dance moves.",
      image: assets.zumba, 
      schedule: "Mon, Wed - 6:00 PM to 7:00 PM",
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Our Classes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={cls.image}
                alt={cls.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{cls.name}</h3>
              <p className="text-gray-600 mb-4">{cls.description}</p>
              <p className="text-gray-600 mb-4">{cls.schedule}</p>
              <Link to={`/classes/${cls.name}`} className="text-blue-600 hover:underline">
                See More Details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
