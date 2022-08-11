import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro';
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, useProgress } from '@react-three/drei'
import Container from '../../components/Container';
import PageMenuGroup from '../../components/PageMenuGroup';
import './style.css';
import Fire from './Fire'
import {Model} from './Scene'
import gsap from 'gsap';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #010104;
`

const Intro = styled.div`
  position: absolute;
  top: 55%;
  transform: translate(10px, -50%);
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    color: #FFF;
    font-size: 16px;
    font-family: GiloryRegular;
  }

  @media (min-width: 768px) {
    transform: translate(35px, -50%);
    span {
      font-size: 28px;
      line-height: 34px;
    }
  }
`

const Coin = styled.div`
  position: absolute;
  padding: inherit;
  top: 45%;
  transform: translate(0, -50%);
  right: 5px;
  width: 89px;
  height: 90px;
  background-image: url('/images/coin.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    width: 107px;
    height: 109px;
  }
`


const StyledContainer = styled(Container)`
  width: 100%;
  height: 100%;
`

const HomePage = () => {
  const { active, progress, loaded } = useProgress()
  const loaderRef = useRef();
  const wrapper = useRef();

  useEffect(() => {
    let qLoader = gsap.utils.selector(loaderRef);

    if (!active) {
      gsap.timeline({delay: 1})
      .to(qLoader('.loader-img'), {
        opacity: 0,
        duration: 0.2
      })
      .to(loaderRef.current, {
        opacity: 0,
        duration: 2,
        zIndex: -1,
        ease: "power2.in"
      })
      .to('.header--wrapper', {
        opacity: 1
      })
    }
  }, [active])

  return (
    <Wrapper ref={wrapper}>
      <StyledContainer fullVertical>
        <LoaderWrapper ref={loaderRef}>
          <LoaderImg className='loader-img' style={{position: "absolute", top: "0%", left: "0%"}}>
            {/* <img src="/images/home/loading.gif" alt='loading.gif' /> */}
            <video autoPlay muted>
              <source src="/video/loadingVideo.mp4" type="video/mp4"/>
            </video>
          </LoaderImg>
        </LoaderWrapper>
       <SceneWrapper>
          <Canvas drp={[1, 2]} camera={{ position: [7.5, 1.2, 4.5], fov: 20 }}>
            <ambientLight intensity={1.2} color="#cfd1a3" />
            <pointLight position={[1.2, 0.2, 0.8]} color={0xa89b32} intensity={1.4} />
            <Suspense fallback={<Html>{progress} : {loaded}</Html>}>
              <Model scale={40} position={[-0.6, -0.8, -0.3]} />
              <Fire scale={0.15} position={[0.52, -0.3, 0.37]} />
            </Suspense>
          </Canvas>
        </SceneWrapper>
          <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <Intro>
              <span>An interconnected world of unique game</span>
              <span>experiences involving customized</span>
              <span>avatars usable in <b>25+ games</b> in a single</span>
              <span style={{textDecoration: 'underline'}}> Play-to-Earn Ecosystem</span>
            </Intro>
            <Coin />
            <PageMenuGroup />
          </div>
      </StyledContainer>
    </Wrapper>
  )
}

export default HomePage;

const SceneWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 1;
  z-index: 100;
`
const LoaderImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`