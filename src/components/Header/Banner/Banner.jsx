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
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="h-[80vh] w-full text-center text-neutral-content flex flex-col">
          <Navbar></Navbar>
          <div className="flex flex-col items-center justify-center my-auto">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">I Grow By Helping People In Need</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
