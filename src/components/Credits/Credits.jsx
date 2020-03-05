import React from 'react'
import styled from 'styled-components'


const CreditsWrapper = styled.div`
    text-align: left;
    color: #0000ff;
    font-family: 'gt_america_monothin',sans-serif;
    padding-left: 20%;
    padding-right: 25%;
    padding-top: 5%;
    font-size: 1.4rem
`

const Credits = () => {
    return (
        <CreditsWrapper><p><strong>Director:</strong> Federico Pintos<br /><strong>Guión:</strong> Julián Urman, Federico Pintos<br /><strong>Edición:</strong> Ian Kornfeld, Federico Pintos</p>
          <p><strong>Intérpretes:</strong> Rafael Cippolini, Julián Urman, Lulú Jankilevich<br /> <strong>Visuales:</strong> Marcelo Rondinone, Alejandro Delgado, Bernie Heredia, Milena Pafundi, Sebastián Iannizzotto, José Render, Federico Lamas, Ian Kornfeld, DataRape, Interno Subjetivo.<br /> <strong>Canciones:</strong> Julián Aznar, Fantasías Animadas, Ulises Conti, Juan Stewart, Trasvorder, Zort, Emilio Haro/Wenchi Lazo<br /> <strong>Entrevistas:</strong> Marcelo Urresti, Mariano Sigman, Graciela Taquini, Iván Ivanoff.</p>
          <p><strong>Dirección de fotografía y cámara:</strong> Leonardo val<br /><strong>Fotografías:</strong> Luis sens <br /><strong>Posproducción & Música original:</strong> Ian kornfeld<br /><strong>Dirección de sonido:</strong> Emiliano biaiñ <br /><strong>Arte:</strong> Marina Azul Fernández Besada<br /> <strong>Diseño de Títulos:</strong> Javier Plano<br /> <strong>Diseño gráﬁco:</strong> Ian Kornfeld<br /> <strong>Dirección de producción:</strong> Andy Piffer <br /><strong>Producción:</strong> Federico Pintos Julián Urman, Matías Tamborenea, Iván Granovsky, Martín Maisonave.</p>
          </CreditsWrapper>
    )
}

export default Credits
