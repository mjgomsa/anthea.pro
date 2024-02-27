import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import mobileBackgroundImage from "../assets/brand/anthea-blu-mobile.png";
import desktopBackgroundImage from "../assets/brand/anthea-blu-desktop.png";

export const Home = (user) => {
  // const [message, setMessage] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(
    desktopBackgroundImage
  );

  useEffect(() => {
    const checkScreenSize = () => {
      // Set threshold for mobile devices, e.g., 768px
      const threshold = 768;
      const screenWidth = window.innerWidth;
      if (screenWidth < threshold) {
        setBackgroundImage(mobileBackgroundImage);
      } else {
        setBackgroundImage(desktopBackgroundImage);
      }
    };

    // Call checkScreenSize on component mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("access_token") === null) {
      window.location.href = "/login";
    } else {
      (async () => {
        try {
          const { data } = await axios.get("http://localhost:8000/home/", {
            headers: {
              "Content-Type": "application/json",
            },
          });

          // setMessage(data.message);
        } catch (e) {
          console.log("not auth");
        }
      })();
    }
  }, []);

  return (
    <div
      className="form-signin text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain", // Changed to cover to ensure it covers the whole screen without repeating
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h3 style={{ color: "black" }}>Welcome back, {user.userName}</h3>
    </div>
  );
};
