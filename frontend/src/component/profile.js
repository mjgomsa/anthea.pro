import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import pattern from "../assets/brand/pattern.png";

export const Profile = ({ userName, profilePic, products }) => {
  // Filter products where inWallet is true before calculating the sum
  const sum = products
    .filter((product) => product.inWallet)
    .reduce((acc, product) => acc + product.value, 0);

  return (
    <div className="user-profile">
      <div
        className="header"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: "cover", // Changed to cover to ensure it covers the whole screen without repeating
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "40%",
        }}
      >
        <img className="profilePicture" src={profilePic} alt="profile"></img>
      </div>
      <div className="body-prof">
        <h2 className="prof_name">{userName}</h2>
      </div>

      <div className="image-gallery">
        <p className="valuationParagraph">
          Collection valued at{" "}
          <span style={{ fontWeight: "700" }}>
            ${sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </p>

        <div className="gallery-container">
          {products
            .filter((product) => product.inWallet)
            .map((product, index) => (
              <Link
                key={index}
                to={`/product/${product.anid}`} // Replace with your desired route
              >
                <img
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
