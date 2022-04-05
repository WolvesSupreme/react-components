import React from "react";
//import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import about from "../../../img/img-7.png";
import persona1 from "../../../img/persona-1.jpg";
import persona2 from "../../../img/persona-2.jpg";
import persona3 from "../../../img/persona-3.jpg";

const PruebaCard = () => {
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

  const [headings] = React.useState({
    title: "WE BELIEVE IN CUSTOMER SATISFACTION",
    descripcion:
      "Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit. Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit.",
  });

  const [Relax] = React.useState({
    title: "RELAX YOUR BODY",
    descripcion:
      "Donec dignissim enim id urna fermentum, non hendrerit sem volutpat ellentesque pretium sapien nec metus.",
  });
  const [Refresh] = React.useState({
    title: "REFRESH YOUR MIND",
    descripcion:
      "Donec dignissim enim id urna fermentum, non hendrerit sem volutpat ellentesque pretium sapien nec metus.",
  });
  const [FREE] = React.useState({
    title: "FREE MEDITATION",
    descripcion:
      "Donec dignissim enim id urna fermentum, non hendrerit sem volutpat ellentesque pretium sapien nec metus.",
  });
  const [BEAUTY] = React.useState({
    title: "BEAUTY & WAXING",
    descripcion:
      "Donec dignissim enim id urna fermentum, non hendrerit sem volutpat ellentesque pretium sapien nec metus.",
  });

  return (
    <section className="prueba-cards">
      <section className="post">
        <div className="banner-image">
          <img src={about} alt="" />
        </div>
        <div className="info-card">
          <h1 className="titulo-">{headings.title}</h1>
          <p className="descripcion-">{headings.descripcion}</p>
          <article>
            <h2 className="">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/floating-guru.png"
                className="contenido-icons__inscripción__img"
              />
              {Relax.title}
            </h2>
            <p className="">{Relax.descripcion}</p>
          </article>
          <article>
            <h2 className="">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/floating-guru.png"
                className="contenido-icons__inscripción__img"
              />
              {Relax.title}
            </h2>
            <p className="">{Relax.descripcion}</p>
          </article>
          <article>
            <h2 className="">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/floating-guru.png"
                className="contenido-icons__inscripción__img"
              />
              {Relax.title}
            </h2>
            <p className="">{Relax.descripcion}</p>
          </article>
          <article>
            <h2 className="">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/floating-guru.png"
                className="contenido-icons__inscripción__img"
              />
              {Relax.title}
            </h2>
            <p className="">{Relax.descripcion}</p>
          </article>
        </div>
      </section>
    </section>
  );
};

export default PruebaCard;
