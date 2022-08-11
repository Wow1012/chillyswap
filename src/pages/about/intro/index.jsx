import styled from "styled-components/macro";
import Container from "../../../components/Container";
import Flex from "../../../components/Flex";
import FloatModel from "../../../components/FloatModel";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SectionWrapper = styled.div`
  padding-top: 30px;
  background: url("/images/about/home.png"),
    linear-gradient(
      180deg,
      #e1fbd7 0%,
      #62d5e6 0.01%,
      #e1fcd3 0.02%,
      #6adaea 100%
    );
  backdrop-filter: blur(4px);
  background-size: auto 90%, auto;
  background-repeat: no-repeat;
  background-position: bottom right;
  position: relative;
  overflow: hidden;
`;

const StyledContainer = styled(Container)`
  overflow: hidden;
`;

const PtoEarn = styled.div`
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 120px;
  padding-bottom: 350px;
`;

const Heading = styled.h2`
  font-family: BadaBoom;
  font-weight: 400;
  font-size: 52px;
  line-height: 65px;
  color: #fff;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 96px;
    line-height: 102px;
  }
`;

const SubHeading = styled(Heading)`
  font-size: 28px;
  line-height: 30px;

  @media (min-width: 768px) {
    font-size: 52px;
    line-height: 65px;
  }
`;

const Title = styled.div`
  margin-bottom: 12px;
`;

const Text = styled.span`
  padding: 0;
  margin: 0;
  font-family: GilroyLight;
  font-size: 17px;
  line-height: 22px;
  color: #fff;
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  width: 92%;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 18px;
    width: 52%;
  }
`;

const Item = styled.div`
  width: 119px;
  height: 46px;
  background-image: url("${(props) => (props.bgurl ? props.bgurl : "")}");
  background-size: contain;
  background-repeat: no-repeat;
`;

const Platform = styled.div`
  margin-top: 36px;
`;

const InnerWrapp = styled.div`
  position: relative;
`;


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

const IntroSection = () => {
  const container = useRef();
  const titleEl = useRef();
  const contentEl = useRef();
  let q = gsap.utils.selector(container);

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        titleEl.current,
        {
          opacity: 0,
          y: "+5px",
          scale: 0.8,
        },
        {
          opacity: 1,
          y: "0px",
          scale: 1,
          duration: 1,
        },
        1
      )
      .fromTo(
        contentEl.current,
        {
          opacity: 0,
          y: "+5px",
          scale: 0.8,
        },
        {
          opacity: 1,
          y: "0px",
          scale: 1,
          duration: 1,
        },
        1.5
      )
      .fromTo(
        q(".platform--item"),
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.5,
        },
        1.5
      );
  }, []);

  return (
    <SectionWrapper>
      <StyledContainer fullVertical>
        <InnerWrapp ref={container}>
          <PtoEarn>
            <Title ref={titleEl}>
              <Heading>PLAY TO EARN</Heading>
              <SubHeading>BUY-SELL-STACK-RENT</SubHeading>
            </Title>
            <Flex column ref={contentEl}>
              <Text>
                <PinIcon />
                Chili games (P2E) do what traditional video games don’t — reward
                players for their time and effort spent in the game.{" "}
              </Text>
              <Text underline>
                <PinIcon />
                Each Chili game offers a unique way for players to be rewarded
                for their in-game activity.{" "}
              </Text>
            </Flex>
            <Platform>
              <Flex gap="18px">
                <Item
                  bgurl="/images/platform/google.svg"
                  className="platform--item"
                ></Item>
                <Item
                  bgurl="/images/platform/apple.svg"
                  className="platform--item"
                ></Item>
                <Item
                  bgurl="/images/platform/pc.svg"
                  className="platform--item"
                ></Item>
              </Flex>
            </Platform>
          </PtoEarn>
          <FloatModel
            mposition={{
              width: "28px",
              height: "104px",
              top: "74%",
              left: "18%",
            }}
            position={{
              width: "42px",
              height: "154px",
              top: "55%",
              left: "60%",
            }}
            imgurl="/images/about/chilli.png"
          />
          <FloatModel
            mposition={{
              width: "270px",
              height: "208px",
              top: "74%",
              left: "77%",
            }}
            position={{
              width: "340px",
              height: "262px",
              top: "50%",
              left: "90%",
            }}
            imgurl="/images/about/man.png"
          />
        </InnerWrapp>
      </StyledContainer>
    </SectionWrapper>
  );
};

export default IntroSection;
