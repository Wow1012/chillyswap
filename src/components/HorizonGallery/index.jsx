import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "../Button";
import styled from "styled-components/macro";
import "./style.css"

gsap.registerPlugin(ScrollTrigger);

const BuyButton = styled(Button)`
  padding: 2px 24px; 
  font-size: 20px;

  @media (min-width: 768px) {
    padding: 6px 32px;
    font-size: 28px;
  }
`


const HorizonGallery = (e) => {
    const cardsContainer = useRef();
    const InfosContainer = useRef();
    let q = gsap.utils.selector(cardsContainer);
    let qInfo = gsap.utils.selector(InfosContainer);

    const swapCards = (e) => {
        let direction;
        if (e.target.classList.contains("next--card")) {
            direction = "right";
        } 
        else if (e.target.classList.contains("previous--card")) {
            direction = "left";
        } else {
            return;
        }
        const currentCardEl = q(".current--card");
        const previousCardEl = q(".previous--card");
        const nextCardEl = q(".next--card");

        changeInfo(direction)
        swapCardsClass();

        function swapCardsClass() {
            currentCardEl[0].classList.remove("current--card");
            previousCardEl[0].classList.remove("previous--card");
            nextCardEl[0].classList.remove("next--card");
    
            currentCardEl[0].style.zIndex = "50";
    
            if (direction === "right") {
                previousCardEl[0].style.zIndex = "20";
                nextCardEl[0].style.zIndex = "30";
    
                currentCardEl[0].classList.add("previous--card");
                previousCardEl[0].classList.add("next--card");
                nextCardEl[0].classList.add("current--card");
    
            } else if (direction === "left") {
                previousCardEl[0].style.zIndex = "30";
                nextCardEl[0].style.zIndex = "20";
    
                currentCardEl[0].classList.add("next--card");
                previousCardEl[0].classList.add("current--card");
                nextCardEl[0].classList.add("previous--card");
    
            }
        }
    }

    
    function changeInfo(direction) {
      let currentInfoEl = qInfo(".current--info");
      let previousInfoEl = qInfo(".previous--info");
      let nextInfoEl = qInfo(".next--info");

      gsap.timeline()
        .to(
        (gsap.utils.selector(currentInfoEl))(".text"),
        {
          duration: 0.4,
          stagger: 0.1,
          opacity: 0,
        },
        "-="
      )
        .call(() => {
        swapInfosClass(direction);
      })
        .fromTo(
        direction == "right"
        ? (gsap.utils.selector(nextInfoEl))(".text")
        : (gsap.utils.selector(previousInfoEl))(".text"),
        {
          opacity: 0,
          translateY: "40px",
        },
        {
          duration: 0.4,
          stagger: 0.1,
          translateY: "0px",
          opacity: 1,
        }
      )


      function swapInfosClass() {
        currentInfoEl[0].classList.remove("current--info");
        previousInfoEl[0].classList.remove("previous--info");
        nextInfoEl[0].classList.remove("next--info");

        if (direction === "right") {
          currentInfoEl[0].classList.add("previous--info");
          nextInfoEl[0].classList.add("current--info");
          previousInfoEl[0].classList.add("next--info");
        } else if (direction === "left") {
          currentInfoEl[0].classList.add("next--info");
          nextInfoEl[0].classList.add("previous--info");
          previousInfoEl[0].classList.add("current--info");
        }
      }
    }


  return (
    <div className="gallery__wrapper">
        <div className="gallery__header">
          <h2>Games</h2>
        </div>
        <div className="cardList">
          <div className="cards__wrapper" ref={cardsContainer}>
            <div className="card current--card" onClick={e => swapCards(e)}>
              <div className="card__image">
                <img src="/images/about/games/1.jpg" alt="" />
              </div>
            </div>

            <div className="card next--card" onClick={e => swapCards(e)}>
              <div className="card__image">
                <img src="/images/about/games/2.jpg" alt="" />
              </div>
            </div>

            <div className="card previous--card" onClick={e => swapCards(e)}>
              <div className="card__image">
                <img src="/images/about/games/3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="infoList">
          <div className="info__wrapper" ref={InfosContainer}>
            <div className="info current--info">
              <h1 className="text name">SUBWAY RUNNER</h1>
              <p className="text description">Collect Chillis while you</p>
              <p className="text description">dodge trains!</p>
            </div>

            <div className="info next--info">
              <h1 className="text name">Machu Pichu</h1>
              <p className="text description">Adventure is never far away</p>
            </div>

            <div className="info previous--info">
              <h1 className="text name">Chamonix</h1>
              <p className="text description">Let your dreams come true</p>
            </div>
          </div>
        </div>

        <div className="gallery__footer">
          <div className="button__wrapper">
            <BuyButton>PLAY NOW</BuyButton>
          </div>
        </div>
    </div>
  );
};

export default HorizonGallery;
