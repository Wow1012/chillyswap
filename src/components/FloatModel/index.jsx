import { useState, useEffect, useRef } from "react"
import gsap from "gsap"
import styled from "styled-components/macro"

const ModelWrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: ${props => props.mtop ? props.mtop : '0'};
  left: ${props => props.mleft ? props.mleft : '0'};
  width: ${props => props.mwidth ? props.mwidth : '100px'};
  height: ${props => props.mheight ? props.mheight : '100px'};
  background-image: url(${props => props.imgurl ? props.imgurl : ''});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) {
    top: ${props => props.top ? props.top : '0'};
    left: ${props => props.left ? props.left : '0'};
    width: ${props => props.width ? props.width : '100px'};
    height: ${props => props.height ? props.height : '100px'};
    background-image: url(${props => props.imgurl ? props.imgurl : ''});
  }
`

const FloatModel = ({mposition, position, imgurl}) => {
  const el = useRef();
  const [bBox, setBound] = useState({});
  // const tl = gsap.timeline({paused: true});

  const handleMouseMove = (e) => {
    let x = e.clientX - bBox.x;
    let y = e.clientY - bBox.y;

    gsap.to(el.current, {
      x: x * 0.2,
      y: y * 0.2,
    })    
  }

  useEffect(() => {
    setBound(el.current.getBoundingClientRect())
  }, [])

  return (
    <ModelWrapper
      ref={el}
      mtop={mposition.top}
      mleft={mposition.left}
      mwidth={mposition.width}
      mheight={mposition.height}
      top={position.top}
      left={position.left}
      width={position.width}
      height={position.height}
      imgurl={imgurl}
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
    </ModelWrapper>
  )
}


export default FloatModel;