"use client";

import Container from "@/components/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import seller1 from "../../../public/popular_seller/1.png";
import seller2 from "../../../public/popular_seller/2.png";
import seller3 from "../../../public/popular_seller/3.png";
import seller4 from "../../../public/popular_seller/4.png";
import seller5 from "../../../public/popular_seller/5.png";
import seller6 from "../../../public/popular_seller/6.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const PopularSeller = () => {
  return (
    <section>
      <Container>
        <h3 className="h3 text-green-900 mb-3">Popular Seller</h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* TODO: need to implement  react parallax tooltip for 3D on hover */}
            {/* TODO: this div will be on popular seller card component with dynamic loaded */}
            <div className="border border-green-500 flex items-center justify-center h-[300px]">
              <Image src={seller1} alt="popular seller" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-green-500 flex items-center justify-center   h-[300px]">
              <Image src={seller2} alt="popular seller" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-green-500 flex items-center justify-center  h-[300px] ">
              <Image src={seller3} alt="popular seller" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-green-500 flex items-center justify-center h-[300px] ">
              <Image src={seller4} alt="popular seller" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-green-500 flex items-center justify-center h-[300px] ">
              <Image src={seller5} alt="popular seller" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-green-500 flex items-center justify-center  h-[300px]">
              <Image src={seller6} alt="popular seller" />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  );
};

export default PopularSeller;
