import React from "react";
import { Button } from "../../Buttons/Button";

const Cuarto = () => {
  const [heading] = React.useState({
    type: "IMPRESSED WITH US ?",
    texto:
      "Fusce non leo ut sapien volutpat volutpat tiam rutrum malesuada erat sollicitudin non.",
  });
  return (
    <div className="cajita">
      <div className="cajita_contenido">
        <h2 className="cajita__title">{heading.type}</h2>
        <p className="cajita__descripcion">{heading.texto}</p>
      </div>
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        GET AN APPOINTMENT
      </Button>
    </div>
  );
};

export default Cuarto;
