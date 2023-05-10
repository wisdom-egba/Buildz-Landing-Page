import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { sliders } from "./slide"
export const DisplaySlider = () => {
  return (
    <div className="relative  max-w-[85%] md:max-w-[85%] lg:max-w-[70%] m-auto flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#FFFF] scrollbar-thin scrollbar-thumb-black outline-none">
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {sliders.map((item) => {
          const { id, img, title, description, time } = item
          return (
            <SwiperSlide
              key={id}
              className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center z-10"
            >
              <img src={img} alt="" />
              <div className="py-12">{description}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
