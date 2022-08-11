import styled from 'styled-components/macro';
import IntroSection from "./intro";
import VideoSection from './video';
import GamesSection from './games';
import RoadMap from './roadmap';

const PageWrapper = styled.div`
  overflow: hidden;
`


const AboutPage = () => {
  return (
      <PageWrapper>
        <IntroSection />
        <VideoSection />
        <GamesSection />
        <RoadMap />
      </PageWrapper>
  )
}

export default AboutPage;