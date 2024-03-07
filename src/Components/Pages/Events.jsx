import React, { useState } from "react";
import Slider from "react-slick";

import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { bannerdata, buttondata, eventdata1 } from "../API";

function Events() {
  const bannerS = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //=========================================Date Part============================================
  const [datePart, setDatePart] = useState(false);

  const toggleDate = () => {
    setDatePart(!datePart);
  };

  //=========================================Languages Part============================================
  const [Languages, setLanguages] = useState(false);

  const toggleLanguages = () => {
    setLanguages(!Languages);
  };

  //=========================================Categories Part============================================
  const [Categories, setCategories] = useState(false);

  const toggleCategories = () => {
    setCategories(!Categories);
  };

  //=========================================More Filters============================================
  const [MFilters, setMFilters] = useState(false);

  const toggleMFilters = () => {
    setMFilters(!MFilters);
  };

  //=========================================Price============================================
  const [Price, setPrice] = useState(false);

  const togglePrice = () => {
    setPrice(!Price);
  };

  return (
    <div>
      {/*=================================== Banners data======================================== */}
      <div className="Mainslider outline-none">
        <Slider {...bannerS}>
          {bannerdata.map((val, index) => {
            return (
              <div className="outline-none w-full" key={index}>
                <img src={val.img} alt="" className="w-full h-40 md:h-96" />
              </div>
            );
          })}
        </Slider>
      </div>

      <section className="bg-gray-100 md:px-3">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-3">
            <div className="md:mt-16 mt-3">
              <h1 className="my-6 mx-4 lg:mx-0 text-2xl font-bold">Filters</h1>

              {/*================================== Date Part================================== */}
              <div className="card bg-white mx-4 lg:mx-0 py-3 md:w-[95%] rounded-md">
                <button
                  onClick={toggleDate}
                  className="w-full text-base flex px-3 "
                >
                  Date
                  {datePart ? (
                    <MdKeyboardArrowUp className="mt-1 ml-auto" />
                  ) : (
                    <MdKeyboardArrowDown className="mt-1 ml-auto" />
                  )}
                </button>
                {datePart && (
                  <p className="text-sm">
                    <button className="mx-2 px-2 py-1 my-1 border text-themecolor1">
                      Today
                    </button>
                    <button className="border py-1 px-2 text-themecolor1">
                      Tommorwo
                    </button>
                    <button className="mx-2 py-1 px-2 border text-themecolor1">
                      This Weekend
                    </button>
                  </p>
                )}
              </div>

              {/*================================== Languages Part================================== */}
              <div className="card bg-white mx-4 lg:mx-0 my-5 py-3 md:w-[95%] rounded-md">
                <button
                  onClick={toggleLanguages}
                  className="w-full text-base flex px-3 "
                >
                  Languages
                  {Languages ? (
                    <MdKeyboardArrowUp className="mt-1 ml-auto" />
                  ) : (
                    <MdKeyboardArrowDown className="mt-1 ml-auto" />
                  )}
                </button>
                {Languages && (
                  <p className="text-sm">
                    <button className="mx-2 px-2 py-1 my-1 mt-4 border text-themecolor1">
                      Gujarati
                    </button>
                    <button className="border py-1 px-2 my-1 text-themecolor1">
                      Hindi
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      English
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Telugu
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Tamil
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Bengali
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Kannada
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Malayalam
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Marathi
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Punjabi
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Sindhi
                    </button>
                  </p>
                )}
              </div>

              {/*================================== Categories Part================================== */}
              <div className="card bg-white mx-4 lg:mx-0 my-5 py-3 md:w-[95%] rounded-md">
                <button
                  onClick={toggleCategories}
                  className="w-full text-base flex px-3 "
                >
                  Categories
                  {Categories ? (
                    <MdKeyboardArrowUp className="mt-1 ml-auto" />
                  ) : (
                    <MdKeyboardArrowDown className="mt-1 ml-auto" />
                  )}
                </button>
                {Categories && (
                  <p className="text-sm">
                    <button className="mx-2 px-2 py-1 my-1 mt-4 border text-themecolor1">
                      Comedy shows
                    </button>
                    <button className="border py-1 px-2 my-1 text-themecolor1">
                      Workshops
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Online Streaming Events
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Music Shows
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Performances
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Meetups
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Exhibition
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Kids
                    </button>
                  </p>
                )}
              </div>

              {/*================================== More Filters Parts================================== */}
              <div className="card bg-white mx-4 lg:mx-0 my-5 py-3 md:w-[95%] rounded-md">
                <button
                  onClick={toggleMFilters}
                  className="w-full text-base flex px-3 "
                >
                  More Filters
                  {MFilters ? (
                    <MdKeyboardArrowUp className="mt-1 ml-auto" />
                  ) : (
                    <MdKeyboardArrowDown className="mt-1 ml-auto" />
                  )}
                </button>
                {MFilters && (
                  <p className="text-sm">
                    <button className="mx-2 px-2 py-1 my-1 mt-4 border text-themecolor1">
                      Outdoor Events
                    </button>
                    <button className="border py-1 px-2 my-1 text-themecolor1">
                      Fast Filling
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Online Streaming Events
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Must Attend
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Unmissable Events
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Kids Allowed
                    </button>
                  </p>
                )}
              </div>

              {/*================================== Price Parts================================== */}
              <div className="card bg-white mx-4 lg:mx-0 my-5 py-3 md:w-[95%] rounded-md">
                <button
                  onClick={togglePrice}
                  className="w-full text-base flex px-3 "
                >
                  Price
                  {Price ? (
                    <MdKeyboardArrowUp className="mt-1 ml-auto" />
                  ) : (
                    <MdKeyboardArrowDown className="mt-1 ml-auto" />
                  )}
                </button>
                {Price && (
                  <p className="text-sm">
                    <button className="mx-2 px-2 py-1 my-1 mt-4 border text-themecolor1">
                      Free
                    </button>
                    <button className="border py-1 px-2 my-1 text-themecolor1">
                      0 - 500
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      501 - 2000
                    </button>
                    <button className="mx-2 py-1 px-2 border my-1 text-themecolor1">
                      Above 2000
                    </button>
                  </p>
                )}
              </div>
              <button className="text-themecolor1 px-0 md:px-16 mx-4 lg:mx-0 md:w-[95%] w-[90%] rounded-md py-1 border border-thtext-themecolor1">
                <Link to="">Browse by Venues</Link>
              </button>
            </div>

            {/* ==============================Events In Ahmedaba=================================*/}
            <div className="col-span-3 mt-1 md:mt-16 mb-20 md:mb-5">
              <h1 className="my-6 mx-4 text-2xl font-bold">
                Events In Ahmedabad
              </h1>

              <div className="carddata flex overflow-x-auto mb-2">
                {buttondata.map((val, index) => {
                  return (
                    <div className="" key={index}>
                      <button className="bg-white text-themecolor1 text-xs mx-2 my-2 py-2 px-4 border border-gray-300 rounded-full whitespace-nowrap">
                        {val.tittle}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-rows-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 grid-cols-2">
                {eventdata1.map((val, index) => {
                  return (
                    <div className="px-2 md:mt-8 pb-5" key={index}>
                      <Link to={val.link}>
                        <img
                          src={val.img}
                          alt=""
                          className="xl:h-96 lg:h-80 surface:h-72 rounded-md h-72 md:h-60 w-full"
                        />

                        <div className="px-1 py-4">
                          <div className=" mb-">
                            <h1 className="md:font-bold font-semibold md:text-base text-sm   line-clamp-1">
                              {val.tittle}
                            </h1>
                          </div>
                          <p className=" md:text-sm text-xs line-clamp-1 ">
                            {val.des}
                          </p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
