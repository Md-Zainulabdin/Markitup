import React from "react";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div className="parent flex flex-col gap-8 text-center">
        <div className="client-title pb-6">
        <h3 className="text-lg font-semibold text-[#222]">Our Trusted Clients</h3>
        </div>
      <div className="client-company w-full cursor-grab">
        <Marquee
          gradient={true}
          speed={40}
          direction="left"
          pauseOnHover={true}
        >
          <div className="company-logo" id="company-slide">
            <img
              src="/images/brand-logo-1.png"
              alt="company-logo"
              className="w-[100px] grayscale  opacity-80"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/images/brand-logo-2.png"
              alt="company-logo"
              className="w-[50px] grayscale"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/images/brand-logo-3.png"
              alt="company-logo"
              className="w-[100px] grayscale opacity-80"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/images/brand-logo-4.png"
              alt="company-logo"
              className="w-[140px] grayscale"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/images/brand-logo-5.png"
              alt="company-logo"
              className="w-[130px] grayscale"
            />
          </div>

          <div className="company-logo" id="company-slide">
            <img
              src="/images/brand-logo-6.png"
              alt="company-logo"
              className="w-[110px] grayscale opacity-80"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Clients;
