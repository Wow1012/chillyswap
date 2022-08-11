import { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'
import AboutMenu from './Menus/AboutMenu'
import NFTMenu from './Menus/NFTMenu'
import TeamMenu from './Menus/TeamMenu'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const PageMenuGroup = () => {
  return (
    <Wrapper>
      <AboutMenu swingRadius={10} />
      <NFTMenu swingRadius={10} />
      <TeamMenu swingRadius={10} />
    </Wrapper>
  )
}

export default PageMenuGroup;

