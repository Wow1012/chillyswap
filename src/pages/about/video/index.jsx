import { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import teaserVideo from '../../../assets/video/Chilliswap_Teaser.mp4'
import gsap from "gsap";

const SectionWrapper = styled.div`
	position: relative;
	z-index: 3;
`;

const Video = styled.video`
	position: relative;
	width: 100vw;
	height: auto;
	max-height: 100vh;
	object-fit: cover;
`

const MuteBtn = styled.div`
	position: absolute;
	z-index: 2;
	width: 25px;
	height: 22px;
	bottom: 30px;
	right: 30px;
	background-image: url(${props => props.muted ? '/images/about/unmute.png' : '/images/about/mute.svg'});
	background-size: contain;
	background-repeat: no-repeat;
	background-size: center;
	cursor: pointer;
	@media (min-width: 768px) {
		width: 36px;
		height: 30px;
		bottom: 100px;
		right: 100px;
	}
`


const BetStuff = styled.div`
  width: 100%;
	position: absolute;
  aspect-ratio: 10.8;
  top: 0;
  transform: translate(0, -42%);
	display: flex;
	img {
		width: 100%;
		height: 100%;
	}
`


const BetStuff2 = styled.div`
  width: 100%;
	position: absolute;
  aspect-ratio: 3.39;
  bottom: 0;
  transform: translate(0, 50%);
	display: flex;
	img {
		width: 100%;
		height: 100%;
	}
`


const SpiderWrapper = styled.div`
  position: absolute;
	top: 0;
  transform: translate(50px, 0);
`

const StyledSpider = styled.div`
  position: absolute;
  width: 20px;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }
	@media (min-width: 768px) {
		width: 70px;
	}
`

const Spider = () => {
  const el = useRef();
  const tl = gsap.timeline({repeat: -1});
  
  useEffect(() => {
    tl.to(el.current, {
      y: '100px',
      duration: 1
    })
    .to(el.current, {
      y: '-=30px',
      duration: 0.5
    })
    .to(el.current, {
      y: '+=60px',
      duration: 1.2
    })
    .to(el.current, {
      y: '0px',
      duration: 5
    })
  }, [])


  return (
    <SpiderWrapper>
      <StyledSpider ref={el}>
        <img src='/images/about/spider.svg' />
      </StyledSpider>
    </SpiderWrapper>
  )
}


const VideoSection = () => {
	const el = useRef();
	const videoRef = useRef();
	const [appeared, appear] = useState(false);
	const [muted, mute] = useState(true);

	const handleMute = () => {
		mute(!muted)
	}

	function handleScroll() {
		const {top} = el.current.getBoundingClientRect();
    const { innerWidth: width, innerHeight: height } = window;

		if (top * 2 < height) {
			appear(true);
    }
    else {
			appear(false);
		}
	}

	useEffect(() => {
		if  (!appeared) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	}, [appeared])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, [])

  return (
    <SectionWrapper ref={el}>
      <Video ref={videoRef} loop muted={muted}>
        <source src={teaserVideo} type="video/mp4" />
      </Video>
			<MuteBtn onClick={() => handleMute()} muted={muted}>
			</MuteBtn>
      <BetStuff>
				<img src='/images/about/branch.png' />
			</BetStuff>
			<BetStuff2>
				<img src='/images/about/deco.png' />
			</BetStuff2>
			<Spider />
    </SectionWrapper>
  );
};

export default VideoSection;