import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./heroSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper myClass"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://images.pexels.com/photos/3082563/pexels-photo-3082563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className="flex justify-center items-center">
          <div className="lx:px-8 lg:px-8 md:px-6 px-4">
            <h1
              className="  font-semibold lg:mb-6 md:mb-6 sm:mb-4 lx:text-6xl lg:text-5xl md:text-4xl text-xl"
              data-swiper-parallax="-300"
            >
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <h2 className="" data-swiper-parallax="-200">
              Subtitle
            </h2>
            <div
              className="lg:text-lg md:text-lg text-sm"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className="lx:px-8 lg:px-8 md:px-6 px-4">
            <h1
              className="  font-semibold lg:mb-6 md:mb-6 sm:mb-4 lx:text-6xl lg:text-5xl md:text-4xl text-xl"
              data-swiper-parallax="-300"
            >
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <h2 className="" data-swiper-parallax="-200">
              Subtitle
            </h2>
            <div
              className="lg:text-lg md:text-lg text-sm"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <div className="lx:px-8 lg:px-8 md:px-6 px-4">
            <h1
              className="  font-semibold lg:mb-6 md:mb-6 sm:mb-4 lx:text-6xl lg:text-5xl md:text-4xl text-xl"
              data-swiper-parallax="-300"
            >
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <h2 className="" data-swiper-parallax="-200">
              Subtitle
            </h2>
            <div
              className="lg:text-lg md:text-lg text-sm"
              data-swiper-parallax="-100"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                laoreet justo vitae porttitor porttitor. Suspendisse in sem
                justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh
                euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
