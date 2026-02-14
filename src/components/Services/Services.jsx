import React from "react";
import Img2 from "../../assets/website/coffee2-nBtrVATQ.png";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra",
    aosDelay: "100",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra",
    aosDelay: "100",
  },
];

function Services() {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* header title */}
          <div data-aos="fade-up" className="text-center mb-30">
            <h1 className="text-4xl font-bold font-Playwrite-cz text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-14 md:gap-5 place-items-center">
            {ServicesData.map((data, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={index}
                  className="rounded-2xl mb-10 bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative"
                >
                  {/* image section */}
                  <div className="h-[122px]">
                    <img
                      src={data.img}
                      alt=""
                      className="max-w-[200px] block mx-auto transform -translate-y-1/2 group-hover:scale-110 group-hover:rotate-6 duration-300"
                    />
                  </div>
                  {/* Text content */}
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
