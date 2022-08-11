import { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const MenuWrapper = styled.div`
  position: absolute;
  width: 93px;
  height: 89px;
  bottom: 2%;
  left: 2px;
  z-index: 4;

  @media (min-width: 768px) {
    width: 188px;
    height: 171px;
    bottom: 7%;
    left: 5px;
  }
`

const Standard = styled.div`
  background-image: url(${props => props.imgurl ? props.imgurl : ''});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  z-index: 2;
`

const Text = styled.span`
  position: absolute;
  font-family: BadaBoom;
  font-size: 17px;
  top: 42%;
  left: 12.6%;
  color: #FFF;
  user-select: none;

  @media (min-width: 768px) {
    font-size: 31px;
    top: 47%;
    left: 16.6%;
  }
`

const Board = styled.div`
  position: absolute;
  background-image: url(${props => props.imgurl ? props.imgurl : ''});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 65px;
  height: 35px;
  top: 5%;
  left: 35%;
  cursor: pointer;
  z-index: -1;

  @media (min-width: 768px) {
    width: 124px;
    height: 71px;
  }
`

const Button = styled.div`
  position: absolute;
  width: 65px;
  height: 35px;
  top: 5%;
  left: 35%;
  cursor: pointer;
  z-index: 5;

  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 124px;
    height: 71px;
  }
`

const Light = styled.div`
  background-image: url('/images/boards/light.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  background-image: url(/images/boards/light.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0;
  width: 66px;
  height: 79px;
  top: 7px;
  right: -2px;  

  @media (min-width: 768px) {
    width: 117px;
    height: 150px;
    top: 34px;
    right: 8px;  
  }
`

const Menu = ({swingRadius}) => {
  const boardRef = useRef();
  const btnRef = useRef();
  const lightRef = useRef();

  const transformOriginValue = '50% - ' + swingRadius + 'vh';
  let tl;
  let tl2;

  useEffect(() => {
    tl = gsap.timeline({paused: true})
    .to(
      boardRef.current, {
      duration: 3, 
      rotation: '-3deg', 
      transformOrigin: transformOriginValue, 
      ease: 'elastic.out( 3, 0.2 )',
    }, 0)
    .to(lightRef.current, 1, {
     opacity: 1,
    }, 0);

    tl2 = gsap.timeline({paused: true})
    .to(
        lightRef.current, 1, {
          opacity: 0,
          // onComplete: function() { this.time(0).kill(); }
        }
      )
  }, [])

  return (
    <MenuWrapper>
      <Standard  imgurl='/images/boards/about/1.png'></Standard>
      <Board ref={boardRef} imgurl='/images/boards/about/2.png'>
        <Text>ABOUT</Text>
      </Board>
      <Button ref={btnRef} 
        onMouseEnter={() => {
          tl.play(0)
        }}
        onMouseLeave={() => {
          tl.progress(0);
          tl2.play(0)
        }}
      >
        <Link to='/about'></Link>
      </Button>
      <Light ref={lightRef} />
    </MenuWrapper>
  )
}

export default Menu;