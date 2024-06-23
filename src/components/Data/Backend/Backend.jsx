import React from 'react';
import styled from 'styled-components';
import agenda from '../../../media/Data/backend/agenda.png';
import calculator from '../../../media/Data/backend/calculator.png';
import calendar from '../../../media/Data/backend/calendar.png';
import camera from '../../../media/Data/backend/camera.png';
import creative from '../../../media/Data/backend/creative.png';
import files from '../../../media/Data/backend/files.png';
import filter from '../../../media/Data/backend/filter.png';
import other from '../../../media/Data/backend/other.png';
import pallette from '../../../media/Data/backend/pallette.png';
import pen from '../../../media/Data/backend/pen.png';
import phone from '../../../media/Data/backend/phone.png';
import tag from '../../../media/Data/backend/tag.png';
const BackendWrapper = styled.div`
  background: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 15%;
`;
const BackendRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-between;
  // background:blue;
  width: 100%;
  height: auto;
  > span {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    height: auto;
    align-items: center;
    p {
      min-width: 25rem;
      min-height: 5rem;
      color: white;
      font-family: 'gt_america_monoregular', sans-serif;
      text-align: left;
    }
  }
`;
const Backend = () => {
  return (
    <BackendWrapper>
      <BackendRow>
        <span>
          <img src={camera} alt='' />
          <p>
            Dirección y producción <br />
            Federico Pintos
          </p>
        </span>
        <span>
          <img src={calculator} alt='' />
          <p>
            Arte y Desarrollo
            <br /> de Videorrealidad <br /> Mateo Amaral
          </p>
        </span>
      </BackendRow>
      <BackendRow>
        <span>
          <img src={pen} alt='' />
          <p>
            Guión y contenidos <br />
            Julian Urman
          </p>
        </span>
        <span>
          <img src={phone} alt='' />
          <p>
            Títulos analógicos
            <br /> Javier Plano
          </p>
        </span>
      </BackendRow>
      <BackendRow>
        <span>
          <img src={creative} alt='' />
          <p>
            Dirección De Arte
            <br />
            Mhura Studio <br />
            (Bela Uyua / Juan Fortin)
          </p>
        </span>
        <span>
          <img src={filter} alt='' />
          <p>
            Promoción y redes
            <br />
            Florencia Lavalle
          </p>
        </span>
      </BackendRow>
      <BackendRow>
        <span>
          <img src={pallette} alt='' />
          <p>
            Colaborador Artístico
            <br />
            Pablo Riera
          </p>
        </span>
        <span>
          <img src={calendar} alt='' />
          <p>
            Coordinación
            <br />
            Julieta Agriano
          </p>
        </span>
      </BackendRow>
      <BackendRow>
        <span>
          <img src={agenda} alt='' />
          <p>
            Diseño de póster
            <br />
            Ian Kornfeld
          </p>
        </span>
        <span>
          <img src={tag} alt='' />
          <p>
            Editor de video
            <br />
            Javier di Benedictis
          </p>
        </span>
      </BackendRow>
      <BackendRow>
        <span>
          <img src={other} alt='' />
          <p>
            Realización integral Arcade
            <br />
            Santiago Idelson
          </p>
        </span>
        <span>
          <img src={files} alt='' />
          <p>
            Escaneo <br />
            Mati Bianchi
          </p>
        </span>
      </BackendRow>
    </BackendWrapper>
  );
};

export default Backend;
