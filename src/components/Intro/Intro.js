import React, { useState, useEffect } from "react";
import playSound from "../shared/playSound";
import intro1 from "../../media/intro/img1.jpg";
import intro2 from "../../media/intro/img2.jpg";
import intro3 from "../../media/intro/img3.jpg";
import intro4 from "../../media/intro/gif1.gif";
import intro5 from "../../media/intro/gif2.gif";
import intro6 from "../../media/intro/gif3.gif";
import intro7 from "../../media/intro/gif4.gif";
import ezgif from "../../media/intro/ezgif.gif";
import ClickSound from "../../media/sounds/intro-click.wav";
import GrantedSound from "../../media/sounds/granted.wav";
import "./Intro.css";
function Intro(props) {
  const { counter, setCounter } = props;
  const [isClicking, setClicking] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function preloadImages() {
      let imageList = [intro1, intro2, intro3, intro4, intro5, intro6, intro7];
      imageList.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
      await setTimeout(() => {
        setloading(false);
      }, 5000);
    }
    preloadImages();
  }, []);

  const updateCounter = (e) => {
    if (counter < 3) {
      playSound(ClickSound);
    }
    if (counter >= 3) {
      playSound(GrantedSound);
      setTimeout(() => {
        setCounter(5);
      }, 3000);
    }
    e.preventDefault();
    setCounter((prevCounter) => prevCounter + 1);
  };
  const updateClicking = () => {
    setClicking((prevClick) => !prevClick);
  };
  return (
    <>
      {loading ? (
        <div className="introPreloader">
          <img src={ezgif} alt="loading" />
        </div>
      ) : (
        <div
          className={`Intro bg${counter} ${
            isClicking ? `clicked${counter}` : ""
          }`}
          onClick={updateCounter}
          onMouseDown={updateClicking}
          onMouseUp={updateClicking}
        ></div>
      )}
    </>
  );
}

export default Intro;
