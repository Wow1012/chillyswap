import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styled from "styled-components/macro";

gsap.registerPlugin(ScrollTrigger);

const GalleryWrapper = styled.div`
  transform: skewY(-10deg);
`;

const PanelsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const Panel = styled.div`
  width: 500px;
  img {
    width: 100%;
    height: auto;
  }
`

const GalleryHeader = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-family: BadaBoom;
    font-size: 95px;
    font-weight: 400;
    color: #FFF;
  }
`


const HorizonGallery = () => {


  return (
    <GalleryWrapper>
      <GalleryHeader>
        <h2>Games</h2>
      </GalleryHeader>
      <PanelsWrapper>
        <Panel>
          <img src="/images/about/games/1.jpg"></img>
        </Panel>
        <Panel style={{width: '682px'}}>
          <img src="/images/about/games/2.jpg"></img>
        </Panel>
        <Panel>
          <img src="/images/about/games/3.jpg"></img>
        </Panel>
      </PanelsWrapper>
    </GalleryWrapper>
  )
};

export default HorizonGallery;
