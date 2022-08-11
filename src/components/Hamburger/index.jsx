import { useCallback, useContext, useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import { SelectContext } from '../MenuGroup'
import { useArrayRef } from '../../utils'
import gsap from 'gsap'

const Wrapper = styled.div`
  cursor: pointer;
  height: 50px;
  position: relative;
  transition: all 0.4s cubic-bezier(0, 0, 0, 1) 0s;
  user-select: none;
  width: 50px;
  outline: none;
`

const Item = styled.div`
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

const Item1 = styled(Item)`
  background-image: url('/images/hamburger/1.png');
  top: 9px;
  transform: : 'none'
`

const Item2 = styled(Item)`
  background-image: url('/images/hamburger/2.png');
  top: 21px;
  transform: 'none'
`
const Item3 = styled(Item)`
  background-image: url('/images/hamburger/3.png');
  top: 33px;
  transform: 'none'
`

const Hamburger = ({onClick}) => {
  const clicked = useContext(SelectContext);
  const tl = useRef();
  const el = useRef();

  const [items, addItem] = useArrayRef();

  useEffect(() => {
    tl.current = gsap.timeline()
      .to(el.current, 0.05, {
        rotation: -90
      })
      .to(items.current[0], { y: '+11px', rotation: -45, duration: 0.05 }, 0)
      .to(items.current[1], { opacity: 0, duration: 0.1 }, 0)
      .to(items.current[2], { y: '-11px', rotation: 45, duration: 0.05 }, 0)

    return tl.current.progress(0).kill();
  }, [])

  useEffect(() => {
    tl.current.reversed(!clicked)
  }, [clicked])

  return (
    <Wrapper onClick={onClick} ref={el}>
      <Item1 ref={addItem} />
      <Item2 ref={addItem} />
      <Item3 ref={addItem}/>
    </Wrapper>
  )
}

export default Hamburger;