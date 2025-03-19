import React, { useEffect, useState } from 'react';
import "../../css/Carousel.css";
import left from "../../assets/left.png"
import right from "../../assets/right.png";

import img1 from "../../assets/img_3.png"
import img2 from "../../assets/img_4.png"
import img3 from "../../assets/img_5.png"
import img4 from "../../assets/avon_1.jpeg"
import img5 from "../../assets/avon_2.png"

import img6 from "../../assets/dog_6.png";
import img7 from "../../assets/dog_8.png";
import img8 from "../../assets/dog_9.png";
import img9 from "../../assets/dog_10.png";



import img10 from "../../assets/fish_2.png";
import img11 from "../../assets/fish_4.png";

import img12 from "../../assets/want_1.png";
import img13 from "../../assets/want_2.jpg";

import img14 from "../../assets/shoes_1.png";
import img15 from "../../assets/shoes_2.jpg";



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
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveSlide('next');
    }, 1500);
    return () => clearInterval(intervalId);
  }, []);
  
  const getVisibleSlides = () => {
    const totalSlides = slides.length;
    const visibleSlides = [];
    const width = window.innerWidth;
    let visibleCount = width >= 768 ? 3 : 1; // 3 slides for desktop/tablet, 1 for mobile

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
    if (width < 768) return { transform: 'scale(1)' }; // Mobile: no scaling

    // Desktop/tablet: center image is larger
    const centerIndex = 1;
    const distance = Math.abs(centerIndex - index);
    const scale = distance === 0 ? 1.2 : 0.8;

    return {
      transform: `scale(${scale})`,
      opacity: 1 - (distance * 0.2),
      zIndex: 10 - distance,
    };
  };

  return (
    <div className="img-carousel-container">
      <div className="img-carousel-wrapper">
        <div className="img-carousel-track">
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
        ><img className='iconArrow' src={left} />
        </button>

        <button
          onClick={() => moveSlide('next')}
          className="navigation-button next-button"
        ><img className='iconArrow' src={right} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;