import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./component/login";
import { Home } from "./component/home";
import { Navigation } from "./component/navigation";
import { Logout } from "./component/logout";
import { Profile } from "./component/profile";
import { ProductPage } from "./component/productPage";
import { AR } from "./component/ar";
import React from "react";
import img_profile000 from "./assets/profiles/JaneDoePP.png";
import img000_G_000 from "./assets/products/000-G-000.png";
import img000_G_001 from "./assets/products/000-G-001.png";
import img000_G_002 from "./assets/products/000-G-002.png";
import img000_G_003 from "./assets/products/000-G-003.png";
import img000_G_004 from "./assets/products/000-G-004.png";
import img000_G_005 from "./assets/products/000-G-005.png";
import img000_G_006 from "./assets/products/000-G-006.png";
import img000_G_007 from "./assets/products/000-G-007.png";
import img000_G_008 from "./assets/products/000-G-008.png";
import img000_G_009 from "./assets/products/000-G-009.png";
import img000_G_010 from "./assets/products/000-G-010.png";
import img000_G_011 from "./assets/products/000-G-011.png";
import img000_G_012 from "./assets/products/000-G-012.png";
import img000_G_013 from "./assets/products/000-G-013.png";
import img000_G_014 from "./assets/products/000-G-014.png";
import bape from "./assets/companies/Bape.png";
import balenciaga from "./assets/companies/Balenciaga.png";
import botega from "./assets/companies/BotegaVeneta.png";
import fauves from "./assets/companies/Fauves.png";
import givenchy from "./assets/companies/Givenchy.png";
import loewe from "./assets/companies/Loewe.png";
import loropiana from "./assets/companies/LoroPiana.png";
import vuitton from "./assets/companies/LouisVuitton.png";
import mason from "./assets/companies/Mason.png";
import moncler from "./assets/companies/Moncler.png";
import nikeVuitton from "./assets/companies/NikeVuitton.png";
import prada from "./assets/companies/Prada.png";

const user = {
  userName: "John Doe",
  profilePic: img_profile000,
  products: [
    {
      name: "Sta Low",
      company: bape,
      image: img000_G_000,
      pid: "aveVTXZoFng8",
      anid: "000_G_000",
      materials: ["Green patent leather", "GREEN/WHITE"],
      production: ["Shibuya, Tokyo", "Japan"],
      purchase: "BAPE Soho",
      value: 978.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Puzzle Fold Tote Bag",
      company: loewe,
      image: img000_G_001,
      pid: "HpTCBTSnkN8k",
      anid: "000_G_001",
      materials: ["Yellow leather (Calf)", "Suede Lining"],
      production: ["Serrano, Madrid", "Spain"],
      purchase: "Loewe Serrano, Madrid",
      value: 3450.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Pinstripe Herringbone Blazer",
      company: loropiana,
      image: img000_G_002,
      pid: "YEG2RMgrmAcu",
      anid: "000_G_002",
      materials: ["100% cashmere", "Brown Green Storm System®", "cashmere"],
      production: ["Milano, Italia"],
      purchase: "Mr Porter",
      value: 5950.0,
      sustainability: 2.6,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Elephant Leather Messenger Bag",
      company: loewe,
      image: img000_G_003,
      pid: "pSD5DQ76crda",
      anid: "000_G_003",
      materials: ["Green leather (Calf)", "Designer colour: Hunter Green"],
      production: ["Goya, Madrid", "Spain"],
      purchase: "Loewe Serrano, Madrid",
      value: 2450.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Felpa Hoodie Distroyed",
      company: givenchy,
      image: img000_G_004,
      pid: "vYWCjoPj2X6e",
      anid: "000_G_004",
      materials: ["100% cotton", "Size XS", "Khaki"],
      production: ["Porto, Portugal"],
      purchase: "Givenchy.com",
      value: 1350,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Monogram Wood Skateboard",
      company: vuitton,
      image: img000_G_005,
      pid: "zcBgerMRv3G4",
      anid: "000_G_005",
      materials: ["100% oak wood", "Multicolor"],
      production: ["New York City", "USA"],
      purchase: "Fashionfile",
      value: 2565.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Bulldozer Marker Lug-Sole Boots",
      company: balenciaga,
      image: img000_G_006,
      pid: "6hUtvkdmmM6K",
      anid: "000_G_006",
      materials: ["Leather (Calf)", "Black"],
      production: ["Rome, Italy"],
      purchase: "Bergdorf Goodman",
      value: 1850.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "James BOB, 2019",
      company: fauves,
      image: img000_G_007,
      pid: "4eJmawec5dSp",
      anid: "000_G_007",
      materials: ["Mixed media on canvas", "66 x 52 x 2 in"],
      production: ["New York City", "USA"],
      purchase: "Artsy.net",
      value: 20000.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Peuplier Logo Quilted",
      company: moncler,
      image: img000_G_008,
      pid: "QUgqaK8q28eF",
      anid: "000_G_008",
      materials: ["100% polyamide", "filling: 90% down", "YELLOW/BLACK"],
      production: ["Paris, France"],
      purchase: "Mr Porter",
      value: 1350.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Prada 'Frankenstein' Jacket FW19",
      company: prada,
      image: img000_G_009,
      pid: "E4EQeosrR2VF",
      anid: "000_G_009",
      materials: ["Nylon", "Size M", "BLACK/LIME GREEN"],
      production: ["Milano, Italy"],
      purchase: "Sumunage",
      value: 995.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Annato, 2007",
      company: mason,
      image: img000_G_010,
      pid: "3HgsFCTVekZ5",
      anid: "000_G_010",
      materials: ["Oil on canvas", "44 x 32in"],
      production: ["New York City", "USA"],
      purchase: "Artsy.net",
      value: 28000.0,
      sustainability: 0.46,
      owners: 3,
      inWallet: true,
    },
    {
      name: "LV x Nike Abloh 43",
      company: nikeVuitton,
      image: img000_G_011,
      pid: "BxmHoJp85679",
      anid: "000_G_011",
      materials: ["Leather (Calf)", "RED/WHITE"],
      production: ["Paris, France"],
      purchase: "1stdibs.com",
      value: 14475.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Teen Pouch Small",
      company: botega,
      image: img000_G_012,
      pid: "2afzsvGm82ty",
      anid: "000_G_012",
      materials: [
        "Green leather (Calf)",
        "Magnetic-fastening top",
        "Designer color: Parakeet",
      ],
      production: ["Via Privata Ercole Marelli, 6", "Milan, Italy 20139 "],
      purchase: "RealReal",
      value: 3600.0,
      sustainability: 0.46,
      owners: 2,
      inWallet: true,
    },
    {
      name: "Cassette Medium",
      company: botega,
      image: img000_G_013,
      pid: "z8UPLoALmbnM",
      anid: "000_G_013",
      materials: ["Black leather (Lamb)", "Clasp-fastening front flap"],
      production: ["Via Privata Ercole Marelli, 6", "Milan, Italy 20139 "],
      purchase: "Bottega Veneta - Fifth Ave, NYC",
      value: 4500.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
    {
      name: "Padded Cashmere Bomber Jacket",
      company: loropiana,
      image: img000_G_014,
      pid: "Hz9VvPfRFat6",
      anid: "000_G_014",
      materials: ["100% Cashmere", "Brown Green Storm System®"],
      production: ["Milano, Italia"],
      purchase: "Mr Porter",
      value: 5550.0,
      sustainability: 0.46,
      owners: 1,
      inWallet: true,
    },
  ],
};

function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home {...user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile {...user} />} />
        <Route path="/logout" element={<Logout />} />
        {user.products.map((product, index) => (
          <Route
            key={index}
            path={`/product/${product.anid}`}
            element={<ProductPage product={product} />}
          />
        ))}
        <Route path="/ar" element={<AR />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
