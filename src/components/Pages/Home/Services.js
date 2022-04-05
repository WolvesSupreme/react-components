import React from "react";
import service1 from "../../../img/card-1.jpg";
import service2 from "../../../img/card-2.jpg";
import service3 from "../../../img/card-3.jpg";
import cuidad from "../../../img/img-8.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const [dataPrinciapl] = React.useState({
    title: "OUR PACKAGES",
    subtitle: "OUR RATES",
    descrpcion:
      "Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit. Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit.",
  });
  const data = [
    {
      type: "OIL MASSAGE",
      text: "Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.",
      image: service1,
    },
    {
      type: "STEAM BATH",
      text: "Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.",
      image: service2,
    },
    {
      type: "STONE TREATMENT",
      text: "Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.",
      image: service3,
    },
  ];
  return (
    <section>
      <div className="services">
        <h2 className="services__title">{dataPrinciapl.title}</h2>
        <p className="services__subtitle">{dataPrinciapl.subtitle}</p>
        <p className="services__descripcion">{dataPrinciapl.descrpcion}</p>
      </div>

      {/* c */}

      {/* <article className="services">
        <h2 className="services-title">{dataPrinciapl.title}</h2>
        <p className="services-sub">{dataPrinciapl.subtitle}</p>
        <p className="services-descrip">{dataPrinciapl.descrpcion}</p>
      </article> */}

      <div className="wrapper-services">
        {data.map((serv, index) => {
          return (
            <div className="services-container" key={index}>
              <img className="banner" src={cuidad} />
              <img className="services-banner" src={serv.image} />{" "}
              {/* img de fondo*/}
              <h1>{serv.type}</h1>
              <p>{serv.text}</p>
              <Link to="/about">
                <button className="services-btn">
                  Read More <span>&rarr;</span>
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
