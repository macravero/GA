import React,{useState, useEffect} from 'react'
import gifOne from '../../../media/Brains/slider-gif1.gif'
import gifTwo from '../../../media/Brains/slider-gif2.gif'
import gifThree from '../../../media/Brains/slider-gif3.gif'
import gifFour from '../../../media/Brains/slider-gif4.gif'
import gifFive from '../../../media/Brains/slider-gif5.gif'
import './GifContainer.css'
const GifContainer = props => {
    const {position, setPosition} = props
    const [currentBackground, setCurrentBackground] = useState(gifOne)

    useEffect(() => {
        updateBackground()
    }, [position])

    const updateBackground = () =>{
        switch (position){
            default:
                setCurrentBackground(gifOne);
                break
            case 2:
                setCurrentBackground(gifTwo);
                break
            case 3:
                setCurrentBackground(gifThree);
                break
            case 4:
                setCurrentBackground(gifFour);
                break
            case 5:
                setCurrentBackground(gifFive);
                break
        }
    }
    return (
        <div className="gifContainer">
        <div className="gifContainer textContainer">
            <p className="gifContainer title">ELEGIR VIDEO</p>
            <span className={position === 1 && 'disabled'} onClick={()=> position === 1 ? null : setPosition(position-1)}> ◄ </span> 
            <span className={position === 5 && 'disabled'} onClick={()=> position === 5 ? null : setPosition(position+1)}> ► </span>
            <span className="close" onClick={()=> setPosition(0)}>[ X ]</span>
        </div>
        <div className="gifContainer container " style={{backgroundImage:`url(${currentBackground})`}}/>
        </div>
    )
}

export default GifContainer
