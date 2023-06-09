import React from "react"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

// Import Swiper styles
import "swiper/css/bundle"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { sliders } from "./slide"
import { delay } from "framer-motion"
import { space } from "postcss/lib/list"
export const DisplaySlider = () => {
  return (
    <div className="relative  max-w-[85%] md:max-w-[85%] lg:max-w-[70%] m-auto flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#FFFF] scrollbar-thin scrollbar-thumb-black outline-none">
      <Swiper
        // breakpoints={{
        //   // when window width is >= 640px
        //   640: {
        //     width: 640,
        //     slidesPerView: 1,
        //   },
        //   // when window width is >= 768px
        //   768: {
        //     width: 768,
        //     slidesPerView: 2,
        //   },
        // }}

        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        centeredSlides
        navigation
        keyboard
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="flex justify-center items-center outline-none"
      >
        {sliders.map((item) => {
          const { id, img, title, description, time } = item
          return (
            <SwiperSlide
              key={id}
              className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center z-10"
            >
              <div className="py-6 text-left flex flex-col justify-center md:w-[50%] lg:w-[70] ">
                <img src={img} alt="" />
                <h1 className="text-lg font-bold pt-8 w-[70%]">{title}</h1>
                <h2 className="text-gray-400 py-3">
                  <span className="text-black font-bold">POSTED BY:</span>{" "}
                  {time}
                </h2>
                <p className="font-bold pb-8">{description}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
