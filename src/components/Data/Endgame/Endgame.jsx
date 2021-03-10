import React, {useState} from 'react'
import './Endgame.css'
const Endgame = props => {
    const [scrollPos, setScrollPos] = useState(1)
    const {showDarkMode} = props;
    // const EndgameContainer = styled.div`
    // `
    const scrollEndgame = e =>{
        if(e.deltaY < 0 && scrollPos >1){
            setScrollPos(scrollPos-1)
        } else if(e.deltaY > 0 && scrollPos < 103) {
            setScrollPos(scrollPos+1)
            if (scrollPos === 102) showDarkMode(true);
        };
    }
    const setDisplay = () => {
        if (scrollPos === 103) {
            showDarkMode(true)
            return {display: "none"}
        }
        return {display:"inherit"}
    }
    return (
        <div onWheel={scrollEndgame} className={`EndgameContainer img${scrollPos}`} style={setDisplay()}>
            
        </div>
    )
}

export default Endgame
