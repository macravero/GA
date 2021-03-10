/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import { useSpring, animated } from 'react-spring'
import styles from './Darkmode.module.css';
import { useDataContext } from '../../../context/DataContext/DataContext';
const Darkmode = () => {

  const {
    setDisplayDarkMode,
    fontColor,
    setFontColor,
    fontFamily,
    setFontFamily,
    DMbackground,
    setDMbackground,
    cursor,
    setCursor} = useDataContext();
  useEffect(() => {
    return () => {
        setDisplayDarkMode(false)
    }
  }, [])
  const darkModeAnimation = useSpring({ right: 0, from: { right: -500 }, duration: 3000 })
  return (
    <animated.div style={darkModeAnimation} className={styles.container}>
      <div className={styles.header}>
        <span className={styles.error}>Security violation</span>
        <span className={styles.cross} onClick={() => setDisplayDarkMode(false)}>[ X ]</span>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>Style</h4>
        <div className={styles.content__header}>
          <p className={styles.content__header__filter}>Filter</p>
          <p className={styles.content__header__hov}>:hov</p>
          <p className={styles.content__header__cls}>.cls</p>
        </div>
      <div className="background">
      <h4 className={styles.content__title}>.Data .backgrounds &#123;</h4>
        <ul className={styles.content__list}>
          <li className={DMbackground === '' && styles.active} onClick={() => setDMbackground('')}><span className={styles.subtitle}>background:</span> inherit</li>
          <li className={DMbackground === 'lascano' && styles.active} onClick={() => setDMbackground('lascano')}><span className={styles.subtitle} >background:</span> url('l-a-s-c-a-n-o.jpg')</li>
          <li className={DMbackground === 'pintos' && styles.active}  onClick={() => setDMbackground('pintos')}><span className={styles.subtitle}>background:</span> url('e-n-d-m-e.jpg')</li>
        </ul>
      <h4 className={styles.content__title}>&#125;</h4>
      </div>
      <div className="font">
        <h4 className={styles.content__title}>.Data .font &#123;</h4>
        <ul className={styles.content__list}>
          <li className={fontFamily==='' && styles.active} onClick={() => setFontFamily('')}><span className={styles.subtitle}>font-family:</span>inherit</li>
          <li className={fontFamily==='DOS' && styles.active}  onClick={() => setFontFamily('DOS')}><span className={styles.subtitle}>font-family:</span> 'DOS', sans-serif</li>
          <li className={fontFamily==='GT' && styles.active}  onClick={() => setFontFamily('GT')}><span className={styles.subtitle}>font-family:</span> 'A-M-E-R-I-C-A', gt</li>
          <li className={fontColor==='' && styles.active} onClick={() => setFontColor('')}><span className={styles.subtitle}>color:</span> initial</li>
          <li className={fontColor==='blood' && styles.active} onClick={() => setFontColor('blood')}><span className={styles.subtitle}>color:</span> 'blood red'</li>
          <li className={fontColor==='dead' && styles.active} onClick={() => setFontColor('dead')}><span className={styles.subtitle}>color:</span> 'dead sky'</li>
        </ul>
        <h4 className={styles.content__title}>&#125;</h4>
      </div>
      <div className="cursor">
        <h4 className={styles.content__title}>.Data .cursor &#123;</h4>
        <ul className={styles.content__list}>
          <li className={cursor==='' && styles.active} onClick={()=>setCursor('')}><span className={styles.subtitle}>cursor:</span> inherit</li>
          <li className={cursor==='clickme' && styles.active} onClick={()=>setCursor('clickme')}><span className={styles.subtitle} >cursor:</span> C-L-I-C-K-M-E</li>
          <li className={cursor==='flipped' && styles.active} onClick={()=>setCursor('flipped')}><span className={styles.subtitle} >cursor:</span> f.l.i.p.p.e.d</li>
        </ul>
        <h4 className={styles.content__title}>&#125;</h4>
        <p className={styles.footer}>
        :root &#123; <br />
        &nbsp;&nbsp;--red: rgb(255, 0, 0); <br />
        &nbsp;&nbsp;--dark_red: #7F1A0F (126; 26; 15); <br />
        &nbsp;&nbsp;--blue: rgb:(0, 0, 255); <br />
        &nbsp;&nbsp;--green: rgb:(0, 255, 0); <br />
        &nbsp;&nbsp;--dark_green: rgb(255, 68, 68); <br />
        &nbsp;&nbsp;--purple:7D247C (125; 36; 124); <br />
        &nbsp;&nbsp;--pink: #F275AE (242; 117; 174); <br />
        &nbsp;&nbsp;--black: #000000; <br />
        &nbsp;&nbsp;--gray: #6D6E71; (109; 110; 113); <br />
        &nbsp;&nbsp;--white: #FFFFFF <br />
        &#125;
        </p>
      </div>
      </div>
    </animated.div>
  )
}

export default Darkmode
