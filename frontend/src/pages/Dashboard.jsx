import { useAuth, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
    const { user, isLoaded } = useUser();
    const { getToken } = useAuth();
    const [userInfo, setUserInfo] = useState(null);  

    useEffect(() => {
        if (!isLoaded || !user) {
            console.log("❌ Not loaded or no user:", { isLoaded, user });
            return;
        }
        const fetchProfile = async () => {
            try {
                console.log("👤 Clerk user:", user);
                console.log("📧 User email:", user.primaryEmailAddress?.emailAddress);
                console.log("🆔 Clerk ID:", user.id);
                const token = await getToken();
                const { data } = await axios.get("http://localhost:3105/api/user/me", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                console.log("✅ User data received:", data);
                setUserInfo(data?.user ?? null);
            }
            catch (error) {
                console.error("Error fetching user info: ", error);
                console.error("❌ Error response:", error.response?.data);
                console.error("❌ Error status:", error.response?.status);
                setError(error.response?.data?.message || "Failed to load user data");
                setLoading(false);
            }
        };

        fetchProfile();
    }, [getToken, isLoaded, user]);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
    <div className="dashboard max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Welcome, {userInfo.name}!
      </h1>

      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
        {/* User Avatar */}
        <div className="flex-shrink-0">
          <img
            src={userInfo.image || "https://via.placeholder.com/150"}
            alt={userInfo.username}
            className="w-32 h-32 rounded-full border-4 border-blue-600 object-cover"
          />
        </div>

        {/* User Info */}
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">Profile Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-medium">Email:</p>
              <p>{userInfo.email}</p>
            </div>
            <div>
              <p className="font-medium">Role:</p>
              <p className="capitalize">{userInfo.role}</p>
            </div>
            {/* Add more user info here */}
          </div>
        </div>
      </div>

      {/* Optional: Add activity or membership info */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Memberships & Activity</h2>
        <div className="bg-blue-50 p-6 rounded-lg shadow-inner text-gray-800">
          <p>Here you can display user-specific memberships, upcoming classes, or recent activity.</p>
        </div>
      </div>
    </div>
  );

  
};

export default Dashboard;
