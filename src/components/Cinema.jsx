import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal, Button } from "react-bootstrap";

import "swiper/css";
import axios from "axios";

function Cinema({ cinema, API_IMG }) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  async function clicked(e) {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${e.target.id}?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&external_source=imdb_id`
    );
    setData(res.data);
    console.log(data);
  }

  return (
    <>
      <h1 className="text-center text-5xl font-bold py-10 ">Sinemalarda </h1>

      <ul className="flex justify-center items-center text-center p-20 bg-[#111111] lg:px-2 lg:py-10 relative ">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="pr-24 lg:pr-0"
        >
          {cinema.map((item, i) => (
            <SwiperSlide key={i}>
              <li className="bg-[#171717] p-4 text-center shadow-inner shadow-white  rounded-2xl  ">
                {/* <h1 className="py-4  text-[20px] font-bold lg:hidden">
                  {item.title}
                </h1> */}
                <img
                  className="text-center"
                  src={API_IMG + item.poster_path}
                  alt="img"
                />
                <button
                  onClick={clicked}
                  className="mt-4 p-2 rounded-3xl font-bold bg-white text-[#171717] "
                >
                  <button
                    id={`${item.id}`}
                    onClick={handleShow}
                    type="button"
                    className="btn btn-dark"
                  >
                    Göster
                  </button>
                </button>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
        <Modal
          show={show}
          onHide={handleClose}
          className="absolute top-[1500px] left-[10%] flex justify-center items-center w-[80%]  z-30 bg-[#333] p-4 m-center "
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-2xl">{data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="w-full">
            <img
              className="w-44 float-left mr-10 "
              src={API_IMG + data.poster_path}
              alt=""
            />
            <h3 className="pt-2 ml-12"> {data.title || ""} </h3>
            <h4 className="py-2"> IMDB: {data.vote_average} </h4>
            <h5> Yayın Tarihi: {data.release_date} </h5>
            <br></br>
            <h6>Özet</h6>
            <p className="w-full">
              {" "}
              {data.overview
                ? data.overview
                : "lorem ipsum dolar sit amet"}{" "}
            </p>
          </Modal.Body>
          <Modal.Footer className="float-left">
            <Button
              variant="secondary"
              onClick={handleClose}
              className="bg-white text-[#171717] p-2 font-bold my-4"
            >
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>
      </ul>
    </>
  );
}

export default Cinema;
