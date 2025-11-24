import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';


const Trainers = () => {
  const { user } = useUser();
  const adminEmails = ["arjunmamidala88@gmail.com"];
  const isAdmin = user && adminEmails.includes(user.primaryEmailAddress?.emailAddress);
  const { getToken } = useAuth(); 

  console.log("User object:", user);
  console.log("User email:", user?.primaryEmailAddress?.emailAddress);
  console.log("Is admin?", isAdmin);

  const [trainers, setTrainers] = useState([]);
  const [newTrainer, setNewTrainer] = useState({
    name: "",
    specialization: "",
    bio: "",
    image: "",
  })


  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const { data } = await axios.get("http://localhost:3105/api/trainers");
        setTrainers(data.trainers || []);
      }
      catch (error) {
        console.error("Error fetching trainers: ", error);
      }
    };

    fetchTrainers();
  }, []);

  const handleAddTrainer = async () => {
    const token = await getToken();
    try {
        await axios.post("http://localhost:3105/api/trainers/add", newTrainer, {
            headers: { Authorization: `Bearer ${token}` }
        });
        setTrainers([prev => [...prev, newTrainer]]);
        setNewTrainer({ name: "", specialization: "", bio: "", image: "" });
        alert("Trainer added successfully!");
    }
    catch (error) {
        console.error("Error adding trainer: ", error);
        alert("There was an error adding a trainer.");
    }
  }

  const handleDeleteTrainer = async(trainerId) => {
    const token = await getToken();
    try {
      await axios.delete(`http://localhost:3105/api/trainers/${trainerId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTrainers(prev => prev.filter(t => t._id !== trainerId));
      alert("Trainer deleted successfully!");
    }
    catch (error) {
      console.error("Error deleting trainer: ", error);
      alert("There was an error deleting the trainer.");
    }
  }

  return (
    <div className="trainers-page py-16 bg-gray-100">
      <section className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Our Trainers</h2>

        {/* Display trainers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="trainer-card bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            >
            <img
              src={trainer.image}
              alt={trainer.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{trainer.name}</h3>
            <p className="text-lg text-gray-600 mb-4">{trainer.specialization}</p>
            <p className="text-gray-600">{trainer.bio}</p>

            { isAdmin && (
              <button
              onClick={() => handleDeleteTrainer(trainer._id)}
              className="mt-4 w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete Trainer
            </button>
            )}

            </div>
          ))}
        </div>

        {/* Show "Add Trainer" button only for admin */}
        {isAdmin && (
          <div className="add-trainer-section mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Trainer</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAddTrainer();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Trainer Name"
                className="w-full p-4 border border-gray-300 rounded-lg"
                value={newTrainer.name}
                onChange={(e) =>
                  setNewTrainer({ ...newTrainer, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="specialization"
                className="w-full p-4 border border-gray-300 rounded-lg"
                value={newTrainer.specialization}
                onChange={(e) =>
                  setNewTrainer({ ...newTrainer, specialization: e.target.value })
                }
              />
              <textarea
                placeholder="Bio"
                className="w-full p-4 border border-gray-300 rounded-lg"
                value={newTrainer.bio}
                onChange={(e) =>
                  setNewTrainer({ ...newTrainer, bio: e.target.value })
                }
              />
              <input
                type="file"
                placeholder="Image URL"
                className="w-full p-4 border border-gray-300 rounded-lg"
                value={newTrainer.image}
                onChange={(e) =>
                  setNewTrainer({ ...newTrainer, image: e.target.value })
                }
              />
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-blue-600 text-black font-semibold rounded-lg hover:bg-blue-700"
              >
                Add Trainer
              </button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
};

export default Trainers;