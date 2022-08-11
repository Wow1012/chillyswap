import styled from 'styled-components/macro';
import Hamburger from '../../components/Hamburger'
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export const SelectContext = createContext();

const GropuWrapper = styled.div`
  position: relative;
`

const HiddenWrapper = styled.ul`
  position: absolute;
  opacity: 0;
  top: 54px;
  right: 0;
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: white;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  border-radius: 12px;
  padding: 8px 30px;
  
  li {
    a {
      font-family: BadaBoom;
      font-size: 28px;
      line-height: 30px;
      color: #FFF;
      margin: 10px 0;
      text-decoration: none;
    }
    text-align: center;

  }
`

const HiddenMenu = ({data}) => {
  const el = useRef();
  const tl = useRef();
  const clicked = useContext(SelectContext);

  useEffect(() => {
    tl.current = gsap.timeline()
    .to(el.current, {
      opacity: 1
    });
    return tl.current.progress(0).kill();
  }, [])

  useEffect(() => {
    tl.current.reversed(!clicked);
  }, [clicked])

  return (
    <HiddenWrapper ref={el}>
      {data.map((item, index) => {
        return (
          <li key={index}><Link to={item}>{item}</Link></li>
        )
      })}
    </HiddenWrapper>
  )
}

const MenuList = [
  'HOME',
  'ABOUT',
  'NFTS',
  'TEAM'
]


const MenuGroup = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <SelectContext.Provider value={clicked}>
      <GropuWrapper>
        <Hamburger onClick={() => {
          setClicked(!clicked)
        }} />
        <HiddenMenu data={MenuList} />
      </GropuWrapper>
    </SelectContext.Provider>
  )
}

export default MenuGroup;