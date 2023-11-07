// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Scrollbar, } from 'swiper/modules';
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
                <h1 className="text-center font-extrabold text-5xl">Subjects</h1>
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
                        modifier: 3.5,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <img
                            style={{ width: "100%" }}
                            className=""
                            src="https://collegerealitycheck.com/wp-content/uploads/physics-major-1988419205-1024x768.jpg"
                            alt="First slide"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            style={{ width: "100%" }}
                            className=""
                            src="https://img.freepik.com/premium-photo/investigations-defunct-chemistry-facility-laboratory-chemistry-instruction_410516-4221.jpg"
                            alt="First slide"
                        />
                    </SwiperSlide>





                    <SwiperSlide>
                        <img
                            style={{ width: "100%" }}
                            className=""
                            src="https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/033e9988-2ac8-4cb9-8b9f-5bf05fb22dcb/gff.jpg"
                            alt="First slide"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            style={{ width: "100%" }}
                            className=""
                            src="https://collegerealitycheck.com/wp-content/uploads/physics-major-1988419205-1024x768.jpg"
                            alt="First slide"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            style={{ width: "100%" }}
                            className=""
                            src="https://images.squarespace-cdn.com/content/v1/5fce63270356d927d7eecdbd/033e9988-2ac8-4cb9-8b9f-5bf05fb22dcb/gff.jpg"
                            alt="First slide"
                        />
                    </SwiperSlide>



                </Swiper>
            </div>
        </div>
    );
};

export default Gallary;



