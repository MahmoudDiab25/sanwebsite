import React, { useState } from "react";
import style from "./style.module.scss";
import { SliderData } from "./sliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={style.slider}>
      <FaArrowAltCircleLeft className={style.leftArrow} onClick={prevSlide} />
      <FaArrowAltCircleRight className={style.rightArrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? style.slideActive : style.slide}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel image"
                className={style.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
