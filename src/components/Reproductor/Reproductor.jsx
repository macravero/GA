/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { useSpring, animated } from "react-spring";
import playSound from "../shared/playSound";
import positiveReview1 from "../../media/Reproductor/good-review1.png";
import positiveReview2 from "../../media/Reproductor/good-review2.png";
import positiveReview3 from "../../media/Reproductor/good-review3.png";
import negativeReview1 from "../../media/Reproductor/bad-review1.png";
import negativeReview2 from "../../media/Reproductor/bad-review2.png";
import negativeReview3 from "../../media/Reproductor/bad-review3.png";
import GoTo from "../../media/Reproductor/go_to_link.png";
import Smiley from "../../media/Reproductor/smiley_link.png";
import Reroute from "../../media/Reproductor/reroute_link.png";
import Pencil from "../../media/Reproductor/pencil_link.png";
import "./Reproductor.css";
import { useViewsContext } from "../../context/ViewsContext/ViewsContext";
import HackMovieSound from "../../media/sounds/hackMovie.wav";

function Reproductor() {
  const [currentTime, setCurrentTime] = useState(0);
  const {
    setFontColor,
    movieHacked,
    setMovieHacked,
    ampliada,
    setAmpliada,
  } = useViewsContext();
  const buttonAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 16500,
  });
  setFontColor("black");
  const positive = [
    '"Una mirada punzante sobre el arte contemporáneo"',
    "Luis Paz, Página/12",
    '"El virus entró al sistema“',
    "Diego Erlan, Revista Ñ, Clarín",
    "“Un film tan exótico como cautivante”",
    "Alejandro Lingenti, La Nación",
    '"Un juego sobre la ontología de la imagen y el concepto de verdad en la era digital"',
    "Diego Lerer, Micropsia/Otros Cines",
    positiveReview1,
    positiveReview2,
    positiveReview3,
  ];
  const negative = [
    '“¿Qué VJs? ¿Los de MTV?"',
    "La mayoría de la gente.",
    '“¿Por qué no tiene más partes documentales?"',
    "Algunos amantes del cine documental.",
    '“¿Por qué no tiene más partes de ficción?"',
    "Algunos amantes del cine de ficción.",
    "“Esta versión ampliada me hace acordar a los extras de un DVD”",
    "Alguien que miraba muchos DVDs.",
    "“¿Qué es un DVD?”",
    "La gente joven.",
    negativeReview1,
    negativeReview2,
    negativeReview3,
  ];
  ampliada && setFontColor("white");
  const setExtendedVersion = () => {
    playSound(HackMovieSound);
    setMovieHacked(true);
    setTimeout(() => {
      setAmpliada(true);
      setMovieHacked(false);
    }, 1000);
  };
  useEffect(() => {
    return () => {
      setAmpliada(false);
    };
  }, []);
  useEffect(() => {
    return () => clearInterval(videoPlayTimeInterval);
  });
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      controls: 1,
      autoplay: 0,
      showinfo: 0,
      frameborder: 0,
    },
  };
  let videoPlayTimeInterval;
  const onPlayVideo = (e) => {
    videoPlayTimeInterval = setInterval(
      () => setCurrentTime(e.target.getCurrentTime()),
      1000
    );
  };
  const onPlayVideoTest = (e) => {
    console.log(e.target.getCurrentTime());
  };
  const onPauseVideo = (e) => {
    console.log(e.target);
    clearInterval(videoPlayTimeInterval);
  };
  return (
    <div className={ampliada ? "Reproductor ampliado" : "Reproductor"}>
      {ampliada && 192 < currentTime && currentTime < 266 && (
        <a href="https://youtu.be/ez7RI4jYnRE" target="_blank">
          <img
            className="Icons"
            src={Pencil}
            alt=""
            style={{ top: "50%", left: "50%" }}
          />
        </a>
      )}
      {ampliada && 454 < currentTime && currentTime < 545 && (
        <a href="https://youtu.be/C4gzz0TczrY" target="_blank">
          <img
            className="Icons"
            src={Reroute}
            alt=""
            style={{ top: "40%", left: "20%" }}
          />
        </a>
      )}
      {ampliada && 546 < currentTime && currentTime < 671 && (
        <a href="https://youtu.be/5P3G2OU9Mgw" target="_blank">
          <img
            className="Icons"
            src={Smiley}
            alt=""
            style={{ top: "30%", left: "70%" }}
          />
        </a>
      )}
      {ampliada && 672 < currentTime && currentTime < 770 && (
        <a
          href="https://www.youtube.com/watch?v=aCcSz5Nsghk&feature=youtu.be
        "
          target="_blank"
        >
          <img
            className="Icons"
            src={Smiley}
            alt=""
            style={{ top: "75%", left: "35%" }}
          />
        </a>
      )}
      {ampliada && 771 < currentTime && currentTime < 896 && (
        <a
          href="https://www.youtube.com/watch?v=Und-ObxbF9o
        "
          target="_blank"
        >
          <img
            className="Icons"
            src={Smiley}
            alt=""
            style={{ top: "50%", left: "50%" }}
          />
        </a>
      )}
      {ampliada && 897 < currentTime && currentTime < 1024 && (
        <a href="https://youtu.be/vtjtrKAwk9I" target="_blank">
          <img
            className="Icons"
            src={Reroute}
            alt=""
            style={{ top: "25%", left: "25%" }}
          />
        </a>
      )}
      {ampliada && 1025 < currentTime && currentTime < 1166 && (
        <a href="https://youtu.be/jpAVd4Yoh7s" target="_blank">
          <img
            className="Icons"
            src={Pencil}
            alt=""
            style={{ top: "15%", left: "65%" }}
          />
        </a>
      )}
      {ampliada && 1338 < currentTime && currentTime < 1410 && (
        <a
          href="https://www.youtube.com/watch?v=TIvmE_I3H_g&feature=youtu.be
        "
          target="_blank"
        >
          <img
            className="Icons"
            src={Smiley}
            alt=""
            style={{ top: "50%", left: "50%" }}
          />
        </a>
      )}
      {ampliada && 1433 < currentTime && currentTime < 1599 && (
        <a href="https://youtu.be/WbbAXYHSRLY" target="_blank">
          <img
            className="Icons"
            src={Smiley}
            alt=""
            style={{ top: "69%", left: "33%" }}
          />
        </a>
      )}
      {ampliada && 1777 < currentTime && currentTime < 1832 && (
        <a href="https://youtu.be/j-XF5jBREDM" target="_blank">
          <img
            className="Icons"
            src={Reroute}
            alt=""
            style={{ top: "66%", left: "66%" }}
          />
        </a>
      )}
      {ampliada && 2081 < currentTime && currentTime < 2171 && (
        <a href="https://youtu.be/f-AXxS1woX0" target="_blank">
          <img
            className="Icons"
            src={Smiley}
            alt=""
            style={{ top: "84%", left: "42%" }}
          />
        </a>
      )}
      {ampliada && 2321 < currentTime && currentTime < 2463 && (
        <a href="https://www.youtube.com/watch?v=3148ZQQ5j90" target="_blank">
          <img
            className="Icons"
            src={GoTo}
            alt=""
            style={{ top: "14%", left: "26%" }}
          />
        </a>
      )}
      {ampliada && 3083 < currentTime && currentTime < 3284 && (
        <a href="https://youtu.be/_E55dHrZWrk" target="_blank">
          <img
            className="Icons"
            src={Reroute}
            alt=""
            style={{ top: "40%", left: "30%" }}
          />
        </a>
      )}
      <div
        className={
          movieHacked
            ? "movieContainer hacked"
            : "movieContainer" + (ampliada ? " ampliada" : "")
        }
      >
        <YouTube
          className="movie"
          videoId="FQNnoQLkMyo"
          opts={opts}
          onPlay={onPlayVideo}
          onPause={onPauseVideo}
          onStateChange={onPlayVideoTest}
        ></YouTube>
      </div>
      <div
        className="criticsContainer"
        style={ampliada ? { backgroundColor: "black" } : null}
      >
        <div
          className={
            movieHacked
              ? "firstMarquee hacked"
              : "firstMarquee" + (ampliada ? " ampliada" : "")
          }
        >
          <h2>CRITICAS</h2>
          <div className="critica">
            <p>{ampliada ? negative[0] : positive[0]}</p>
            <p>{ampliada ? negative[1] : positive[1]}</p>
          </div>
          <div className="critica">
            <p>{ampliada ? negative[2] : positive[2]}</p>
            <p>{ampliada ? negative[3] : positive[3]}</p>
          </div>
          <div className="critica">
            <p>{ampliada ? negative[4] : positive[4]}</p>
            <p>{ampliada ? negative[5] : positive[5]}</p>
          </div>
          <div className="critica">
            <p>{ampliada ? negative[6] : positive[6]}</p>
            <p>{ampliada ? negative[7] : positive[7]}</p>
          </div>
          <h2>PREMIOS</h2>
          <div className="critica">
            <img
              className="criticaImage"
              src={ampliada ? negative[10] : positive[8]}
              alt=""
            />
          </div>
          <div className="critica">
            <img
              className="criticaImage"
              src={ampliada ? negative[11] : positive[9]}
              alt=""
            />
          </div>
          <div className="critica">
            <img
              className="criticaImage"
              src={ampliada ? negative[12] : positive[10]}
              alt=""
            />
          </div>
        </div>
        <div
          className={
            movieHacked
              ? "secondMarquee hacked"
              : "secondMarquee" + (ampliada ? " ampliada" : "")
          }
        >
          <h2>CRITICAS</h2>
          <div className="critica">
            <p>{ampliada ? negative[0] : positive[0]}</p>
            <p>{ampliada ? negative[1] : positive[1]}</p>
          </div>
          <div className="critica">
            <p>{ampliada ? negative[2] : positive[2]}</p>
            <p>{ampliada ? negative[3] : positive[3]}</p>
          </div>
          <div className="critica">
            <p>{ampliada ? negative[4] : positive[4]}</p>
            <p>{ampliada ? negative[5] : positive[5]}</p>
          </div>
          <div className="critica">
            <p>{ampliada ? negative[6] : positive[6]}</p>
            <p>{ampliada ? negative[7] : positive[7]}</p>
          </div>
          <h2>PREMIOS</h2>
          <div className="critica">
            <img
              className="criticaImage"
              src={ampliada ? negative[10] : positive[8]}
              alt=""
            />
          </div>
          <div className="critica">
            <img
              className="criticaImage"
              src={ampliada ? negative[11] : positive[9]}
              alt=""
            />
          </div>
          <div className="critica">
            <img
              className="criticaImage"
              src={ampliada ? negative[12] : positive[10]}
              alt=""
            />
          </div>
        </div>
      </div>
      <animated.div
        style={buttonAnimation}
        onClick={setExtendedVersion}
        className={ampliada ? "hackButton hide" : "hackButton"}
      >
        JAQUEAR
      </animated.div>
    </div>
  );
}

export default Reproductor;
