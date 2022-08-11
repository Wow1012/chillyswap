import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components/macro';
import Container from '../../../../components/Container';
import './style.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const CarouselWrapper = styled.div`
  width: 50%;
`

const Slider = styled.div`
  width: 196px;
  height: 520px;

  @media (min-width: 768px) {
    width: 337px;
    height: 1072px;
  }
`

const SignBoardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

const Signboard = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #84203F 0%, #AC3E1C 100%);
  transform: perspective(500px) rotateY(33deg) translate(15%, 0);
  padding-left: 15px;
  color: #FFF;

  &:before {
    content: '';
    width: 20px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    height: 100%;
    transform: perspective(500px) rotateY(-33deg) translate(-100%,0);
    background: #FFD580;
  }

`

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  margin-top: -100px;
`

const LineImg = styled.div`
  height: 80%;
  background-image: url('/images/about/roadmap/carousel/sign-bg.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const RoadMapTitle = styled.div`
  background-image: url('/images/about/roadmap/carousel/title-bg.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  width: 414px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 239px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 608px;
    top: 30%;
  }
`

const Heading = styled.h2`
  font-family: BadaBoom;
  font-weight: 400;
  text-align: center;
  font-size: 38px;
  line-height: 45px;
  color: #FFF;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 77px;
    line-height: 111px;
  }
`

const MapCarousel = () => {
  return (
    <div className='roadmap--wrapper'>
      <Container>
        <InnerContainer>
          <CarouselWrapper>
            <Carousel
              responsive={responsive}
              showDots={true}
              ssr={true}
              infinite={true}
              autoPlay={true}
              arrows={false}
            >
              <Slider>
                <LineImg>

                </LineImg>
                <SignBoardWrapper>
                  <Signboard>
                  <p>Each one better </p>
                  <p>Each one better </p>
                </Signboard>
                </SignBoardWrapper>
              </Slider>
              <Slider>
                <LineImg>

                </LineImg>
                <SignBoardWrapper>
                  <Signboard>
                  <p>Each one better </p>
                  <p>Each one better </p>
                </Signboard>
                </SignBoardWrapper>
              </Slider>
              <Slider>
                <LineImg>

                </LineImg>
                <SignBoardWrapper>
                  <Signboard>
                  <p>Each one better </p>
                  <p>Each one better </p>
                </Signboard>
                </SignBoardWrapper>
              </Slider>
            </Carousel>
          </CarouselWrapper>
        </InnerContainer>
        <RoadMapTitle>
          <Heading>ROADMAP</Heading>
        </RoadMapTitle>
      </Container>
    </div>
  )
}

export default MapCarousel;