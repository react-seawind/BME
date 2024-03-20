import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaPlayCircle } from "react-icons/fa";
import Slider from "react-slick";
import { FcCalendar } from "react-icons/fc";
import { FaCirclePlay, FaLocationDot, FaXTwitter } from "react-icons/fa6";

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
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";

const Home = () => {
  const bannerS = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "185px",
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    prevArrow: null, // Disable the previous arrow
    nextArrow: null, // Disable the next arrow
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
          slidesToShow: 3,
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
          slidesToShow: 3,
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
          slidesToShow: 3,
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
          slidesToShow: 3,
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
          slidesToShow: 3,
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" ">
      {/*==================================Main slider ================================*/}
      <div className="Mainslider outline-none bg-gray-50">
        <Slider {...bannerS} className="main-banner">
          {HomeSLiderData.map((val, index) => {
            return (
              <div className="outline-none w-full" key={index}>
                <img
                  src={val.image}
                  alt=""
                  className="w-full h-52 md:h-96 lg:h-[33rem] lg:px-2 "
                />
              </div>
            );
          })}
        </Slider>
      </div>

      {/*================================= Find New Experience =============================*/}
      <section className="Magazine md:py-16 py-8">
        <div className="container mx-auto px-5">
          <div className="flex items-center mx-4">
            <CiLocationOn className="border text-5xl p-2     rounded-xl" />{" "}
            <div>
              <h1 className="font-bold lg:text-3xl text-xl px-3 my-2 ml-1 ">
                Find New Experience{" "}
              </h1>
              <p className="my-4 text-gray-500 px-3 -mt-1 ml-1">
                Explore, Discover, Make a Plan
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 lg:gap-7 gap-4 m-4 ">
            {NewExperiencedata.map((val, index) => {
              return (
                <div key={index}>
                  <Link to={val.link}>
                    <img
                      src={val.img}
                      alt=""
                      className=" rounded-xl h-auto w-full  block m-auto"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*========================= Popualar Events ================================*/}
      <section className="bg-slate-200   py-12 ">
        <div className="container mx-auto px-5">
          <div className="flex px-2 ">
            <div>
              <FaPlayCircle className="md:text-5xl mt-1 text-2xl text-themecolor1   mr-3" />
            </div>
            <div>
              <h1 className="md:text-3xl text-xl   font-bold ">
                P R E M I E R E
              </h1>
              <p className="text-sm">Watch new Popular events</p>
            </div>
          </div>

          <div className="flex px-2 items-center my-3">
            <h1 className="  md:text-2xl text-xl font-semibold  ">
              Popular Events
            </h1>
            <Link
              to="/BME/event"
              className=" text-sm text-themecolor1 border  font-semibold flex items-center ml-auto py-2 px-3"
            >
              See All
              <IoIosArrowForward />
            </Link>
          </div>
          <Slider {...popular}>
            {popularEventsdata.map((val, index) => {
              return (
                <div>
                  <div key={index}>
                    <div className="rounded mx-2 p-2 bg-white">
                      <Link to={val.link}>
                        <img
                          className="xl:h-80 lg:h-80 surface:h-72 rounded-md h-48 md:h-60 w-full"
                          src={val.img}
                          alt=""
                        />
                        <div className="px-1 py-4">
                          <div className=" mb-2 ">
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
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>

      {/* ==================================Featured Events =================================*/}
      <section className="md:py-16 py-8">
        <div className="container mx-auto px-5 ">
          <div className="flex px-2 items-center my-3">
            <h1 className="  md:text-2xl text-xl font-semibold  ">
              Featured Events
            </h1>
            <Link
              to="/BME/event"
              className=" text-sm text-themecolor1 border border-black rounded  font-semibold flex items-center ml-auto py-2 px-3"
            >
              See All
              <IoIosArrowForward />
            </Link>
          </div>

          <Slider {...featured}>
            {featuredeventdata.map((val, index) => {
              return (
                <div className="">
                  <div key={index}>
                    <div className="  overflow-hidden  mx-2 border p-2 rounded-md shadow-lg">
                      <Link to={val.link}>
                        <img
                          className="xl:h-80 lg:h-80 surface:h-72 rounded-md h-48 md:h-60 w-full rounded-e-none rounded-l-none  "
                          src={val.img}
                          alt=""
                        />
                        <div className="bottom-0 text-white w-full ">
                          <p className="bg-themecolor1 p-3">Event Name</p>
                        </div>
                        <div className=" pt-3">
                          <div className="flex">
                            <div className="flex md:text-sm text-xs font-semibold mb-2">
                              <p className="md:text-xl text-sm mx-1">
                                <FcCalendar />
                              </p>
                              <h1>{val.tittle1}</h1>
                            </div>

                            <div className="flex md:text-sm text-xs font-semibold mb-2 ml-auto">
                              <p className="md:text-xl text-sm mx-1">
                                <FaCirclePlay />
                              </p>
                              <h1>{val.tittle2}</h1>
                            </div>
                          </div>

                          <div className="flex text-sm font-semibold  bg-pink-100 rounded-md py-1 px-2">
                            <h1 className=" my-auto">₹ {val.price}</h1>

                            <button className="ml-auto">
                              <Link
                                to="/BME/steps1"
                                className="text-base font-bold border-l-2 border-pink-300 pl-2 "
                              >
                                BUY NOW
                              </Link>
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
      <section className="bg-slate-200">
        <div className="container mx-auto py-10 px-5">
          <div className="flex px-2 items-center my-3">
            <h1 className="  md:text-2xl text-xl font-semibold  ">
              OutDoor Events
            </h1>
            <Link
              to="/BME/event"
              className=" text-sm text-themecolor1  rounded  font-semibold flex items-center ml-auto py-2 px-3"
            >
              See All
              <IoIosArrowForward />
            </Link>
          </div>
          <Slider {...outdoor}>
            {outDoorEventsdata.map((val, index) => {
              return (
                <div>
                  <div key={index}>
                    <Link to={val.link}>
                      <div className="overflow-hidden mx-2  p-2  rounded-md bg-white">
                        <div className="rounded-xl">
                          <img
                            className="xl:h-80 lg:h-80 surface:h-72 rounded-md h-48 md:h-60 w-full rounded-e-none rounded-l-none  "
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
      <section className="md:py-16 py-8">
        <div className="container mx-auto  px-5">
          <h1 className="  ml-4 md:text-2xl text-xl font-semibold text-black flex items-center">
            <BiCategory className="border text-5xl p-2 rounded-xl mr-3" />{" "}
            Browse Events
          </h1>
          <div className="grid grid-cols-3 lg:grid-cols-8 md:grid-cols-4 surface:grid-cols-6">
            {broseeventdata.map((val, index) => {
              return (
                <div className="  m-4" key={index}>
                  <h1
                    className="text-center flex justify-center border  md:text-6xl text-2xl lg:p-8 p-4 rounded-lg "
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
          <Link to={"/BME/event"}>
            <button className="bg-red-600  py-2 px-4 flex justify-center mt-5 text-lg text-white mx-auto rounded-3xl ">
              Show More
            </button>
          </Link>
        </div>
      </section>

      {/* ==================================Music=====================================*/}
      <section className="bg-slate-200  md:py-16 py-8">
        <div className="container mx-auto  px-5">
          <div className="flex px-2 items-center my-3">
            <h1 className="  md:text-2xl text-xl font-semibold  ">Music</h1>
            <Link
              to="/BME/event"
              className=" text-sm text-themecolor1 border border-black rounded  font-semibold flex items-center ml-auto py-2 px-3"
            >
              See All
              <IoIosArrowForward />
            </Link>
          </div>
          <Slider {...music}>
            {musicdata.map((val, index) => {
              return (
                <div>
                  <div key={index}>
                    <Link to={val.link}>
                      <div className="overflow-hidden mx-2  p-2  rounded-md bg-white">
                        <div className="rounded-xl">
                          <img
                            className="xl:h-80 lg:h-80 surface:h-72 rounded-md h-48 md:h-60 w-full rounded-e-none rounded-l-none  "
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

      {/* ======================================Comedy===================================== */}
      <section className="md:py-16 py-8">
        <div className="container mx-auto px-5">
          <div className="flex px-2 items-center my-3">
            <h1 className="  md:text-2xl text-xl font-semibold  ">Comedy</h1>
            <Link
              to="/BME/event"
              className=" text-sm text-themecolor1 border border-black rounded  font-semibold flex items-center ml-auto py-2 px-3"
            >
              See All
              <IoIosArrowForward />
            </Link>
          </div>
          <Slider {...comedy}>
            {comedydata.map((val, index) => {
              return (
                <div className="">
                  <div key={index}>
                    <div className="  overflow-hidden  mx-2 border p-2 rounded-md shadow-lg">
                      <Link to={val.link}>
                        <img
                          className="xl:h-80 lg:h-80 surface:h-72 rounded-md h-48 md:h-60 w-full rounded-e-none rounded-l-none  "
                          src={val.img}
                          alt=""
                        />
                        <div className="bottom-0 text-white w-full ">
                          <p className="bg-themecolor1 p-3">Event Name</p>
                        </div>
                        <div className=" pt-3">
                          <div className="flex">
                            <div className="flex md:text-sm text-xs font-semibold mb-2">
                              <p className="md:text-xl text-sm mx-1">
                                <FcCalendar />
                              </p>
                              <h1>{val.date}</h1>
                            </div>

                            <div className="flex md:text-sm text-xs font-semibold mb-2 ml-auto">
                              <p className="md:text-xl text-sm mx-1">
                                <FaCirclePlay />
                              </p>
                              <h1>{val.tittle2}</h1>
                            </div>
                          </div>

                          <div className="flex text-sm font-semibold  bg-pink-100 rounded-md py-1 px-2">
                            <h1 className=" my-auto">₹ {val.price}</h1>

                            <button className="ml-auto">
                              <Link
                                to="/BME/steps1"
                                className="text-base font-bold border-l-2 border-pink-300 pl-2 "
                              >
                                BUY NOW
                              </Link>
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

      {/* ======================================Event this Week===================================== */}
      <section className="md:py-8 py-4">
        <div className="container mx-auto px-5">
          <h1 className="md:mt-10 mt-4 my-2 mx-4 md:text-2xl text-xl font-semibold text-black flex items-center">
            <CiCalendar className="border text-5xl p-2 rounded-xl mr-3" /> Event
            this Week
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 gap-3 mx-4">
            <Link to={"/BME/event"}>
              <div className="event border-2 py-5 rounded-md">
                <h1 className="md:text-xl text-lg text-center font-bold mx-4 text-[#DC3548]">
                  Today
                </h1>
                <p className="mx-4 text-gray-500 text-sm text-center">
                  Sat, 3 Feb
                </p>
              </div>
            </Link>

            <Link to={"/BME/event"}>
              <div className="event border-2 py-5 rounded-md">
                <h1 className="md:text-xl text-lg font-bold mx-4 text-[#DC3548] text-center ">
                  Tomorrow
                </h1>
                <p className="mx-4 text-gray-500 text-sm text-center">
                  Sun, 4 Feb
                </p>
              </div>
            </Link>

            <Link to={"/BME/event"}>
              <div className="event border-2 py-5 rounded-md">
                <h1 className="md:text-xl text-lg font-bold mx-4 text-[#DC3548] text-center ">
                  Weekend
                </h1>
                <p className="mx-4 text-gray-500 text-sm text-center">
                  3 - 4 Feb
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================Artist===================================== */}
      <section className="md:py-8 py-4">
        <div className="container mx-auto px-5">
          <div className="flex px-4 items-center my-3">
            <h1 className="  md:text-2xl text-xl font-semibold  ">Artist</h1>
            <Link
              to="/BME/event"
              className=" text-sm text-themecolor1 border border-black rounded  font-semibold flex items-center ml-auto py-2 px-3"
            >
              See All
              <IoIosArrowForward />
            </Link>
          </div>
          <Slider {...artist} className="">
            {artistdata.map((val, index) => {
              return (
                <Link
                  className="contain relative p-2 "
                  key={index}
                  to={val.link}
                >
                  <div className="bg-white shadow-md   rounded mx-2">
                    <img
                      src={val.img}
                      alt="Avatar"
                      className="image w-full block m-auto  rounded-full lg:p-4 md:p-8 p-4"
                    />
                    <h1 className="text-center font-semibold">{val.tittle}</h1>
                    <p className="text-center text-gray-500">{val.des}</p>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto    px-5">
          <div className="bg-slate-100 p-5 border rounded-md">
            <p className="font-semibold">
              Want to hear about the best things to do in your city?
            </p>
            <p className="text-3xl font-bold">SUBSCRIBE TO OUR NEWSLATTER!</p>
            <p>
              Join our mailing list and stay up to date with the latest event a
              round you
            </p>
            <form className="my-3">
              <input
                type="text"
                name=""
                value=""
                placeholder="abc@gmail.com"
                className="border p-3"
              />
              <input
                type="submit"
                name=""
                className="border bg-themecolor3 py-3 px-2 text-white cursor-pointer"
                value="YES, I AM IN"
              />
            </form>
            <div className="flex items-center flex-col md:flex-row">
              <p className="font-bold mb-5 md:mb-0">
                For Latest update follow:
              </p>
              <div className="flex items-center md:ml-auto ">
                <div className="flex items-center border border-black mx-2 py-2 px-3 rounded-lg">
                  <FaFacebook className="mr-2" />
                  Facebook
                </div>
                <div className="flex items-center border border-black mx-2 py-2 px-3 rounded-lg">
                  <FaXTwitter className="mr-2" />
                  Twitter
                </div>
                <div className="flex items-center border border-black mx-2 py-2 px-3 rounded-lg">
                  <FaInstagram className="mr-2" />
                  Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
