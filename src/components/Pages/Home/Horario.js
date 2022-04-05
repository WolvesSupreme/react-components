import React from "react";

const Horario = () => {
  const [Mon] = React.useState({
    dia: "Mon",
    hora: "08:00-15:00",
  });
  const [Tue] = React.useState({
    dia: "Tue",
    hora: "10.00-16.00",
  });
  const [Wed] = React.useState({
    dia: "Wed",
    hora: "08:00-15:00",
  });
  const [Thu] = React.useState({
    dia: "Thu",
    hora: "08:00-18:00",
  });
  const [Fri] = React.useState({
    dia: "Fri",
    hora: "07:00-19:00",
  });
  const [SatSun] = React.useState({
    dia: "Sat+Sun",
    hora: "Closed",
  });

  const [Titulo] = React.useState({
    nombre: "WE ARE CREATIVE",
    descripcion:
      "Ut fringilla ac metus rhoncus sollicitudin. Curabitur at sagittis justo, eu laoreet lectus. Mauris augue ex, consectetur ac pellentesque ac, feugiat lacinia eros. Ut bibendum mi in imperdiet feugiat. Duis porttitor dapibus odio vitae rutrum. Nullam viverra risus et lacus scelerisque laoreet.",
  });

  const [heading] = React.useState({
    type: "OPENING HOURS",
    sub: "WHEN WE WORK",
    text: "Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit. Ut consequat velit a metus accumsan, vel tempor nulla blandit. Integer euismod magna vel mi congue suscipit.",
  });

  return (
    <section className="cajaPrincipal">
      <article className="cajaBox">
        <h2 className="cajaBox__title">{heading.type}</h2>
        <h3 className="cajaBox__subtitle">{heading.sub}</h3>
        <p className="cajaBox__descripcion">{heading.text}</p>
      </article>

      <section className="caja-Presentacion">
        <div className="caja-box-content">
          <article className="cajaContent-Mon">
            <h2>{Mon.dia}</h2>
            <p>{Mon.hora}</p>
          </article>
          <article className="cajaContent-Tue">
            <h2>{Tue.dia}</h2>
            <p>{Tue.hora}</p>
          </article>
          <article className="cajaContent-Wed">
            <h2>{Wed.dia}</h2>
            <p>{Wed.hora}</p>
          </article>
          <article className="cajaContent-Thu">
            <h2>{Thu.dia}</h2>
            <p>{Thu.hora}</p>
          </article>
          <article className="cajaContent-Fri">
            <h2>{Fri.dia}</h2>
            <p>{Fri.hora}</p>
          </article>
          <article className="cajaContent-SatSun">
            <h2>{SatSun.dia}</h2>
            <p>{SatSun.hora}</p>
          </article>
        </div>

        <section className="caja-info">
          <article className="caja-texto">
            <h2 className="caja-texto__titulo">{Titulo.nombre}</h2>
            <p className="caja-texto__parafo">{Titulo.descripcion}</p>
          </article>
        </section>
      </section>
    </section>
  );
};

export default Horario;
