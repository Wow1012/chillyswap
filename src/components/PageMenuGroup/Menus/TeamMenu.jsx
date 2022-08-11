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
  width: 67px;
  height: 82px;
  bottom: 2%;
  right: 109px;
  z-index: 4;

  @media (min-width: 768px) {
    width: 153px;
    height: 159px;
    bottom: 6%;
    right: 206px;
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
  font-size: 16px;
  top: 43%;
  left: 16.6%;
  color: #FFF;
  user-select: none;

  @media (min-width: 768px) {
    font-size: 31px;
    top: 43%;
    left: 19.6%;
  }
`

const Board = styled.div`
  position: absolute;
  background-image: url(${props => props.imgurl ? props.imgurl : ''});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 52px;
  height: 34px;
  top: 5%;
  left: 3%;
  cursor: pointer;
  z-index: -1;

  @media (min-width: 768px) {
    width: 97px;
    height: 62px;
  }
`

const Button = styled.div`
  position: absolute;
  width: 52px;
  height: 34px;
  top: 5%;
  left: 3%;
  cursor: pointer;
  z-index: 5;

  
  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    width: 97px;
    height: 62px;
  }
`


const Light = styled.div`
  background-image: url('/images/boards/light.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 12px;
  left: 1px;
  width: 53px;
  height: 69px;
  opacity: 0;

  @media (min-width: 768px) {
    top: 26px;
    left: 4px;
    width: 106px;
    height: 140px;
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
      opacity: 1
    }, 0);

    tl2 = gsap.timeline({paused: true})
      .to(
        lightRef.current, 1, {
          opacity: 0
        }
      )
  }, [])

  return (
    <MenuWrapper>
      <Standard  imgurl='/images/boards/team/1.png'></Standard>
      <Board ref={boardRef} imgurl='/images/boards/team/2.png'>
        <Text>TEAM</Text>
      </Board>
      <Button ref={btnRef}
        onMouseEnter={() => {
          tl.play(0)
        }}

        onMouseLeave={() => {
          tl.progress(0);
          tl2.play(0);
        }}
      >
        <Link to='/team'></Link>
      </Button>
      <Light ref={lightRef} />
    </MenuWrapper>
  )
}

export default Menu;