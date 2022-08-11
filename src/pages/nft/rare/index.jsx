import styled from 'styled-components/macro'
import Flex from '../../../components/Flex';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './style.css'
import Container from '../../../components/Container';

const SectionWrapper = styled.div`
  position: relative;
  padding: 100px 0;

  @media (min-width: 768px) {
    padding: 250px 0;
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

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 68px 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 68px;
    gap: 80px;
  }
`

const ImgWrapper = styled.div`
  padding: 30px 0;
  background: linear-gradient(140.09deg, rgba(102, 208, 217, 0.1995) 10.95%, rgba(185, 218, 188, 0.182) 81.98%);
  border-radius: 24px;
  border: 2px solid #87A48F;
  height: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 82%;
    transform: translate(0, -14%);
  }  

  @media (max-width: 767px) {
    width: 78vw;
  }

  @media (min-width: 768px) {
    height: 75%;
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
    font-size: 62px;
    line-height: 76px;
  }

  @media (min-width: 1024px) {
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
  font-size: 12px;
  line-height: 14px;
  color: #FFF;
  text-align: right;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 12px;
    padding: 0;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 20px;
  }
`

const Content = styled.div``

const ContentWrapper = styled.div`
  ${Flex} {
    @media (min-width: 768px) {
      align-items : flex-end;
    }
  }

  @media (max-width: 767px) {
    padding: 0 20px;
  }
`

const BgImg = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    top: 44%;
    img {
      width: 100%;
    }
  }
`

const RareSection = () => {
  return (
    <SectionWrapper className='rare--section'>
      <BgImg>
        <img src='/images/nft/rare/background.png' />
      </BgImg>
      <Container>
        <Carousel
          responsive={responsive}
          showDots={true}
          ssr={true}
          infinite={true}
          autoPlay={false}
          arrows={false}
        >
          <Slide>
            <ImgWrapper>
              <img src='/images/nft/rare/carousel/1.png' />
            </ImgWrapper>
            <ContentWrapper>
              <Flex column alignEnd>
                <Content>
                  <Text>Chili NFT’s are unique in their own way, with the add-ons such as power ups, assets, wearables, every individual has the potential to update and customize their avatar over and over.</Text>
                </Content>
                <Title>
                  <Heading>RARE NFTS</Heading>
                </Title>
                <Content>
                  <Text>Each one better than the other!</Text>
                </Content>
              </Flex>
            </ContentWrapper>
          </Slide>
          <Slide>
            <ImgWrapper>
              <img src='/images/nft/rare/carousel/2.png' />
            </ImgWrapper>
            <ContentWrapper>
              <Flex column alignEnd>
                <Content>
                  <Text>Chili NFT’s are unique in their own way, with the add-ons such as power ups, assets, wearables, every individual has the potential to update and customize their avatar over and over.</Text>
                </Content>
                <Title>
                  <Heading>RARE NFTS</Heading>
                </Title>
                <Content>
                  <Text>Each one better than the other!</Text>
                </Content>
              </Flex>
            </ContentWrapper>
          </Slide>
          <Slide>
            <ImgWrapper>
              <img src='/images/nft/rare/carousel/3.png' />
            </ImgWrapper>
            <ContentWrapper>
              <Flex column alignEnd>
                <Content>
                  <Text>Chili NFT’s are unique in their own way, with the add-ons such as power ups, assets, wearables, every individual has the potential to update and customize their avatar over and over.</Text>
                </Content>
                <Title>
                  <Heading>RARE NFTS</Heading>
                </Title>
                <Content>
                  <Text>Each one better than the other!</Text>
                </Content>
              </Flex>
            </ContentWrapper>
          </Slide>
          <Slide>
            <ImgWrapper>
              <img src='/images/nft/rare/carousel/4.png' />
            </ImgWrapper>
            <ContentWrapper>
              <Flex column alignEnd>
                <Content>
                  <Text>Chili NFT’s are unique in their own way, with the add-ons such as power ups, assets, wearables, every individual has the potential to update and customize their avatar over and over.</Text>
                </Content>
                <Title>
                  <Heading>RARE NFTS</Heading>
                </Title>
                <Content>
                  <Text>Each one better than the other!</Text>
                </Content>
              </Flex>
            </ContentWrapper>
          </Slide>
          <Slide>
            <ImgWrapper>
              <img src='/images/nft/rare/carousel/5.png' />
            </ImgWrapper>
            <ContentWrapper>
              <Flex column alignEnd>
                <Content>
                  <Text>Chili NFT’s are unique in their own way, with the add-ons such as power ups, assets, wearables, every individual has the potential to update and customize their avatar over and over.</Text>
                </Content>
                <Title>
                  <Heading>RARE NFTS</Heading>
                </Title>
                <Content>
                  <Text>Each one better than the other!</Text>
                </Content>
              </Flex>
            </ContentWrapper>
          </Slide>
        </Carousel>
      </Container>
    </SectionWrapper>
  )
}

export default RareSection;