import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import persona1 from "../../../img/persona-1.jpg";
import persona2 from "../../../img/persona-2.jpg";
import persona3 from "../../../img/persona-3.jpg";
import cuidad from "../../../img/img-8.jpg";

const Personal = () => {
  const [header] = React.useState({
    title: "OUR BEAUTY EXPERTS",
    subtitle: "THE ASSETS OF OUR FAMILY",
    texto:
      "Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit. Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit.",
  });
  const data = [
    {
      type: "Michille Gomes",
      text: "Lead Designe",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia pellentesque leo, ut accumsan ligula fermentum ut. Suspendisse augue sem, tincidunt non sem in, volutpat laoreet ex. Aliquam venenatis mollis ipsum eu varius.",
      image: persona1,
    },
    {
      type: "Erick Anderson",
      text: "Web Developer",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia pellentesque leo, ut accumsan ligula fermentum ut. Suspendisse augue sem, tincidunt non sem in, volutpat laoreet ex. Aliquam venenatis mollis ipsum eu varius.",
      image: persona2,
    },
    {
      type: "Josh Mathews",
      text: "Fullstack Developer",
      about:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia pellentesque leo, ut accumsan ligula fermentum ut. Suspendisse augue sem, tincidunt non sem in, volutpat laoreet ex. Aliquam venenatis mollis ipsum eu varius.",
      image: persona3,
    },
  ];

  return (
    <section>
      <div className="personal">
        <h2 className="personal__title">{header.title}</h2>
        <p className="personal__subtitle">{header.subtitle}</p>
        <p className="personal__texto">{header.texto}</p>
      </div>

      <section>
        <div className="wrapper-grids">
          {data.map((card, index) => {
            return (
              <div className="containers" key={index}>
                <img className="banner-img" src={cuidad} />
                {/* img de la ciudad*/}
                <img className="profiles-img" src={card.image} />{" "}
                {/* img del personal */}
                <h1 className="name">{card.type}</h1>
                <p className="name-box">{card.text}</p>
                <p className="descripcion">{card.about}</p>
                <button>Contanct</button>
                <ul className="socials-media">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Personal;
