import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components/macro'

const HamburgerWrapper = styled.div`
  cursor: pointer;
  height: 50px;
  position: relative;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  user-select: none;
  width: 50px;
  outline: none;
  transform: ${props => props.clicked ? 'rotate(-90deg)' : 'none' };
`
const HamburgerItem = styled.div`
  width: 45px;
  height: 9px;
  left: 3px;
  position: absolute;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  transform: none;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

const Item1 = styled(HamburgerItem)`
  background-image: url('/images/hamburger/1.png');
  top: 9px;
  transform: : 'none'
`

const Item2 = styled(HamburgerItem)`
  background-image: url('/images/hamburger/2.png');
  top: 21px;
  transform: 'none'
`
const Item3 = styled(HamburgerItem)`
  background-image: url('/images/hamburger/3.png');
  top: 33px;
  transform: 'none'
`

const Wrapper = styled.div``

const HiddenMenu = styled.ul`
  display: ${props => (
    props.show ? 'flex' : 'hidden'
  )};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: white;
  overflow: hidden;
`

const DropItem = styled.li`
`


const HamburgerGroup = ({data}) => {
  const [clicked, setClicked] = useState(false);
  const hamburgerWrapper = useRef();
  const item1 = useRef();
  const item2 = useRef();
  const item3 = useRef();

  const dropWrapper = useRef();

  let t1 = gsap.timeline({ defaults: {duration: 0.1, ease: "elastic"} })
    .to(hamburgerWrapper.current, {
      rotate: 90
    })
    // .to(item1.current, {
    //   y: '+11px',  
    //   rotation: '-45'
    // }, 0)
    // .to(item2.current, {
    //   opacity: 0
    // }, 0)
    // .to(item3.current, {
    //   rotation: '+=45',
    //   y: '-11px'
    // }, 0);

  const handleClick = () => {
    let timeline = gsap.timeline({ defaults: {duration: 0.1, ease: "elastic"} });

    if (!clicked) {
      t1.play();
    }     
    else {
      console.log("here")
      t1.reverse();
    }

    setClicked(prev => !prev);
  }

  return (
    <Wrapper>
      <HamburgerWrapper onClick={handleClick} ref={hamburgerWrapper}>
        <Item1 ref={item1} />
        <Item2 ref={item2} />
        <Item3 ref={item3} />
      </HamburgerWrapper>
      <HiddenMenu ref={dropWrapper}>
        {data.map((item, index) => {
          return (
            <DropItem key={index}>{item}</DropItem>
          )
        })}
      </HiddenMenu>
    </Wrapper>
  )
}

export default HamburgerGroup;