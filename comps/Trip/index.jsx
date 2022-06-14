import style from "./style.module.scss";
const Trip = ({ age, price, level, title, info, dates, img }) => {
  return (
    <div className={style.tripContainer}>
      <div className={style.tripHeader}>
        <img src="privet.jpg" alt="" className={style.mainPic} />
        <div className={style.tripBar}>
          <div className={style.age}>
            <span className={style.info}>{age}15</span>
            <span className={style.icon}>
              <img src="ages.png" alt="age" width="100%" height="100%" />
            </span>
            <span className={style.title}>جيل المشاركة</span>
          </div>
          <div className={style.level}>
            <span className={style.info}></span>
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
            <span className={style.info}></span>
            <span className={style.icon}>
              <img src="price.png" alt="age" width="100%" height="100%" />
            </span>
            <span className={style.title}>السعر للفرد</span>
          </div>
        </div>
      </div>
      <div className={style.tripBody}>
        <h3>{title}</h3>
        <p>{info}sdfsdf</p>
      </div>
      <div className={style.tripDateButton} id="dateButton">
        لتوريخ الرحل
      </div>
    </div>
  );
};

export default Trip;
