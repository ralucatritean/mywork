import React, { useEffect, useState } from 'react';
import "../../css/Carousel.css";
import left from "../../assets/left.png"
import right from "../../assets/right.png";

import img1 from "../../assets/dog_1.png";
import img2 from "../../assets/fish_1.png";
import img3 from "../../assets/dog_2.png";
import img4 from "../../assets/want_1.png";
import img5 from "../../assets/dog_3.png";
import img6 from "../../assets/want_2.jpg";
import img7 from "../../assets/shoes_1.png";
import img8 from "../../assets/dog_4.png";
import img9 from "../../assets/shoes_2.jpg";
import img10 from "../../assets/dog_5.png";
import img11 from "../../assets/fish_2.png";
import img12 from "../../assets/dog_6.png";
import img13 from "../../assets/dog_7.png";
import img14 from "../../assets/fish_3.png";
import img15 from "../../assets/dog_8.png";
import img16 from "../../assets/fish_4.png";
import img17 from "../../assets/dog_9.png";
import img18 from "../../assets/fish_5.png";
import img19 from "../../assets/dog_10.png";
import img20 from "../../assets/fish_6.png";
import img21 from "../../assets/fish_7.png";

interface Slide {
  id: number;
  image: any; // sau StaticImageData dacă folosești Next.js
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides] = useState<Slide[]>([
    { id: 1, image: img1 },  // Folosește imaginea importată, nu calea
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
    { id: 9, image: img9 },
    { id: 10, image: img10 },
    { id: 11, image: img11 },
    { id: 12, image: img12 },
    { id: 13, image: img13 },
    { id: 14, image: img14 },
    { id: 15, image: img15 },
    { id: 16, image: img16 },
    { id: 17, image: img17 },
    { id: 18, image: img18 },
    { id: 19, image: img19 },
    { id: 20, image: img20 },
    { id: 21, image: img21 },
  ]);

  useEffect(() => {
    // Set up an interval to move to the next slide every 2 seconds
    const intervalId = setInterval(() => {
      moveSlide('next');
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  
  const getVisibleSlides = () => {
    const totalSlides = slides.length;
    const visibleSlides = [];

    const width = window.innerWidth;
    let visibleCount = 1; // default pentru mobile

    if (width >= 1024) {
      visibleCount = 5;
    } else if (width >= 768) {
      visibleCount = 3;
    } else if (width >= 640) {
      visibleCount = 2;
    }

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % totalSlides;
      visibleSlides.push(slides[index]);
    }

    return visibleSlides;
  };
  const moveSlide = (direction: 'next' | 'prev') => {
    setCurrentIndex(prevIndex => {
      if (direction === 'next') {
        return (prevIndex + 1) % slides.length;
      } else {
        return prevIndex === 0 ? slides.length - 1 : prevIndex - 1;
      }
    });
  };

  const getSlideStyle = (index: number) => {
    const width = window.innerWidth;
    let visibleCount = 1; // default pentru mobile
    let centerIndex = 0;  // default pentru mobile

    if (width >= 1024) {
      visibleCount = 5;
      centerIndex = 2;
    } else if (width >= 768) {
      visibleCount = 3;
      centerIndex = 1;
    } else if (width >= 640) {
      visibleCount = 2;
      centerIndex = 1;
    }

    const distance = Math.abs(centerIndex - index);

    let scale = 1;
    if (distance === 2) scale = 0.5;
    else if (distance === 1) scale = 0.7;
    else if (distance === 0) scale = 1;

    // Pentru vizualizări cu mai puține elemente, ajustăm scala
    if (visibleCount < 5) {
      scale = distance === 0 ? 1 : 0.7;
    }
    if (visibleCount === 1) {
      scale = 1; // Pentru mobile, toate imaginile la aceeași dimensiune
    }

    return {
      transform: `scale(${scale})`,
      opacity: 1 - (distance * 0.15),
      zIndex: 10 - distance,
    };
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {getVisibleSlides().map((slide, index) => (
            <div
              key={`${slide.id}-${currentIndex}-${index}`}
              className="slide-wrapper"
            >
              <div
                className="slide"
                style={getSlideStyle(index)}
              >
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="slide-image"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => moveSlide('prev')}
          className="navigation-button prev-button"
        ><img className='iconImage' src={left} />
        </button>

        <button
          onClick={() => moveSlide('next')}
          className="navigation-button next-button"
        ><img className='iconImage' src={right} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;