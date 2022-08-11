import styled from 'styled-components/macro';
import Container from '../../../../components/Container';
import Flex from '../../../../components/Flex';
import { OverflowLeft, OverflowRight, responsive, SlideItem, AssetBackground, AssetItem } from '..';
import Carousel from "react-multi-carousel";
import { useState } from 'react';
import 'react-multi-carousel/lib/styles.css';

import './style.css'

const TabWrapper = styled.div`
  position: relative;
`

const FlexWrapper = styled(Flex)`
  height: 400px;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 600px;
  }
`

const HerosTab = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const beforeChange = () => {

  }

  return (
    <TabWrapper className='tab--wrapper'>
        <Container>
          <FlexWrapper column justifyCenter alignCenter>
            <div className='carousel--wrapper'>
              <Carousel
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                customTransition="all .5s ease"
                beforeChange={nextSlide => beforeChange(nextSlide)}
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
    </TabWrapper>
  )
}

export default HerosTab;