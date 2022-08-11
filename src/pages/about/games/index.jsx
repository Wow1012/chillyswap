import HorizonGallery from "../../../components/HorizonGallery";
import styled from "styled-components/macro";

const SectionWrapper = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 1;
`;

const Background = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`

const Games = () => {
  return (
    <SectionWrapper>
      <HorizonGallery />
      <Background>
        <img src='/images/about/games-bg.png' style={{width: '100%', height: '100%'}} />
      </Background>
    </SectionWrapper>
  );
};

export default Games;