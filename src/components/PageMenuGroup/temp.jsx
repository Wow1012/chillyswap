import { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import gsap from 'gsap'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const MenuWrapper = styled.div`
  position: absolute;
  width: 93px;
  height: 89px;
  top: 80%;
  left: 2px;

  @media (min-width: 768px) {
    width: 120px;
    height: 114px;  
    top: 90%;
    left: 5%;
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
`

const Button = styled.div`
  position: absolute;
  width: 65px;
  height: 35px;
  top: 5%;
  left: 35%;
  cursor: pointer;
`

const Menu = ({swingRadius, position, boardData, standardData, textData}) => {
  const boardRef = useRef();
  const btnRef = useRef();

  const transformOriginValue = '50% - ' + swingRadius + 'vh';
  let tl = gsap.timeline({paused: true});

  useEffect(() => {
    const hoverAnim = gsap.to(
      boardRef.current, {
      duration: 7, 
      rotation: '-3.5deg', 
      transformOrigin: transformOriginValue, 
      ease: 'elastic.out( 3, 0.1 )',
    });
    tl.add(hoverAnim);

    if (btnRef && btnRef.current) {
      btnRef.current.addEventListener("mouseover", () => tl.play(0));
    }
  }, [])

  return (
    <MenuWrapper>
      <Standard  imgurl={standardData.img} />
       <Board ref={boardRef} imgurl={boardData.img} mWidth={boardData.mWidth} mHeight={boardData.mHeight} mTop={}>
        <Text>ABOUT</Text>
      </Board>
      <Button ref={btnRef}>
      </Button>
    </MenuWrapper>
  )
}

const PageMenuGroup = () => {
  return (
    <Wrapper>
      <Menu 
        swingRadius={10} 
        position={
          {
            width: '93px',
            height: '89px',
            bottom: '2%',
            left: '5%'
          }
        }
        boardData={
          {
            img: '/images/boards/about/2.png',
            width: '65px',
            height: '35px',
            top: '5%',
            left: '35%'
          }
        }
        standardData={
          {
            img: '/images/boards/about/1.png'
          }
        } 
        textData={
          {
            content: 'ABOUT',
            top: '42%',
            left: '12.6%'
          }
        } 
      />
    </Wrapper>
  )
}

export default PageMenuGroup;