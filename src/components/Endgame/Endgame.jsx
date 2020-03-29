import React, {useState} from 'react'
import './Endgame.css'
const Endgame = () => {
    const [scrollPos, setScrollPos] = useState(1)
    // const EndgameContainer = styled.div`
    // `
    const scrollEndgame = e =>{
        if(e.deltaY < 0 && scrollPos >1){
            setScrollPos(scrollPos-1)
        } else if(e.deltaY > 0 && scrollPos < 97) {
            setScrollPos(scrollPos+1)
        };
    }
    return (
        <div onWheel={scrollEndgame} className={`EndgameContainer img${scrollPos}`} style={scrollPos == 97 ? {display:"none"} : {display:"inherit"}}>
            
        </div>
    )
}

export default Endgame
