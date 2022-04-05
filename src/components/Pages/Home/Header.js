import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "../../Buttons/Button";

const Home = ({ slides }) => {
  const [state] = React.useState({
    text: "Multi Rejuvenation",
  });

  return (
    <div className="header">
      <div className="header__content">
        <h1
          style={{ paddingTop: "3rem", margin: "auto 0" }}
          className="header__content-h1"
        >
          Welcome to
          <span
            style={{
              color: "#DFBA9F",
              fontWeight: "italic",
              marginLeft: "30px",
            }}
          >
            <Typewriter
              words={["Our", "Spa", "Center"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="header__content-p">{state.text}</p>
      </div>
      {/* <button className="header__button">Read More</button> */}
      <div className="header__button">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          book an appointment
        </Button>
      </div>
    </div>
  );
};

export default Home;
