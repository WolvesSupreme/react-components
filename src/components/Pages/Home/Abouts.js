import React from "react";
import image7 from "../../../img/img-7.png";

const Abouts = () => {
  const [heading] = React.useState({
    type: "Welcome To",
    sub: "Massage theraphy center",
    texto:
      "Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit. Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit.",
  });
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
    <section>
      <section className="about">
        <h2 className="about-title">{heading.type}</h2>
        <p className="about-sub">{heading.sub}</p>
        <p className="about-text">{heading.texto}</p>
      </section>

      <section className="abouts-cards">
        <div className="abouts-post">
          <div className="abouts-banner-images">
            <img src={image7} alt="" />
          </div>
          <div className="abouts-info">
            <h2 className="abouts-titulo">{headings.title}</h2>
            <p className="abouts-descripcion">{headings.descripcion}</p>

            {/* PUBLICIDAD */}

            <article className="abouts-info-cards">
              <h2>
                <img src="https://img.icons8.com/ios-filled/50/000000/floating-guru.png" />
                {Relax.title}
              </h2>
              <p>{Relax.descripcion}</p>
            </article>

            <article className="abouts-info-cards">
              <h2>
                <img src="https://img.icons8.com/ios-filled/50/000000/massage.png" />
                {Refresh.title}
              </h2>
              <p>{Refresh.descripcion}</p>
            </article>

            <article className="abouts-info-cards">
              <h2>
                <img src="https://img.icons8.com/pastel-glyph/64/000000/spa-care.png" />
                {FREE.title}
              </h2>
              <p>{FREE.descripcion}</p>
            </article>

            <article className="abouts-info-cards">
              <h2>
                <img src="https://img.icons8.com/ios-filled/50/000000/sunbathe.png" />
                {BEAUTY.title}
              </h2>
              <p>{BEAUTY.descripcion}</p>
            </article>
            
          </div>
        </div>
      </section>
    </section>
  );
};

export default Abouts;
