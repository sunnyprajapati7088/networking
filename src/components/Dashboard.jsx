import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Get token

        const response = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` }, // Attach token
        });

        setUser(response.data.user);
      } catch (err) {
        console.error("Error fetching profile:", err);
        
      }
    };

    fetchProfile();
  }, []);
  console.log(user)
  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>Welcome, {user.user}!</p> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
