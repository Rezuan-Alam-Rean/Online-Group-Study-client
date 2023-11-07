// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Scrollbar,  } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Gallary = () => {
  return (
    <div className="overflow-x-hidden">
      <div
      className="space-y-10 mb-10 p-10 "
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <h1 className="text-center font-extrabold text-5xl">Notes</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={50}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            className=""
            src="https://img.freepik.com/free-photo/kids-playing-outside-with-cart_23-2147782169.jpg?w=996&t=st=1684357133~exp=1684357733~hmac=0bc3843f9951b9a130de8952b4afebd46ce0139f13950ff23f30429ade4af9f9"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            className=""
            src="https://img.freepik.com/free-photo/full-shot-smiley-girl-with-tricycle_23-2149363914.jpg?w=996&t=st=1684357632~exp=1684358232~hmac=cf44894d4be5d4a954b75289d23aa86b8fb9a50270d02552011249655bbd5513"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            className=""
            src="https://img.freepik.com/free-photo/kid-playing-with-toy-train_23-2148131041.jpg?w=996&t=st=1684358004~exp=1684358604~hmac=f68f1f0ea35a601b5dfc592fde34fed860a06b70f67aadc36021f9f920e89d2c"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            className=""
            src="https://img.freepik.com/premium-photo/miniature-people-railway-staff-are-working-railway_28710-1068.jpg?w=996"
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "100%" }}
            className=""
            src="https://img.freepik.com/free-photo/closeup-shot-small-toy-car-wooden-train-track_181624-32510.jpg?w=996&t=st=1684357940~exp=1684358540~hmac=5e05545cdff9fea79d1db583c30ce64cadb75afb4c5b6525553fed80fea63c80"
            alt="First slide"
          />
        </SwiperSlide>
       


      </Swiper>
    </div>
    </div>
  );
};

export default Gallary;
