import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

function Search({ data, API_IMG }) {
  return (
    <>
      <ul className="flex justify-center items-center p-8   bg-[#111111]  lg:px-4 lg:py-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <li className="bg-[#171717] p-4 px-8  text-center shadow-inner shadow-white rounded-2xl">
                <h1 className="py-4  text-2xl font-bold">{item.title}</h1>
                <div className="flex justify-between items-center lg:flex-col">
                  <img
                    className="h-[400px] w-[500px]  object-contain "
                    src={API_IMG + item.poster_path}
                    alt="img"
                  />
                  <p className="p-4">{item.overview ? item.overview : "Data Bulunamadı"}</p>
                </div>

                {/* {!data ? <h1>Data Bulunamadı</h1> : "" } */}

              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
    </>
  );
}

export default Search;
