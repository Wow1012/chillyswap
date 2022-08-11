import React from 'react';
import styled from 'styled-components/macro'

const Wrapper = styled.div`
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
`

const Loader = React.forwardRef((props, ref) => (
    <Wrapper ref={ref}>
      <LoaderImg>
        {/* <img src="/images/home/loading.gif" alt='loading.gif' /> */}
        <video autoplay>
        <source src="/video/loadingVideo.mp4" type="video/mp4"/>
        </video>
      </LoaderImg>
    </Wrapper>
))

export default Loader;