import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import './home.css'
import { images } from "../../constants";

const Home = () => {
  return (
    <>
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
      <div>
      <div className='lg:flex lg:flex-row flex flex-col gap-8 p-20' >
          <div className='flex flex-col w-[100%] gap-8 rounded '>
              <div className='overflow-hidden relative'>
                  <img className=' hover:scale-110 duration-500' src={images.banner02} alt="" />
                  <div className='flex justify-center'>
                      <button className='absolute bottom-9 bg-slate-100 hover:bg-orange-600 px-14 py-3 opacity-95 text-xl font-light shadow-lg text-black  duration-500'>DRESSES</button>
                  </div>
              </div>
              <div className='overflow-hidden relative rounded '>
                  <img className=' hover:scale-110 duration-500' src={images.banner05} alt="" />
                  <div className='flex justify-center'>
                      <button className='absolute bottom-10 bg-slate-100 hover:bg-orange-600 px-14 py-3 opacity-95 text-xl font-light shadow-lg text-black duration-500'>SUNGLASSES</button>
                  </div>
              </div>
          </div>
          <div className='flex flex-col w-[100%] gap-8 rounded  '>
              <div className='overflow-hidden relative'>
                  <img className='hover:scale-110 duration-500' src={images.banner03} alt="" />
                  <div className='flex justify-center'>
                      <button className='absolute bottom-10 bg-slate-100 px-14 py-3 opacity-95 text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>WATCHES</button>
                  </div>
              </div>
              <div className='overflow-hidden relative rounded  '>
                  <img className='hover:scale-110 duration-500' src={images.banner07} alt="" />
                  <div className='flex justify-center'>
                      <button className='absolute bottom-9 bg-slate-50 px-14 py-3 opacity-95 text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>FOOTERWEAR</button>
                  </div>
              </div>
          </div>

          <div className='flex flex-col w-[100%] gap-8 rounded '>
              <div className='overflow-hidden relative'>
                  <img className='hover:scale-110 duration-500' src={images.banner04} alt="" />
                  <div className='flex justify-center'>
                      <button className='absolute bottom-9 bg-slate-100 px-20 py-4 opacity-95 text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>BAGS</button>
                  </div>
              </div>
              <div className='overflow-hidden relative rounded '>
                  <img className='hover:scale-110 duration-500' src={images.banner09} alt="" />
                  <div className='flex justify-center'>
                      <button className='absolute bottom-10 bg-slate-100 px-14 py-3 opacity-95 text-xl font-light shadow-lg text-black hover:bg-orange-500 duration-500'>ACCESORIES</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</>
  );
};

export default Home;
