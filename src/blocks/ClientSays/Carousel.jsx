"use client"
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Carousel.css'

import { Pagination, Navigation } from 'swiper/modules';
import CarouselCard from './CarouselCard';

const Carousel = () => {

  const [carousel, setCarousel] = useState([])

  useEffect( () => {
    fetch(`Carousel.json`)
    .then(res => res.json())
    .then(data=>setCarousel(data))
  }, [])

// console.log(carousel)
  return (
    <>
      <Swiper
        // sslidesPerView={1}
        // spaceBetween={-350}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div >
        {
          carousel && carousel.map(item => <SwiperSlide key={item.id}><CarouselCard item={item}></CarouselCard></SwiperSlide>)
        }
        </div>
      </Swiper>
    </>
  )
}

export default Carousel