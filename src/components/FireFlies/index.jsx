import styled from 'styled-components/macro'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;  
`

const StyledFly = styled.div`
  width:19px;
  height:19px;
  position:absolute;
  background-image: url('/images/fly/1.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
  z-index:2;
`

function R(max)
{
  return Math.random() * max;
}

const Fly = () => {
  const [w, setW] = useState(window.innerWidth);
  const [h, setH] = useState(window.innerHeight)
  const el = useRef();

  window.addEventListener('resize', resize)
  function resize() {
    setW(window.innerWidth);
    setH(window.innerHeight);
  }

  function Anim(el) {
    gsap.to(
      el.current,
      { motionPath: {
        path: [
          {
            x: R(w),
            y:R(h)
          },
          {
            x: R(w),
            y: R(h)
          }
        ],
        fromCurrent: true,
        autoRotate: true
      },
        duration: R(20) + 10,
        opacity: R(2),
        scale: R(1) + 0.5,
        delay: R(5),
        onComplete: Anim,
        onCompleteParams: [el]
      });
  }

  useEffect(() => {
    let hoverAnim = gsap.to(el.current, {
      boxShadow: '0px 0px 10px 2px green',
      repeat: 3,
      paused: true,
      onComplete: function() { this.time(0).kill(); }
    })

    gsap.set(el.current, {
      x: R(w),
      y: R(h),
      opacity: 0
    });
    Anim(el);
    if (el && el.current) {
      el.current.addEventListener("mouseover", () => hoverAnim.play());
    }
  }, []);

  return (
    <StyledFly ref={el} />
  )
}

const FireFlies = ({count}) => {
  const tweens = [];

  for (let i = 0; i < count; i += 1) {
    tweens.push(
      <Fly key={i} />
    )
  }

  return (
    <Wrapper>
      {tweens}
    </Wrapper>
  )
}

export default FireFlies;

