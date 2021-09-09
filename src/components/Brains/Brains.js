import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import playSound from "../shared/playSound";
import ClickButton from "./ClickButton/ClickButton";
import GifContainer from "./GifContainer/GifContainer";
import Soundwave from "../../media/Brains/soundwave.gif";
import Encore from "../../media/Brains/encore.gif";
import Blackhole from "../../media/Brains/blackhole.gif";
import Circle from "../../media/Brains/circle.gif";
import Glitch from "../../media/Brains/glitch.gif";
import Loop from "../../media/Brains/loophole.gif";
import EnterBrain from "../../media/sounds/enterBrains.mp3";
import ClickBrain from "../../media/sounds/clickInBrain.wav";
import "./Brains.css";

const SoundwaveContainer = styled(animated.div)`
  position: absolute;
  top: 4%;
  right: 11%;
  width: 20rem;
  height: 11rem;
  border: solid 1px white;
  background: url("${Soundwave}");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const EncoreContainer = styled(animated.div)`
  position: absolute;
  top: 4%;
  right: 30%;
  width: 20rem;
  height: 11rem;
  background: url("${Encore}");
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;
const BlackholeContainer = styled(animated.div)`
  position: absolute;
  top: 9%;
  left: 23.5vw;
  width: 7.1vw;
  height: 21.5vh;
  background: url("${Blackhole}");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const CircleContainer = styled(animated.div)`
  position: absolute;
  bottom: 21.6vh;
  right: 26.4vw;
  width: 5vw;
  height: 9vh;
  border: 1px solid white;
  background: url("${Circle}");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const GlitchContainer1 = styled(animated.div)`
  position: absolute;
  bottom: 18%;
  right: 16.5%;
  width: 10rem;
  height: 10rem;
  background: url("${Glitch}");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const GlitchContainer2 = styled(animated.div)`
  position: absolute;
  bottom: 18%;
  left: 36.5%;
  width: 10rem;
  height: 10rem;
  background: url("${Glitch}");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const GlitchContainer3 = styled(animated.div)`
  position: absolute;
  bottom: 18%;
  left: 26.5%;
  width: 10rem;
  height: 10rem;
  background: url("${Glitch}");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const LoopContainer = styled(animated.div)`
  position: absolute;
  top: 33vh;
  left: 17vw;
  width: 7.3vw;
  height: 21.3vh;
  background: url("${Loop}");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
function Brains() {
  const [pressedButton, setPressedButton] = useState(0);

  const [cameraOne, setCameraOne] = useState(false);
  const [cameraTwo, setCameraTwo] = useState(false);
  const [cameraThree, setCameraThree] = useState(false);
  const [gifPosition, setGifPosition] = useState(0);

  useEffect(() => {
    playSound(EnterBrain);
  }, []);
  // Element animations
  const fontAnimation = useSpring({
    marginTop: -1200,
    from: { marginTop: 400 },
    delay: 300,
    duration: 300,
  });
  const backgroundAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 12500,
  });
  const swAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 13500,
  });
  const enAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 14000,
  });
  const cirAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 14500,
  });
  const gli1Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 15000,
  });
  const loopAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 16500,
  });
  const blackAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 17000,
  });
  const cam1Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 17500,
  });
  const cam2Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 18000,
  });
  const cam3Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 18500,
  });
  const cam4Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 19000,
  });
  const introAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 300,
  });
  return (
    <div className="Brains">
      <animated.div style={introAnimation}>
        <animated.p style={fontAnimation}>
          Conectado a una interfaz cerebro-computadora, el director Federico
          Pintos remixa su película en tiempo real. Sus estados mentales son
          medios de acceso a diferentes escenas de la película, tomas
          alternativas y materiales inéditos, a la vez que regulan parámetros de
          procesamiento sonoro y visual.
        </animated.p>
      </animated.div>
      <animated.div style={backgroundAnimation} className="Background">
        <animated.div style={swAnimation}>
          <SoundwaveContainer />
        </animated.div>
        <animated.div style={enAnimation}>
          <EncoreContainer style={backgroundAnimation} />
        </animated.div>
        <animated.div style={cirAnimation}>
          <BlackholeContainer style={backgroundAnimation} />
        </animated.div>
        <animated.div style={loopAnimation}>
          <CircleContainer style={backgroundAnimation} />
        </animated.div>
        <animated.div style={gli1Animation}>
          <GlitchContainer1 style={backgroundAnimation} />
        </animated.div>
        <animated.div style={gli1Animation}>
          <GlitchContainer2 style={backgroundAnimation} />
        </animated.div>
        <animated.div style={gli1Animation}>
          <GlitchContainer3 style={backgroundAnimation} />
        </animated.div>
        <animated.div style={blackAnimation}>
          <LoopContainer style={backgroundAnimation} />
        </animated.div>
        <animated.div
          style={cam1Animation}
          onClick={() => {
            setCameraOne(true);
            playSound(ClickBrain);
          }}
          className="Button Click1"
        >
          CLICK
        </animated.div>
        <animated.div
          style={cam2Animation}
          onClick={() => {
            setCameraTwo(true);
            playSound(ClickBrain);
          }}
          className="Button Click2"
        >
          CLICK
        </animated.div>
        <animated.div
          style={cam3Animation}
          onClick={() => {
            setCameraThree(true);
            playSound(ClickBrain);
          }}
          className="Button Click3"
        >
          CLICK
        </animated.div>
        <animated.div
          style={cam4Animation}
          onClick={() => {
            playSound(ClickBrain);
            gifPosition === 0 ? setGifPosition(1) : setGifPosition(0);
          }}
          className="Button Click4"
        >
          CLICK
        </animated.div>
        {gifPosition > 0 && (
          <GifContainer position={gifPosition} setPosition={setGifPosition} />
        )}
        {cameraOne && (
          <div className="gif1">
            <span onClick={() => setCameraOne(false)}>[ x ]</span>
          </div>
        )}
        {cameraTwo && (
          <div className="gif2">
            <span onClick={() => setCameraTwo(false)}>[ x ]</span>
          </div>
        )}
        {cameraThree && (
          <div className="ficha">
            <div className="ficha-title">
              <h1>FICHA TÉCNICA</h1>
              <span onClick={() => setCameraThree(false)}>[ x ]</span>
            </div>
          </div>
        )}
      </animated.div>
    </div>
  );
}

export default Brains;
