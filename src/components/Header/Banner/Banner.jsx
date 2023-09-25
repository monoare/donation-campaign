import React from "react";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[80vh]"
        style={{
          backgroundImage: "url( https://i.ibb.co/VYhk1ym/Rectangle-4281.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-[#F2F2F2]"></div>
        <div className="h-[80vh] w-full text-center text-neutral-content flex flex-col">
          <Navbar></Navbar>
          <div className="flex flex-col items-center justify-center my-auto">
            <h1 className="mb-10 text-5xl font-bold text-[#0B0B0B]">
              I Grow By Helping People In Need
            </h1>
            <div className="join mb-[210px]">
              <input
                className="w-[470px] input input-bordered join-item"
                placeholder="Search Here..."
              />
              <button className="btn w-28 capitalize text-base text-white bg-[#FF444A] join-item">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
