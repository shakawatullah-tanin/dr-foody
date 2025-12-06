import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <img className="  relative" src="Banner.jpg" alt="" />
        <div className="absolute top-62 mx-20">
          <h1 className=" text-6xl  font-bold   ">
            <span className="text-[#a2f217] ">Organic Food </span>
            <h1 className="py-4 text-white">Delivery Service</h1>
          </h1>
          <p className="text-md">
            Fresh and Healthy . <br />
            A delicious journey built on healthy choices and natural goodness .</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
