import React, { useState } from "react";
import style from "./style.module.scss";
import useFireStorage from "../../hooks/useFireStorage";
import ReactModal from "react-modal";

const Trip = ({
  age,
  price,
  level,
  title,
  description,
  info,
  dates,
  img,
  location,
  isMobile,
}) => {
  const imgUrl = useFireStorage(img);

  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={style.tripContainer}>
      <div className={style.tripHeader}>
        <div
          className={style.mainPic}
          style={{
            background: `url(${imgUrl})`,
          }}
        ></div>

        <div className={style.tripBar}>
          <div className={style.age}>
            <span className={style.info}>+{age}</span>
            <span className={style.icon}>
              <img src="ages.png" alt="age" width="100%" height="100%" />
            </span>
            <span className={style.title}>جيل المشاركة</span>
          </div>
          <div className={style.level}>
            <span className={style.info}>{level}</span>
            <span className={style.icon}>
              <img
                src="difficultyLevel.png"
                alt="age"
                width="100%"
                height="100%"
              />
            </span>
            <span className={style.title}>درجة الصعوبة</span>
          </div>
          <div className={style.price}>
            <span className={style.info}>{price}</span>
            <span className={style.icon}>
              <img src="price.png" alt="age" width="100%" height="100%" />
            </span>
            <span className={style.title}>السعر للفرد</span>
          </div>
        </div>
      </div>
      <div className={style.tripBody}>
        <h3>{title}</h3>
        <p>{description.desc1}</p>
      </div>
      <div className={style.tripDateButton} id="dateButton" onClick={openModal}>
        لتواريخ الرحلات
      </div>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick
        riaHideApp={false}
        style={{
          content: {
            inset: isMobile ? "100px 10px 100px 35px" : "70px 400px 50px 0px",
            width: isMobile ? "90vw" : "45vw",
            borderRadius: "15px",
            padding: "unset",
            display: "flex",
            top: isMobile ? "60px" : "100px",
            flexDirection: "column",
          },
        }}
      >
        <div
          className={style.bgImage}
          style={{
            background: isMobile ? `url(${imgUrl}),#ffffffbf` : "#DFE9ED",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <button className={style.close} onClick={closeModal}>
          &times;
        </button>
        <div className={style.popupConttainer}>
          <img src="/LOGO.svg" alt="" width="100" className={style.logo} />
          <div className={style.header}>
            <h5>{title}</h5>
            <div className={style.locationContainer}>
              <p>{info}</p>
              <a href="">
                <img src="/waze.svg" alt="waze" width="30px" height="30px" />
              </a>
              <a href="">
                <img
                  src="/googleMap.svg"
                  alt="googleMap"
                  width="30px"
                  height="30px"
                />
              </a>
            </div>
          </div>
          <div className={style.description}>
            <p>
              <div />
              {description.desc1}
            </p>
            <p>
              <div />
              {description.desc2}
            </p>
          </div>
          <div className={style.calenderContainer}>
            {!isMobile && <h6>تواريخ المتاحة للرحلة </h6>}
          </div>
          {!isMobile && (
            <div style={{ alignSelf: "end", borderRadius: "15px" }}>
              <img
                src={imgUrl}
                alt="image"
                width="200"
                style={{ borderRadius: "15px" }}
              />
            </div>
          )}
          <div className={style.buttomContainer}>Buttom</div>
        </div>
      </ReactModal>
    </div>
  );
};

export default Trip;
