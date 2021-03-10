import React from 'react'
import styled from 'styled-components'

const CriticContainer = styled.div`

width: 200px;
height: 150px;
position:absolute;
border: 1px solid white;
top: ${props => props.posY}%;
left: ${props => props.posX}%;
background: white;
z-index:2;
`
const Wrapper = styled.div`
    position:relative;
    width:100%;
    height:100%;
`
const Header= styled.div`
    background:black;
    color:white;
    height: 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    > span{
        margin-left: 1rem;
        margin-right: 1rem;
        > span{
            cursor:pointer;
        }
    }
    a{
        color: white;
        text-decoration:none;
    }
`
const Content = styled.div`
    overflow-y: auto;
    background:white;
    padding-bottom:2rem;
    padding-top:1rem;
    padding-left:1rem;
    padding-right: 1rem;
    text-align:left;
    height:75px;
    font-family: 'gt_america_monoregular', sans-serif;
`
const Author = styled.span`
    display: block;
    width:191px;
    height:4rem;
    background:white;
    text-align:left;
    padding-left:1rem;
    font-family: 'gt_america_monoregular', sans-serif;
`

const Critic = ({removeCritics, title, content, author, link, posY, posX, id}) => {
    return (
        <CriticContainer posY={posY} posX={posX}>
            <Wrapper>
            <Header> <span>{title}</span><span>{link !== "" ? <span><a href={link} rel="noopener noreferrer" target="_blank">&#8599;</a></span> : null } <span onClick={() => removeCritics(id)} >[ x ]</span></span></Header>
            <Content>{content}</Content>
            <Author>{author}</Author>
            </Wrapper>
        </CriticContainer>
    )
}

export default Critic
