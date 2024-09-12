import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import './home.css'

const Home = () => {
  return (
    <Carousel>
      <Carousel.Item className="w-full">
        <div className="item1 flex flex-col justify-center items-center gap-3 text-white">
        <p className="text-2xl">Women Collection 2018</p>
          <h1 className="text-7xl p-9 text-center font-bold">NEW ARRIVALS</h1>
          <button className="border rounded-full w-[50vw] lg:w-[12vw] p-2 bg-white  text-black font-light">
            SHOP NOW
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="item2 flex flex-col justify-center items-center gap-3 text-white">
          <p className="text-2xl">Women Collection 2018</p>
          <h1 className="text-7xl p-9 text-center font-bold">NEW ARRIVALS</h1>
          <button className="border rounded-full w-[50vw] lg:w-[12vw] p-2 bg-white  text-black font-light">
            SHOP NOW
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="item3 flex flex-col justify-center items-center gap-3 text-white">
        <p className="text-2xl">Women Collection 2018</p>
          <h1 className="text-7xl p-9 text-center font-bold">NEW ARRIVALS</h1>
          <button className="border rounded-full w-[50vw] lg:w-[12vw] p-2 bg-white  text-black font-light">
            SHOP NOW
          </button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
