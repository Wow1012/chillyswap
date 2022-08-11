import { useRef, useEffect } from 'react'
import styled from 'styled-components/macro'
import Container from '../../../components/Container'
import Flex from '../../../components/Flex'
import gsap from 'gsap'

const SectionWrapper = styled.div`
  position: relative;
  padding-top: 125px;
  padding-bottom: 254px;
  background-image: url('/images/nft/main/background.png');
  background-size: cover;
  background-position: 69%;

  @media (min-width: 768px) {
    background-position: center;
  }

  @media (min-width: 1440px) {
    padding-bottom: 340px;
  }
`

const Heading = styled.h2`
  font-family: BadaBoom;
  font-weight: 400;
  font-size: 52px;
  line-height: 65px;
  color: #FFF;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 96px;
    line-height: 102px;
  }
`

const Title = styled.div`
  margin-bottom: 12px;
`

const Text = styled.p`
  padding: 0;
  margin: 0;
  font-family: GilroyLight;
  font-size: 22px;
  line-height: 29px;
  color: #FFF;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 42px;    
  }
`
const Content = styled.div``

const Intro = styled.div`
  padding: 65px 10px 0px;

  @media (min-width: 768px) {
    padding-top: 200px;
  }
`


const BetStuff = styled.div`
  width: 100%;
	position: absolute;
  aspect-ratio: 3.15;
  bottom: 0;
  transform: translate(0, 50%);

	display: flex;
	justify-content: center;
	background-image: url('/images/nft/bet-stuff.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const MainSection = () => {
  const titleEl = useRef();
  const contentEl = useRef();

  useEffect(() => {
    gsap.timeline()
    .fromTo(titleEl.current, {
      opacity: 0,
      y: "+5px",
      scale: 0.8
    }, {
      opacity: 1,
      y: '0px',
      scale: 1,
      duration: 1
    }, 1)
    .fromTo(contentEl.current, {
      opacity: 0,
      y: "+5px",
      scale: 0.8
    }, {
      opacity: 1,
      y: '0px',
      scale: 1,
      duration: 1
    }, 1.5)
  }, [])

  return (
    <SectionWrapper>
      <Container>
        <Intro>
          <Flex column>
            <Title ref={titleEl}>
              <Heading>3000+UNIQUE</Heading>
              <Heading>NFT'S</Heading>
            </Title>
            <Content ref={contentEl}>
              <Text>Each one better than</Text>
              <Text>the other!</Text>
            </Content>
          </Flex>
        </Intro>
      </Container>
      <BetStuff />
    </SectionWrapper>
  )
}

export default MainSection;