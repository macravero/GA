import React, { useState } from 'react'
import styled from 'styled-components'
import CreditImage1 from '../../../media/Data/09.png'
import CreditImage2 from '../../../media/Data/10.png'
import CreditImage3 from '../../../media/Data/11.png'
import { useSpring, animated } from 'react-spring'


const CreditImagesContainer = styled.div`
    background: transparent;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index:0;
`
const FirstCreditImage = styled(animated.div)`
    background: url("${CreditImage1}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position:absolute;
    width: 40rem;
    height: 21rem;
    left: 14vw;
    top: 29vh;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
`
const SecondCreditImage = styled(animated.div)`
    background: url("${CreditImage2}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position:absolute;
    width: 40rem;
    height: 21rem;
    right: 14vw;
    top: 14vh;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
`
const ThirdCreditImage = styled(animated.div)`
    background: url("${CreditImage3}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position:absolute;
    width: 40rem;
    height: 21rem;
    right: 28vw;
    bottom: 19vh;
    display: flex;
    justify-content: flex-end;
    z-index: 10;
`
const CloseIcon = styled.span`
    color:white;
    font-weight:bold;
    cursor:pointer;
    text-align:right;
    padding-right:5%;
    height:1rem;
`
const CreditImages = () => {
    
const [imageOne, showImageOne] = useState(true);
const [imageTwo, showImageTwo] = useState(true);
const [imageThree, showImageThree] = useState(true);

// animations
const img1animation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1400 })
const img2animation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1200 })
const img3animation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 })
    return (
        <CreditImagesContainer>
            {imageOne && <FirstCreditImage style={img1animation}><CloseIcon onClick={() => showImageOne(false)}>[ x ]</CloseIcon></FirstCreditImage>}
            {imageTwo && <SecondCreditImage style={img2animation}><CloseIcon onClick={() => showImageTwo(false)}>[ x ]</CloseIcon></SecondCreditImage>}
            {imageThree && <ThirdCreditImage style={img3animation}><CloseIcon onClick={() => showImageThree(false)}>[ x ]</CloseIcon></ThirdCreditImage>}
        </CreditImagesContainer>
    )
}

export default CreditImages
