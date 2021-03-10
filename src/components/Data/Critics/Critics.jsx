import React, {useState} from 'react'
import Critic from './Critic/Critic'
import styled from 'styled-components'
import CRITICS_LIST from './criticsList'

const CriticsContainer = styled.div`
background: transparent;
width: 100%;
height: 100%;
left: 0;
top: 0;
z-index:0;
`
const Critics = () => {
const [ criticsList, setCriticsList ] = useState(CRITICS_LIST)

const removeCritics = id =>{
    const newCritics = criticsList.filter(critic => critic.id !== id)
    setCriticsList(newCritics);
}
    return (
        <CriticsContainer>
            {criticsList.map(({title,content,author,link, posY, posX, id}) =>(
            <Critic removeCritics={removeCritics} title={title} key={id} id={id} content={content} author={author} link={link} posY={posY} posX={posX}></Critic>
            )
            )}
        </CriticsContainer>
    )
}

export default Critics
