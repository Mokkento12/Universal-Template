import React, { useState } from "react";

import "./Slider.css";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "First Slide",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=1651&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Second Slide",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542370285-b8eb8317691c?q=80&w=1652&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Third Slide",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevios = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <button onClick={goToPrevios} className="slider-button">
        ←
      </button>
      <div className="slide">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].caption}
        />
      </div>
      <button onClick={goToNext} className="slider-button">
        →
      </button>
    </div>
  );
};

export default Slider;
