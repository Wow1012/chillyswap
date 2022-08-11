import Tokenomics from "./tokenomics";
import Partners from "./partners";
import MapCarousel from './mapcarousel';
import styled from "styled-components/macro";
import Footer from "../../footer"

const SectionWrapper = styled.div`
  background: linear-gradient(180deg, #62D5E6 0%, #DBFBD5 100%);
  margin-top: -276px;
`;


const RoadMap = () => {
  return (
    <SectionWrapper>
      <MapCarousel />
      <Tokenomics />
      <Partners />
      <Footer />
    </SectionWrapper>
  )
};

export default RoadMap;