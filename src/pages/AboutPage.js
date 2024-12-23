import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const AboutPage = () => {
  const { user } = userContext(AuthContext);

  return (
    <div>
      <h1>About Us</h1>
      <p>
        This project is designed to be a reusable React template for various
        projects.
      </p>
      {user ? (
        <p>
          Logged in as: <strong>{user.name}</strong>(Role:{user.role})
        </p>
      ) : (
        <p>You are not logged in. Please log in to access more features.</p>
      )}
    </div>
  );
};

export default AboutPage;
