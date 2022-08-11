import styled from 'styled-components/macro';
import Footer from '../footer';

import Flex from '../../components/Flex';

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import './style.css'
import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useEffect } from 'react';
import Container from '../../components/Container';

const PageWrapper = styled.div`
  padding-top: 250px;
  background-color: #000;
	color: #FFF;
	overflow: hidden;

  @media (min-width: 768px) {
    padding-top: 280px;
  }
`


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    // slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    // slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const InnerWrapper = styled.div`
  position: relative;
`

const Heading = styled.h2`
  font-family: GilroyBold;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #FFF;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 42px;
  }

`

const Title = styled.div`
  margin-bottom: 12px;
  padding: 0 10px;
`

const Content = styled.div`
  padding: 0 10px;
`


const Text = styled.p`
  padding: 0;
  margin: 0;
  font-family: GilroyLight;
  font-size: 14px;
  line-height: 17px;
  color: #FFF;
  text-align: right;

  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 12px;
    padding: 0;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 20px;
  }
`

const CustomArrowWrapper = styled(Flex)`
  padding-right: 10px;
`

const CustomArrow = styled.div`
  cursor: pointer;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 35px;
  height: 35px;
`

const ArrowInnerWrapper = styled(Flex)`
  width: 200px;
`

const CustomLeftArrow = styled(CustomArrow)`
  background-image: url('/images/team/left-arrow.png');
`
const CustomRightArrow = styled(CustomArrow)`
  background-image: url('/images/team/right-arrow.png');
`


const TeamPage = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const chracterRef = useRef();
  const infoRef = useRef();
  const [carouselState, setCarouselState] = useState();

  useEffect(() => {
    let cQ = gsap.utils.selector(chracterRef);

    gsap.timeline()
    .to(cQ(".character").at(currentItem), {
      zIndex: '2',
      opacity: '1'
    })
  }, [])

  const beforeChange = (nextSlide) => {
    let nextItem = (nextSlide - 2) % 7;

    let cQ = gsap.utils.selector(chracterRef);
    gsap.timeline()
    .to(cQ(".character").at(currentItem), {
      opacity: '0',
      zIndex: '-1'
    })
    .to(cQ(".character").at(nextItem), {
      opacity: '1',
      zIndex: '2'
    })

    setCurrentItem(nextItem);
  }

  return (
    <PageWrapper className='team--page'>
      <InnerWrapper>
        <div className='carousel-wrapper'
        >
          <Carousel
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            customTransition="all .5s ease"
            beforeChange={nextSlide => beforeChange(nextSlide)}
            arrows={false}
            ref={el => setCarouselState(el)}
          >
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
            <div className='slide'></div>
          </Carousel>
          <div className='main--item--bg'>
          </div>
        </div>
        <div className='character--list' ref={chracterRef}>
          <div className='character--wrapper'>
            <div className='character'>
              <img src='/images/team/0.png' />
            </div>
            <div className='character'>
              <img src='/images/team/1.png' />
            </div>
            <div className='character'>
              <img src='/images/team/2.png' />
            </div>
            <div className='character'>
              <img src='/images/team/3.png' />
            </div>
            <div className='character'>
              <img src='/images/team/4.png' />
            </div>
            <div className='character'>
              <img src='/images/team/5.png' />
            </div>
            <div className='character'>
              <img src='/images/team/6.png' />
            </div>
            <div className='character'>
              <img src='/images/team/7.png' />
            </div>
          </div>
        </div>
        <div className='info--list' ref={infoRef}>
          <div className='info--wrapper'>
            <div className='info'>
              <Container>
                <Flex column alignEnd>
                  <Title>
                    <Heading>RARE NFTS</Heading>
                  </Title>
                  <Content>
                    <Text>Each one better than the other!</Text>
                  </Content>
                </Flex>
              </Container>
            </div>
          </div>
        </div>
      </InnerWrapper>
      <Container>
        <CustomArrowWrapper justifyEnd>
          <ArrowInnerWrapper justifyBetween>
            <CustomLeftArrow onClick={() => carouselState.previous()}></CustomLeftArrow>          
            <CustomRightArrow onClick={() => carouselState.next()}></CustomRightArrow>
          </ArrowInnerWrapper>
        </CustomArrowWrapper>
      </Container>
      <Footer />
    </PageWrapper>
  )
}

export default TeamPage;