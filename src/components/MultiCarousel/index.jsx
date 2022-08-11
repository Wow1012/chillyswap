import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './style.css';

const MultiCarousel = ({interval, length}) => {
    const container = useRef();
    const itemContainer = useRef();
    const dotContainer = useRef();
    const [currentId, setCurrentId] = useState(0);
    const [firstCall, setFirstCall] = useState(false);

    const currentIdRef = useRef()

    currentIdRef.current = currentId

    let qItem = gsap.utils.selector(itemContainer);
    let qDot = gsap.utils.selector(dotContainer);

    const handleMoveSlide = (e) => {
        let selectedId = parseInt(e.target.getAttribute("item-id"));
        updateSlide(selectedId);

        // items.forEach((item, index) => {
        //     item.classList.remove('prev--item');
        //     item.classList.remove('current--item');

        //     if (index == prevId) {
        //         item.classList.add('prev--item')
        //     }
        //     else if (index == selectedId) {
        //         item.classList.add('current--item')
        //     }
        // })
    }

    // console.log("current", currentId)

    const autoSlide = () => {
        // updateSlide(currentId);
        console.log(currentIdRef.current)
        setCurrentId(prev => (prev + 1));

        // setTimeout(autoSlide, 1000);
    }

    
    useEffect(() => {
        // autoSlide();
        setInterval(autoSlide, 1000);
    }, [])

    const updateSlide = (selectedId) => {
        let items = qItem(".item");
        let dots = qDot(".dot");

        // console.log(qItem(".current--item"))

        gsap.timeline()
        .to(qItem(".current--item"), {
            // opacity: 0,
            duration: 0.4
        })
        .to(qItem(".prev--item"), {
            // opacity: 0,
            duration: 0.4
        }, 0)

        let length = items.length;
        let prevId = selectedId - 1;

        if (selectedId == 0) {
            prevId += length;
        }

        for (let i = 0; i < length; i += 1) {
            items[i].classList.remove('prev--item');            
            items[i].classList.remove('current--item');
            
            // dots[i].classList.remove('prev--dot');            
            dots[i].classList.remove('current--dot');

            if (i == prevId) {
                items[i].classList.add('prev--item')
                // dots[i].classList.add('prev--dot')
            } else if (i == selectedId) {
                items[i].classList.add('current--item')
                dots[i].classList.add('current--dot')
            }
        }
    }


    return (
        <div className="carousel__container" ref={container}>
            <div className='items__container' ref={itemContainer}>
                <div className="item prev--item">
                    item 1
                </div>
                <div className="item current--item">
                    item 2
                </div>
                <div className="item">
                    item 3
                </div>
                <div className="item">
                    item 4
                </div>
                <div className="item">
                    item 5
                </div>
            </div>
            <div className='dots__container' ref={dotContainer}>
                <span className='dot prev--dot' item-id={0} onClick={
                    (e) => handleMoveSlide(e)}
                ></span>
                <span className='dot current--dot' item-id={1} onClick={
                    (e) => handleMoveSlide(e)}
                ></span>
                <span className='dot' item-id={2} onClick={
                    (e) => handleMoveSlide(e)}
                ></span>
                <span className='dot' item-id={3} onClick={
                    (e) => handleMoveSlide(e)}
                ></span>
                <span className='dot' item-id={4} onClick={
                    (e) => handleMoveSlide(e)}
                ></span>
            </div>
        </div>
    )
}

export default MultiCarousel;