import "../App.css";
import React from "react";
import sampleBarcode from "../assets/brand/barcode-sample.png";
import antheaWallet from "../assets/brand/antheaWallet.png";
import ar from "../assets/brand/ar.png";
import { Link } from "react-router-dom";

export const ProductPage = ({ product }) => {
  return (
    <div className="product-passport">
      <Link to={`/ar`}>
        {/* <Link to={`/ar/${product.anid}`}> */}
        <img
          className="productButtons"
          src={ar}
          style={{ cursor: "pointer" }}
        ></img>
      </Link>

      <img
        className="product-thumbnail"
        src={product.image}
        alt={`Product`}
      ></img>
      <div className="product-card">
        <img className="companyLogo" src={product.company} alt=""></img>
        <h2 className="productName">{product.name}</h2>
        <div className="cardContent">
          <div className="cardRow">
            <h4>{"PID"}</h4>
            <div className="cardColumn">
              <h5>{product.pid}</h5>
            </div>
          </div>
          <div className="cardRow">
            <h4>{"AnID"}</h4>
            <div className="cardColumn">
              <h5>{product.anid}</h5>
            </div>
          </div>
          <div className="cardRow">
            <h4>{"Materials"}</h4>
            <div className="cardColumn">
              {product.materials.map((material, index) => (
                <h5 key={index}>{material}</h5> // Added key here
              ))}
            </div>
          </div>
          <div className="cardRow">
            <h4>Production</h4>
            <div className="cardColumn">
              {product.production.map((prod, index) => (
                <h5 key={index}>{prod}</h5> // Added key here
              ))}
            </div>
          </div>
          <div className="cardRow">
            <h4>Purchase</h4>
            <div className="cardColumn">
              <h5>{product.purchase}</h5>
            </div>
          </div>
          <div className="cardRow">
            <h4>Value</h4>
            <div className="cardColumn">
              <h5>
                $
                {product.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h5>
            </div>
          </div>
          <div className="cardRow">
            <h4>Sustainability</h4>
            <div className="cardColumn">
              <h5>
                {product.sustainability}kg/CO<sub>2</sub>e
              </h5>
            </div>
          </div>
          <div className="cardRow">
            <h4># Owners</h4>
            <div className="cardColumn">
              <h5>{product.owners}</h5>
            </div>
          </div>
        </div>
        <img src={sampleBarcode} className="barcode" alt=""></img>
        <p>{product.anid}</p>
      </div>
      <img src={antheaWallet} alt="" className="antheaWallet"></img>
    </div>
  );
};
