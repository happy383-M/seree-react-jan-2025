import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Education from "./Component/Education";
import Home from "./Component/Home";
import Fruitlist from "./Component/FruitList"; // Corrected import path
import Properties from "./Component/Properties";
import Users from "./Component/Users";
import HandleFormState from "./Component/HandleFormState";
import HandleState from "./Component/HandleState";
import UCComponent from "./Component/UCComponent";
import UseEffect from "./Component/UseEffect";
import ChangeBGColour from "./Component/ChangeBGColour";
import Backgroundchangecolor from "./Component/Backgroundchangecolor";
import UseContext from "./Component/UseContext";
import UseCallback from "./Component/UseCallback";
import UseMemo from "./Component/UseMemo";
import UseNavigate from "./Component/UseNavigate";
import Forms from "./Component/Forms";
import ApiConnectivity from "./Component/ApiConnectivity";
import UseZustand from "./Component/UseZustand";

function App() {
  let fruits = [
    {
      name: "Apple",
      description: "Apples are sweet, crunchy fruits that are rich in fiber and vitamins.",
    },
    {
      name: "Banana",
      description: "Bananas are soft, sweet fruits that are a great source of potassium.",
    },
    {
      name: "Orange",
      description: "Oranges are juicy, tangy fruits packed with vitamin C.",
    },
  ];
  let USER = [
    {
      name: "Manas",
      age: 21,
      phone: "1234567890",
      email: "manas@email.com",
      photo: "https://sigmawire.net/i/04/uU6XV7.jpg",
    },
    {
      name: "Anshu",
      age: 22,
      phone: "0987654321",
      email: "anshu@email.com",
      photo: "https://sigmawire.net/i/04/02HpbS.png",
    },
    {
      name: "Omm",
      age: 23,
      phone: "1122334455",
      email: "omm@email.com",
      photo: "https://sigmawire.net/i/04/oE1rhP.png",
    },
    {
      name: "Aditya",
      age: 24,
      phone: "2233445566",
      email: "aditya@email.com",
      photo: "https://sigmawire.net/i/04/OGyJ1L.jpg",
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/props" element={<Properties name={"Manas"} age={"21"} />} />
          <Route path="/fruitlist" element={<Fruitlist fruits={fruits} />} />
          <Route path="/users" element={<Users USER={USER} />} />
          <Route path="/handleformstate" element={<HandleFormState />} />
          <Route path="/handlestate" element={<HandleState />} />
          <Route path="/uccomponent" element={<UCComponent />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route path="/changebgcolour" element={<ChangeBGColour />} />
          <Route path="/backgroundchangecolor" element={<Backgroundchangecolor />} />
          <Route path="/usecontext" element={<UseContext />} />
          <Route path="/usecallback" element={<UseCallback />} />
          <Route path="/usememo" element={<UseMemo />} />
          <Route path="/usenavigate" element={<UseNavigate />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/apiconnectivity" element={<ApiConnectivity />} />
          <Route path="/usezustand" element={<UseZustand />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
