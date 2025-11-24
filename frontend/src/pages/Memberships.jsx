import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';


const Memberships = () => {

  const { user, isLoaded } = useUser();
  const [loadingMap, setLoadingMap] = useState({});

  const memberships = ([
    {
      name: "Basic Plan",
      price: "30",
      duration: "per month",
      benefits: [
        "Access to Gym Facilities",
        "Free WiFi",
        "Free Parking",
      ],
    },
    {
      name: "Premium Plan",
      price: "50",
      duration: "per month",
      benefits: [
        "All Basic Plan Features",
        "Group Fitness Classes",
        "Nutritional Guidance",
      ],
    },
    {
      name: "VIP Plan",
      price: "80",
      duration: "per month",
      benefits: [
        "All Premium Plan Features",
        "Personalized Training",
        "Exclusive Workshops",
      ],
    },
  ]);

  const handleJoinNow = async (membership) => {
    if (!user) {
        alert("Please log in to subscribe.");
        return;
    }

    setLoadingMap({ [membership.name]: true });

    const userId = user.id;

    try {
        const response = await axios.post('http://localhost:3105/api/subscribe/create-checkout-session', {
            userId, 
            membershipName: membership.name, 
            membershipPrice: membership.price,
        });

        const checkoutUrl = response.data.url; // backend should return session.url
        window.location.href = checkoutUrl;
    }
    catch (error) {
        console.error("Error creating checkout session: ", error);
        if (error.response && error.response.data && error.response.data.error) {
            alert(error.response.data.error);  // Show the specific error message
        } else {
            alert("There was an error with your subscription");
        }
        setLoadingMap(prev => ({ ...prev, [membership.name]: false }));
    }
  }

  return (
    <div className="membership-page py-16 bg-gray-100">
      <section className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Choose Your Membership Plan</h2>
        
        {/* Membership Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memberships.map((membership, index) => (
            <div key={index} className="membership-card bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{membership.name}</h3>
              <p className="text-xl text-blue-600 mb-4">${membership.price}/{membership.duration}</p>
              <ul className="space-y-2 text-gray-600">
                {membership.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
              <button 
                  onClick={() => handleJoinNow(membership)}
                  disabled={loadingMap[membership.name]}
                  className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                >
              {loadingMap[membership.name] ? 'Processing...' : 'Join Now'}
            </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Memberships;
