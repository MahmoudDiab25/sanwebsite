import ImageSlider from "../../comps/ImageSilder";
import Trip from "../../comps/Trip";
import style from "./style.module.scss";
import useFirestore from "../../hooks/useFirestore";
import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export default function Home() {
  const [_isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);

  const { docs } = useFirestore("trips");
  const trips = docs;

  const [northenTrips, setNorthenTrips] = useState([]);
  const [southernTrips, setSouthernTrips] = useState([]);

  useEffect(() => {
    trips.map((trip) => {
      if (trip.location === "north") {
        setNorthenTrips((northenTrips) => [...northenTrips, trip]);
      }
      if (trip.location === "south") {
        setSouthernTrips((southernTrips) => [...southernTrips, trip]);
      }
    });
  }, [trips]);

  return (
    <div className={style.homeContainer}>
      <div className={style.opening} id="Opening">
        <img
          hidden={_isMobile}
          src="openPiture.JPG"
          alt=""
          className={style.photo1}
        />
        <img
          hidden={_isMobile}
          src="tree.png"
          alt=""
          className={style.photo2}
        />
        <img
          hidden={!_isMobile}
          src="tree-mobile.svg"
          alt=""
          className={style.photo2}
        />

        <div className={style.openingText}>
          <img hidden={!_isMobile} src="/LOGO.svg" alt="" />
          <div>
            <h2 id="Title">رفيق طريق</h2>
            <p>
              عالمنا مليء بالتجارب الرائعة، بلحظات سحرية، بمناظر طبيعية مجنونة،
              بصور غير عادية ومشاعر سامية تحفر في أعماق الروح.
            </p>
            <p>
              لقد أنعم الله علينا في أرضنا الجميلة بمجموعة من المواقع الجغرافية
              (جدران/كهوف/وديان أخدودية/شلالات...) التي تمكننا من ممارسة رياضة
              تسلق الجدران ونزولها بواسطة الحبال، وهي رياضة تناسب الجميع،
              المبتدئين وذوي الخبرة، الصغار والكبار.
            </p>
            <p>
              ندعوك لاختيار المسار الذي يثير اهتمامك وحماسك وأن ترافقنا لتجربة
              لا تُنسى.
            </p>
          </div>
        </div>
      </div>
      <div className={style.Info}>
        <h2>
          <b>يمكنك السفر معنا بإحدى الطريقتين: </b>
        </h2>
        <h2>
          <b>رحلة خاصة أو رحلة منظمة</b>
        </h2>
        <p>
          <b>رحلة خاصة:</b> رحلة تختار فيها طريقك المفضل (جميع المسارات متاحة
          لك) ، وتكوين المجموعة وتاريخ الرحلة والخروج مع مرشدين فقط من أجلك.
          رحلة خاصة تماما! للحصول على عرض أسعار لرحلة خاصة ، يرجى الاتصال بنا أو
          ارسال رسالة على الواتساب.
        </p>
        <p>
          <b>رحلة منظمة:</b> رحلة نحدد فيها مواعيد الرحلة مقدمًا وأنت مدعو
          للتسجيل فيها والانضمام إلى المسافرين الآخرين الذين يسجلون في ذلك
          التاريخ. يتم تحديد تكلفة الرحلة مسبقًا ويتم تسجيلها في كل صفحة. يتم
          التسجيل لرحلة منظمة عن طريق ارسال رسالة على الواتساب او بالاتصال بنا
          هاتفيا. من أجل راحتك - ستجد في الصفحة التالية جميع مواعيد الرحلات
          المخطط لها للفترة القادمة مرتبة ترتيبًا زمنيًا.
        </p>
        <p>
          <b>من المهم التأكيد على أن:</b> الرياضة ليست معقدة ولا تتطلب أي خبرة
          سابقة. في بداية كل رحلة ، نقوم بشرح وارشاد شامل ونعرض خطوة بخطوة كل ما
          تحتاج إلى معرفته. أثناء العمل، سيتم توصيل كل مشارك بحبلين. حبل ركوب
          تحت سيطرتك وحبل أمان بين يدي مرشد محترف سيراقبك من الأعلى.
        </p>
        <p>
          <b>السلامة:</b> نحن نركز بشكل كبير على السلامة ومستوى المعدات (الذي
          يلبي المعايير الأوروبية والأمريكية) ونعتقد أن ما يصنع التجربة التي لا
          تنسى في نهاية المطاف هم مرشدونا ومدربونا المحترفين وذوي الخبرة وقدرتهم
          على خلق تجربة ممتعة، جو آمن وصبور لكل مشارك - معنا تجربة نجاحك ورضاك
          هو الشيء الرئيسي.
        </p>
      </div>
      <div className={style.gallery} id="Gallery">
        <ImageSlider />
      </div>
      <div className={style.trips} id="Trips">
        <h1>للتسجيل للرحلات</h1>
        <h3>رحلات في الشمال</h3>
        <div className={style.tripsNorth}>
          {northenTrips.map((trip) => (
            <Trip
              title={trip.tripName}
              level={trip.difficultyLevelText}
              age={trip.age}
              price={trip.price}
              info={trip.descriptionId}
              img={trip.img}
              tripDate={trip.tripDate}
            />
          ))}
        </div>
        <h3>رحلات في الجنوب</h3>
        <div className={style.tripsSouth}>
          {southernTrips.map((trip) => (
            <Trip
              title={trip.tripName}
              level={trip.difficultyLevelText}
              age={trip.age}
              price={trip.price}
              info={trip.descriptionId}
              img={trip.img}
              tripDate={trip.tripDate}
            />
          ))}
        </div>
      </div>
      <div className={style.QandA} id="QandA">
        <h1>أسئلة وأجوبة</h1>
        <div>
          <h4>هل هذا النوع من الرحلات آمن؟</h4>
          <p>
            ممارسة رياضات الإكستريم تحمل في طياتها قدر معين من المخاطرة (مواجهة
            الخطر تجعل من المغامرة شيقة) ولكي نجعل من رياضة النزول فالحبال
            مغامرة آمنة وشيقة فإننا نعمل بمعايير عالية الجودة والمقاييس بكل
            المستويات. سواءا من ناحية معدات السلامة وسواءا من ناحية المهنية
            وطاقم الارشاد.واجبنا التكفل بكل ما يتعلق بتفاصيل الرحلة منذ لقاء
            طاقم الارشاد وحتى انتهاء الرحلة وعودتكم سالمين الى بيوتكم.
          </p>
        </div>
        <div>
          <h4>منذ أي جيل تسمح المشاركة؟</h4>
          <p>
            تتفرع الاجابة على هذا السؤال، من الناحية القانونية يحق لكل شخص
            المشاركة بكل الأعمار، ولكن، هنالك تفاوت بدرجة صعوبة الرحلات؛ فبعضها
            ملائمة للاطفال وبعضها تتطلب قدرة جسدية اكبر من تلك التي يمتلكها
            الاطفال.
          </p>
        </div>
        <div>
          <h4>
            قمت بالتسجيل والدفع، وتم إلغاء الرحلة بسبب: الحالة الجوية/وباء
            الكورونا، ماذا افعل؟
          </h4>
          <p>
            بحالة إلغاء رحلة لأسباب تتعلق بالحالة الجوية/وباء الكورونا، يتم
            إرجاع المبلغ بشكل كامل أو بالامكان تعيين تاريخ جديد للرحلة.
          </p>
        </div>
        <div>
          <h4>أي رحلة هي الأنسب لي؟</h4>
          <p>
            يوجد في صفحتنا عدد من الرحلات المنظمة والخاصة، يمكنكم قراءة تفاصيل
            كل رحلة ومعاينتها عن كثب واختيار الانسب لكم، في حالة كان لديكم
            استفسارات اخرى يمكنكم التواصل معنا وبامكاننا اختيار الرحلة الانسب
            لكم وفقا للمعطيات.
          </p>
        </div>
      </div>
    </div>
  );
}
