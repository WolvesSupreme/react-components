import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddIcon from "@mui/icons-material/Add";

const Flotante = () => {
  return (
    <div className="argumento">
      <input type="checkbox" id="btn-mas"></input>
      <div className="redes">
        <a href="https://www.facebook.com/StuwarGironGarcia/" target='_blank'>
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/stuwar0306/" target='_blank'>
          <TwitterIcon />
        </a>
        <a href="https://twitter.com/NeoAtla" target='_blank'>
          <InstagramIcon />
        </a>
      </div>
      <div className="btn-mas">
        <label htmlFor="btn-mas"><AddIcon/></label>
      </div>
    </div>
  );
};

export default Flotante;
