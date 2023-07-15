import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { user } = useAuth0();

  return (
    <div>
      <h2>Welcome to the Dashboard, {user.name}!</h2>
    </div>
  );
};

export default Dashboard;
