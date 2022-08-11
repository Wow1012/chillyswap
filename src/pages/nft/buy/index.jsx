import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Flex from '../../../components/Flex';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import styled from 'styled-components/macro';
import './style.css';

import HerosTab from './Heros';

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const SectionWrapper = styled.div``
const InnerWrapper = styled.div`
  padding-bottom: 60px;
`


export const responsive = {
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

const PanelInner = styled.div`
  position: relative;
`

const FlexWrapper = styled(Flex)`
  height: 400px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 600px;
  }
`

const OverflowDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 62px;
  height: 100%;

  @media (min-width: 768px) {
    width: 112px;
  }
`

export const OverflowLeft = styled(OverflowDiv)`
  left: 0;
  background-image: linear-gradient(90deg,#000 0 25%,rgba(0,0,0,0));

  @media (min-width: 768px) {
    background-image: linear-gradient(90deg,#000 0 20%,rgba(0,0,0,0));
  }
`

export const OverflowRight = styled(OverflowDiv)`
  right: 0;
  background-image: linear-gradient(90deg,rgba(0,0,0,0) 0 25%, #000);

  @media (min-width: 768px) {
    background-image: linear-gradient(90deg,rgba(0,0,0,0) 0 20%, #000);
  }
`


export const SlideItem = styled.div`
  height: 300px;
  position: relative;

  @media (min-width: 768px) {
    height: 370px;
  }
`

export const AssetBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(108, 217, 229, 0) 0%, rgba(108, 216, 229, 0.52) 100%);
  transform: matrix(0.98, 0, -0.19, 1, 0, 0);
`

export const AssetItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 150px;
  height: 215px;

  @media (min-width: 768px) {
    width: 170px;
    height: 254px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`


const Text = styled.p`
  padding: 0 20px;
  margin: 0;
  font-family: GilroyLight;
  font-size: 15px;
  line-height: 22px;
  color: #aaa;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 10px; 

  @media (min-width: 768px) {
    width: 40%;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 35px; 
  }
`

const TextWrapper = styled.div`
  margin-bottom: 15px;
`

const BuyBtn = styled(Button)`
  @media (min-width: 768px) {
    padding: 8px 55px;
  }
`

const BasicTab = () => (
  <Tabs>
    <TabList>
      <Tab>POWER UPS</Tab>
      <Tab>GADGETS</Tab>
      <Tab>HEROES</Tab>
      <Tab>ASSETS</Tab>
    </TabList>
    <TabPanel>
      <PanelInner >
        <Container>
          <FlexWrapper column justifyCenter alignCenter>
            <div className='carousel--wrapper'>
              <Carousel
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                customTransition="all .5s ease"
                >
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/assets/0.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/assets/0.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/assets/0.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/assets/0.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/assets/0.png' />
                    </AssetItem>
                  </SlideItem>
              </Carousel>
            </div>
            <OverflowLeft />
            <OverflowRight />
          </FlexWrapper>
        </Container>
      </PanelInner>     
    </TabPanel>
    <TabPanel>
      <PanelInner >
        <Container>
          <FlexWrapper column justifyCenter alignCenter>
            <div className='carousel--wrapper'>
              <Carousel
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                customTransition="all .5s ease"
                >
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/gadgets/0.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/gadgets/1.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                    <img src='/images/nft/buy/gadgets/0.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/gadgets/1.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/gadgets/0.png' />
                    </AssetItem>
                  </SlideItem>
              </Carousel>
            </div>
            <OverflowLeft />
            <OverflowRight />
          </FlexWrapper>
        </Container>
      </PanelInner>     
    </TabPanel>
    <TabPanel>
      <HerosTab />
    </TabPanel>
    <TabPanel>
      <PanelInner >
        <Container>
          <FlexWrapper column justifyCenter alignCenter>
            <div className='carousel--wrapper'>
              <Carousel
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                customTransition="all .5s ease"
                >
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/gadgets/0.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/gadgets/1.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                    <img src='/images/nft/buy/gadgets/0.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/gadgets/1.png' />
                    </AssetItem>
                  </SlideItem>
                  <SlideItem>
                    <AssetBackground></AssetBackground>
                    <AssetItem>
                      <img src='/images/nft/buy/gadgets/0.png' />
                    </AssetItem>
                  </SlideItem>
              </Carousel>
            </div>
            <OverflowLeft />
            <OverflowRight />
          </FlexWrapper>
        </Container>
      </PanelInner>     
    </TabPanel>
  </Tabs>
);

const BuySection = () => {
  return (
    <SectionWrapper>
      <InnerWrapper>
        <BasicTab />
        <Flex column alignCenter>
          <TextWrapper>
            <Text>This enables owners of NFTs to wear their assets across all games and apps across the Chili metaverse. There are many different types of Avatars to choose from, and the possibilities for customization are endless. </Text>
          </TextWrapper>
          <BuyBtn>BUY NFT</BuyBtn>
        </Flex>
      </InnerWrapper>
    </SectionWrapper>
  )
}

export default BuySection;