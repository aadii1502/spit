import React from "react";
import "../index.css";
import Typed from 'react-typed';
const Home = () => {
  return (
    <div className=" gradient_color h-[1350px]">
      <div className=" flex flex-row border-b-2 sticky top-0 gradient_color z-50" >
        <p className="font-extrabold text-4xl font-mono absolute bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent py-8 px-10">
          RELIEFPlus
        </p>
        <button className=" bg-purple-500 my-8 ml-[1300px] py-2 rounded-3xl font-semibold text-white px-4">
          Connect Wallet
        </button>
      </div>
      <div>
        <div className=" text-8xl w-[1060px] mt-32 ml-28">
          <b className=" bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Empower
          </b>{" "}
          <Typed className='md:text-8xl sm:text-4xl text-white text-xl font-bold md:pl-4 pl-2' strings={['Lives','Minds','People']} typeSpeed={100} backSpeed={100} loop/>
          </div>
          <div className='text-8xl w-[1000px] my-2 ml-28'>
          <b className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Change 
          </b>
            <b className=" text-white"> Humanity</b>
          </div>
          <div>
            <img className=" absolute mix-blend-lighten -mt-[330px] w-[400px] h-96 ml-[1000px]" src="https://storage.googleapis.com/pai-images/8dd4acd5b1174966a79bc2d0e5763b55.jpeg" alt="" />
          </div>
      </div>
      <div>
        <button className=" relative z-50 mt-[210px] ml-[600px] text-white h-16 w-64  inset-0 rounded-lg  transition duration-300 transform font-mono hover:translate-x-1 hover:scale-110 hover:translate-y-1 bg-black ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 font-bold text-2xl"><b className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Explore Campaigns</b></button>
      </div>
    </div>
  );
};

export default Home;
