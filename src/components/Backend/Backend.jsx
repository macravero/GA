import React from 'react'
import styled from 'styled-components'
import placeholder from '../../media/Data/backend/placeholderGA.PNG'
const BackendWrapper = styled.div`
    background:none;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    width:100%;
    height:100%;
`
const BackendRow = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:no-wrap;
    justify-content:space-between;
    // background:blue;
    width:100%;
    height:auto;
    > span{        
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        height: auto;
        align-items: center;
        p{
            min-width:25rem;
            min-height:5rem;
            color:white;
            font-family: 'gt_america_monoregular', sans-serif;
            text-align:left;
        }
    }
    `
const Backend = () => {
    return (
        <BackendWrapper>
            <BackendRow><span><img src={placeholder} alt=""/><p>Direccion y produccion <br/>Federico Pintos</p></span><span><img src={placeholder} alt=""/><p>Arte y Desarrollo<br/> de Videorrealidad <br/> Mateo Amaral</p></span></BackendRow>
            <BackendRow><span><img src={placeholder} alt=""/><p>Guion y contenidos <br/>Julian Urman</p></span><span><img src={placeholder} alt=""/><p>Titulos analogicos<br/> Javier Plano</p></span></BackendRow>
            <BackendRow><span><img src={placeholder} alt=""/><p>Direccion De Arte<br/>Mhura Studio <br/>(Bela Uyua / Juan Fortin)</p></span><span><img src={placeholder} alt=""/><p>Promocion y redes<br/>Florencia Lavalle</p></span></BackendRow>
            <BackendRow><span><img src={placeholder} alt=""/><p>Colaborador Artistico<br/>Pablo Riera</p></span><span><img src={placeholder} alt=""/><p>Coordinacion<br/>Julieta Agriano</p></span></BackendRow>
            <BackendRow><span><img src={placeholder} alt=""/><p>Musica y Sonido<br/>Ian Kornfeld</p></span><span><img src={placeholder} alt=""/><p>Editor de video<br/>Javier di Benedictis</p></span></BackendRow>
            <BackendRow><span><img src={placeholder} alt=""/><p>Aquellos/as que<br/> participaron y<br/> no figuran</p></span><span><img src={placeholder} alt=""/><p>Escaneo <br/>Mati Bianchi</p></span></BackendRow>
            <BackendRow><span><img src={placeholder} alt=""/><p>Direccion y Produccion <br/>Federico Pintos</p></span><span><img src={placeholder} alt=""/><p>Arte y Desarrollo<br/> de videorrealidad <br/> Mateo Amaral</p></span></BackendRow>
        </BackendWrapper>
    )
}

export default Backend
