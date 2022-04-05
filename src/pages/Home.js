import React from "react";
import Header from "../components/Pages/Home/Header";
import Flotante from "../components/Buttons/Flotante";
import Cuarto from "../components/Pages/Home/Cuarto";
import Horario from "../components/Pages/Home/Horario";
import Services from "../components/Pages/Home/Services";
import Personal from "../components/Pages/Home/Personal";
//import PruebaCard from "../components/Pages/Home/PruebaCard";
import Abouts from "../components/Pages/Home/Abouts";

const Home = () => {
  return (
    <>
      <Header />
      {/* <PruebaCard/> */}
      <Abouts/>
      <Cuarto />
      <Personal />
      <Services />
      <Horario />
      <Flotante />
    </>
  );
};

export default Home;
