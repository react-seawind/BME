import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Slider from "react-slick";
import { FcCalendar } from "react-icons/fc";
import { FaCirclePlay } from "react-icons/fa6";

import { IoIosArrowForward } from "react-icons/io";

import {
  HomeSLiderData,
  NewExperiencedata,
  artistdata,
  broseeventdata,
  comedydata,
  featuredeventdata,
  musicdata,
  outDoorEventsdata,
  popularEventsdata,
} from "../API";
import { Link } from "react-router-dom";

function Home() {
  const bannerS = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
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

          centerPadding: "0px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  const popular = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const featured = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const outdoor = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const music = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const comedy = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const artist = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" ">
      {/*==================================Main slider ================================*/}
      <div className="Mainslider outline-none bg-gray-50">
        <Slider {...bannerS}>
          {HomeSLiderData.map((val, index) => {
            return (
              <div className="outline-none w-full" key={index}>
                <img
                  src={val.image}
                  alt=""
                  className="w-full h-40 md:h-96 lg:px-2 rounded-xl"
                />
              </div>
            );
          })}
        </Slider>
      </div>

      {/*================================= Find New Experience =============================*/}
      <section className="Magazine md:mt-20">
        <div className="container mx-auto">
          <h1 className="font-bold lg:text-3xl text-xl px-3 my-2 ml-1 ">
            Find New Experience{" "}
          </h1>
          <p className="my-4 text-gray-500 px-3 -mt-1 ml-1">
            Explore, Discover, Make a Plan
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 lg:gap-7 gap-4 m-4 ">
            {NewExperiencedata.map((val, index) => {
              return (
                <div key={index}>
                  <Link to={val.link}>
                    <img
                      src={val.img}
                      alt=""
                      className=" rounded-xl h-32 w-full lg:h-48 md:h-40 block m-auto"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*========================= Popualar Events ================================*/}
      <section className="bg-[#2B3148] md:pt-9 pt-2 md:mt-20 mt-8">
        <div className="container mx-auto">
          <div className="populareventsLogo flex ml-4">
            <FaPlayCircle className="md:text-5xl mt-1 text-2xl text-themecolor1 md:mx-0" />
            <h1 className="md:text-3xl text-xl mx-3 font-bold text-white">
              P R E M I E R E
            </h1>
          </div>
          <p className="md:mx-[76px] mx-[51px] md:-mt-4 -mt-0 text-white text-sm">
            Watch new Popular events
          </p>

          <h1 className="md:mt-10 mt-4 -my-1 ml-4 md:text-2xl text-xl font-semibold text-white ">
            Popular Events
          </h1>
          <a
            href="/event"
            className="md:text-base text-sm text-themecolor1 flex justify-end mr-5 -mt-5 mb-2 font-semibold"
          >
            See All
            <IoIosArrowForward className="mt-1" />
          </a>
          <Slider {...popular}>
            {popularEventsdata.map((val, index) => {
              return (
                <div>
                  <div key={index}>
                    <div className="max-w-sm rounded overflow-hidden mx-4">
                      <Link to={val.link}>
                        <img
                          className="xl:h-96 lg:h-80 surface:h-80 rounded-md h-72 md:h-60 w-full"
                          src={val.img}
                          alt=""
                        />
                        <div className="px-1 py-4">
                          <div className=" mb-2 text-white">
                            <h1 className="md:font-bold font-semibold md:text-base text-sm   line-clamp-1">
                              {val.tittle}
                            </h1>
                          </div>
                          <p className="text-gray-200 md:text-sm text-xs line-clamp-1 ">
                            {val.des}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* ==================================Featured Events =================================*/}
      <section className="featurevents md:mt-20">
        <div className="container mx-auto">
          <h1 className="md:mt-10 mt-4 -my-1 ml-4 md:text-2xl text-xl font-semibold text-black ">
            Featured Events
          </h1>
          <Link className="md:text-base text-sm text-themecolor1 flex justify-end mr-5 -mt-5 mb-2 font-semibold">
            See All
            <IoIosArrowForward className="mt-1" />
          </Link>

          <Slider {...featured}>
            {featuredeventdata.map((val, index) => {
              return (
                <div>
                  <div key={index}>
                    <div className="max-w-sm rounded overflow-hidden mx-4">
                      <Link>
                        <img
                          className="xl:h-96 lg:h-80 surface:h-80 rounded-md h-72 md:h-60 w-full"
                          src={val.img}
                          alt=""
                        />
                        <div className=" md:py-4 py-2">
                          <div className="flex md:text-sm text-xs font-semibold mb-2">
                            <p className="md:text-xl text-sm mx-1">
                              <FcCalendar />
                            </p>
                            <h1>{val.tittle1}</h1>
                          </div>

                          <div className="flex md:text-sm text-xs font-semibold mb-2">
                            <p className="md:text-xl text-sm mx-1">
                              <FaCirclePlay />
                            </p>
                            <h1>{val.tittle2}</h1>
                          </div>

                          <div className="flex text-sm font-semibold mb-2 bg-pink-100 rounded-md py-1">
                            <h1 className="md:pl-1 pl-1 mr-auto my-auto">
                              ₹ {val.price}
                            </h1>

                            <button className="">
                              <a
                                href="/steps1"
                                className="text-lg font-bold border-l-2 border-pink-400 md:pl-2 pl-1 pr-1"
                              >
                                BUY NOW
                              </a>
                            </button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/*================================= OutDoor Events===================================== */}
      <section className="outDoorEvents md:mt-20 md:py-1 py-[1px] bg-slate-200">
        <div className="container mx-auto">
          <h1 className="md:mt-10 mt-4 -my-1 ml-4 md:text-2xl text-xl font-semibold text-black">
            Outdoor Events{" "}
            <span className="md:text-sm text-xs bg-themecolor1 text-white py-[1px] px-[1px] md:py-1 md:px-1 md:rounded-md rounded-sm">
              NEW
            </span>
          </h1>
          <Link className="md:text-base text-sm text-themecolor1 flex justify-end mr-5 -mt-5 mb-2 font-semibold">
            See All
            <IoIosArrowForward className="mt-1" />
          </Link>
          <Slider {...outdoor}>
            {outDoorEventsdata.map((val, index) => {
              return (
                <div>
                  <div key={index}>
                    <Link>
                      <div className="max-w-sm overflow-hidden mx-4">
                        <div className="rounded-xl">
                          <img
                            className="xl:h-96 lg:h-80 surface:h-80 rounded-md h-72 md:h-60 w-full"
                            src={val.img}
                            alt=""
                          />
                        </div>
                        <div className="px-2 py-4">
                          <h1 className="md:font-bold font-semibold md:text-base text-sm line-clamp-1 ">
                            {val.tittle}
                          </h1>
                          <p className="text-black md:text-sm text-xs line-clamp-1 ">
                            {val.des}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* =======================Browse Events by Genre ==============================*/}
      <section className="browseevents lg:mt-20 mt-5">
        <div className="container mx-auto">
          <h1 className="md:mt-10 mt-4 -my-1 ml-4 md:text-2xl text-xl font-semibold text-black">
            Browse Events By Genre
          </h1>
          <div className="grid grid-cols-3 lg:grid-cols-8 md:grid-cols-4">
            {broseeventdata.map((val, index) => {
              return (
                <div className="browselogo font-thin m-4" key={index}>
                  <h1
                    className="text-center flex justify-center border border-black md:text-6xl text-2xl md:px-8 md:py-8 px-5 py-5"
                    href={val.link}
                  >
                    {val.logo}
                  </h1>
                  <h2 className="font-semibold md:text-lg text-sm text-center">
                    <Link to={val.link2}>{val.tittle}</Link>
                  </h2>
                  <p className="text-gray-400 font-semibold text-xs text-center">
                    <Link to={val.link3}>{val.des}</Link>
                  </p>
                </div>
              );
            })}
          </div>
          <button className="bg-red-600  py-2 px-4 flex justify-center mt-5 text-lg text-white mx-auto rounded-3xl ">
            Show More
          </button>
        </div>
      </section>

      {/* ==================================Music=====================================*/}
      <section className="music md:mt-20 mt-5">
        <div className="container mx-auto">
          <h1 className="md:mt-10 mt-4 -my-1 ml-4 md:text-2xl text-xl font-semibold text-black">
            Music
          </h1>
          <Link className="md:text-base text-sm text-themecolor1 flex justify-end mr-5 -mt-5 mb-2 font-semibold">
            See All
            <IoIosArrowForward className="mt-1" />
          </Link>
          <Slider {...music}>
            {musicdata.map((val, index) => {
              return (
                <div key={index}>
                  <Link href={val.link}>
                    <div className="max-w-sm overflow-hidden m-3">
                      <img
                        className="xl:h-96 lg:h-80 surface:h-80 rounded-md h-72 md:h-60 w-full"
                        src={val.img}
                      />

                      {/* <p className="text-white bg-black py-4">{val.date}</p> */}
                      <div className="px-0 md:py-4 py-2">
                        <div className="font-semibold text-lg mb-2 text-black">
                          <h1 className="md:font-bold font-semibold md:text-base text-sm line-clamp-1  ">
                            {val.tittle}
                          </h1>
                        </div>
                        <p className="text-black md:text-sm text-xs line-clamp-1  ">
                          {val.des}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* ======================================Comedy===================================== */}
      <section className="comedy md:mt-20 mt-5">
        <div className="container mx-auto">
          <h1 className="md:mt-10 mt-4 -my-1 ml-4 md:text-2xl text-xl font-semibold text-black">
            Comedy
          </h1>
          <Link className="md:text-base text-sm text-themecolor1 flex justify-end mr-5 -mt-5 mb-2 font-semibold">
            See All
            <IoIosArrowForward className="mt-1" />
          </Link>
          <Slider {...comedy}>
            {comedydata.map((val, index) => {
              return (
                <div key={index}>
                  <Link to={val.link}>
                    <div className="max-w-sm overflow-hidden m-3">
                      <img
                        className="xl:h-96 lg:h-80 surface:h-80 rounded-md h-72 md:h-60 w-full"
                        src={val.img}
                      />

                      {/* <p className="text-white bg-black py-4">{val.date}</p> */}
                      <div className="px-0 py-4">
                        <div className="font-semibold text-lg mb-2 text-black">
                          <h1 className="md:font-bold font-semibold md:text-base text-sm line-clamp-1  ">
                            {val.tittle}
                          </h1>
                        </div>
                        <p className="text-black md:text-sm text-xs line-clamp-1  ">
                          {val.des}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* ======================================Event this Week===================================== */}
      <section className="eventweek md:mt-20 mt-1">
        <div className="container mx-auto">
          <h1 className="md:mt-10 mt-4 my-2 ml-4 md:text-2xl text-xl font-semibold text-black">
            Event this Week
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 gap-3 lg:w-[50%] w-[95%]">
            <Link>
              <div className="event border-2 ml-4 rounded-md">
                <h1 className="md:text-xl text-lg text-center font-bold mx-4 mt-3 text-[#DC3548]">
                  Today
                </h1>
                <p className="mx-4 text-gray-500 mb-3 text-sm text-center">
                  Sat, 3 Feb
                </p>
              </div>
            </Link>

            <Link>
              <div className="event border-2 ml-4 rounded-md">
                <h1 className="md:text-xl text-lg font-bold mx-4 mt-3 text-[#DC3548] text-center ">
                  Tomorrow
                </h1>
                <p className="mx-4 text-gray-500 mb-3 text-sm text-center">
                  Sun, 4 Feb
                </p>
              </div>
            </Link>

            <Link>
              <div className="event border-2 ml-4 rounded-md">
                <h1 className="md:text-xl text-lg font-bold mx-4 mt-3 text-[#DC3548] text-center ">
                  Weekend
                </h1>
                <p className="mx-4 text-gray-500 mb-3 text-sm text-center">
                  3 - 4 Feb
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================Artist===================================== */}
      <section className="Artist my-20">
        <div className="container mx-auto">
          <h1 className="md:mt-10 mt-4 my-2 ml-4 md:text-2xl text-xl font-semibold text-black">
            Artist
          </h1>
          <Link className="md:text-base text-sm text-themecolor1 flex justify-end mr-5 -mt-5 mb-2 font-semibold">
            See All
            <IoIosArrowForward className="mt-1" />
          </Link>
          <Slider {...artist}>
            {artistdata.map((val, index) => {
              return (
                <Link className="contain relative md:mx-2" key={index}>
                  <img
                    src={val.img}
                    alt="Avatar"
                    className="image w-full block m-auto  rounded-full lg:p-4 md:p-8 p-4"
                  />
                  <h1 className="text-center font-semibold">{val.tittle}</h1>
                  <p className="text-center text-gray-500">{val.des}</p>
                </Link>
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Home;
