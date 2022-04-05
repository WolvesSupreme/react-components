import React from "react";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";


const Menu = () => {
  return (
    <div>
      <Slider slides={SliderData} />
    </div>
  );
};

export default Menu;
