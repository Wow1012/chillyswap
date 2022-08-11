import styled from 'styled-components/macro'
import Flex from '../../../../components/Flex'
import { useRef } from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'

const SectionWrapper = styled.div`
    position: relative;
    padding-top: 100px;
`

const InnerWrapper = styled.div`
    padding: 10px;
    padding-top: 80px;

    @media (min-width: 768px) {
        padding: 150px 10px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {

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
    font-size: 49px;
    line-height: 54px;
  }

  @media (min-width: 1024px) {
    font-size: 69px;
    line-height: 72px;
  }

  @media (min-width: 1440px) {
    font-size: 76px;
    line-height: 84px;
  }
`

const InnerPadding = styled.div`
    padding: 0 20px;

    @media (min-width: 768px) {
        padding-left: calc((100vw - 1224px) / 2);
    }
`

const Title = styled.div`
  margin-bottom: 18px;
  @media (min-width: 768px) {
    margin-bottom: 5px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 12px;
  }
`

const Content = styled.div`
    @media (min-width: 768px) {
        padding-right: 20%;    
    }
`

const Text = styled.span`
  padding: 0;
  margin: 0;
  font-family: GilroyLight;
  font-size: 20px;
  line-height: 25px;
  color: #FFF;
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
    line-height: 25px;    
    margin-bottom: 10px;
  } 

  @media (min-width: 1440px) {
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 28px;
  } 
`

const SubText = styled(Text)`
    font-size: 16px;
    line-height: 19px;

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 22px;
    }

    @media (min-width: 1440px) {
        font-size: 20px;
        line-height: 24px;
    }
`

const ChartWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-top: 80px;
    
    display: flex;
    justify-content: flex-end;
`

const PieChart = styled.div`
    width: 80%;

    img {
        width: 100%;
    }
`


const StyledPinIcon = styled.span`
  min-height: 32px;
  font-size: 16px;
  padding-right: 10px;
  display: flex;
  align-items: center;
`;

const PinIcon = () => {
  return (
    <StyledPinIcon>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"></path>
      </svg>
    </StyledPinIcon>
  );
};


const PartDesc = styled.div`
   position: absolute;
   width: 80px;
   top: ${props => props.mtop ? props.mtop : "0"};
   left: ${props => props.mleft ? props.mleft : "0"};
   cursor: pointer;

   span {
    color: #FFF;
    font-family: 'GilroyLight';
    font-size: 14px;
    line-height: 15px;
   }

   @media (min-width: 1024px) {
    top: ${props => props.top ? props.top : "0"};
    left: ${props => props.left ? props.left : "0"};
    width: auto;

    span {
        font-size: 18px;
        line-height: 20px;
    }
   }
`

const Cloud = styled.div`
    position: absolute;
    img {
        width: 100%;
    }
`

const Cloud1 = styled(Cloud)`
    top: 4%;
    left: 0;
    width: 60%;

    @media (min-width: 768px) {
        width: 30%;
    }
`

const Cloud2 = styled(Cloud)`
    bottom: -1%;
    width: 100%;
    right: 0;
    left: 0;

    @media (min-width: 768px) {
        width: 100%;
        bottom: 6%;
    }

    @media (min-width: 1024px) {
        bottom: 2%;
    }
`

const Tokenomics = () => {
   const container = useRef();
   let q = gsap.utils.selector(container); 

   useEffect(() => {
    function mouseOver(item) {
        let span = (gsap.utils.selector(item))("span");
        gsap.to(span, {
            scale: 1.1,
            color: '#9363e1',
        })
    }

    function mouseLeave(item) {
        let span = (gsap.utils.selector(item))("span");
        gsap.to(span, {
            scale: 1,
            color: '#FFF',
        })
    }
    q('.part--desc').forEach((item, index) => {
        item.addEventListener('mouseover', () => mouseOver(item))

        item.addEventListener('mouseleave', () => mouseLeave(item))
    })

    return q('.part--desc').forEach((item, index) => {
        item.removeEventListener('mouseover', () => mouseOver(item))

        item.removeEventListener('mouseleave', () => mouseLeave(item))
    })
   }, [])

    return (
        <SectionWrapper>
                <InnerWrapper ref={container}>
                    <Flex column justifyCenter>
                        <InnerPadding>
                            <Title>
                                <Heading>
                                    TOKENOMICS
                                </Heading>
                            </Title>
                            <Content>
                                <Text>
                                    <PinIcon />
                                    This is the project's predominant currency, which had a total supply of 1 quadrillion tokens when it was launched.
                                </Text>
                                <SubText>
                                    <PinIcon />
                                    The Native token - CHILI is the reward acting as a multipurpose utility token used in the chili ecosystem.
                                </SubText>
                                <SubText>
                                    <PinIcon />
                                    Chili gives you the option of creating your customized Avatar, which is a non-fungible token (NFT)
                                </SubText>
                            </Content>
                        </InnerPadding>
                    </Flex>
                    <Flex>
                        <ChartWrapper>
                            <PieChart>
                                <img src='/images/about/roadmap/pie-chart.png' />
                            </PieChart>
                            <PartDesc className='part--desc' top='1%' left='-9%' mtop='-6%' mleft='0%'>
                                <Flex column alignEnd>
                                    <span>18%</span>
                                    <span style={{textAlign: 'right'}}>Research &#38; Development</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc className='part--desc' top='15%' left='-6%' mtop='9%' mleft='-6%'>
                                <Flex column alignEnd>
                                    <span>10%</span>
                                    <span style={{textAlign: 'right'}}>Team &#38; Advisors</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc className='part--desc' top='30%' left='12%' mtop='27%' mleft='0%'>
                                <Flex column alignEnd>
                                    <span>20%</span>
                                    <span>Treasury</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc className='part--desc' top='41%' left='30%' mtop='40%' mleft='19%'>
                                <Flex column alignEnd>
                                    <span>2.5%</span>
                                    <span>Airdrops</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc className='part--desc' top='20%' left='66%' mtop='17%' mleft='65%'>
                                <Flex column>
                                    <span>30%</span>
                                    <span>Farming&nbsp;/&nbsp;Staking</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc className='part--desc' top='10%' left='68%' mtop='9%' mleft='69%'>
                                <Flex column>
                                    <span>2.5%</span>
                                    <span>Bounties</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc className='part--desc' top='4%' left='55%' mtop='1%' mleft='53%'>
                                <Flex column>
                                    <span>15%</span>
                                    <span>Private&nbsp;Rounds</span>
                                </Flex>
                            </PartDesc>
                            <PartDesc className='part--desc' top='-2%' left='54%' mtop='-7%' mleft='50%'>
                                <Flex column>
                                    <span>2%</span>
                                    <span>Public&nbsp;&#123;Lunchpads&#125;</span>
                                </Flex>
                            </PartDesc>
                        </ChartWrapper>
                    </Flex>
                </InnerWrapper>
            <Cloud1>
                <img src='/images/about/roadmap/clouds/1.png' />
            </Cloud1>
            <Cloud2>
                <img src='/images/about/roadmap/clouds/2.png' />
            </Cloud2>
        </SectionWrapper>
    )
}

export default Tokenomics;