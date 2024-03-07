import React, { useState } from "react";
import Slider from "react-slick";
import BannerLst1 from "../../Images/bannerlst1.jpg";
import BannerLst2 from "../../Images/bannerlst2.jpg";
import BannerLst3 from "../../Images/bannerlst3.jpg";
import BannerLst4 from "../../Images/bannerlst4.jpg";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { hostdata, servicesofferdata } from "../API";

export default function ListYourShow() {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleCloseModal = () => {
    setSelectedItem(null);
  };
  const [selectedItem1, setSelectedItem1] = useState(null);
  const handleItemClick1 = (item) => {
    setSelectedItem1(item);
  };
  const handleCloseModal1 = () => {
    setSelectedItem1(null);
  };

  const bannerLst = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "320px",
    slidesToShow: 1,
    speed: 500,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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

  const sliderdata = [
    {
      name: "Introducing an event management tool",
      name2: "Experience the ease of events creation and publishing",
      image: BannerLst1,
    },
    {
      name: "Empower the artist within you",
      name2: "List your own performances, gigs and more with BookMyShow",
      image: BannerLst2,
    },
    {
      name: "Ticket scanning made easy",
      name2: "Experience the ease of managing entry at an event.",
      image: BannerLst3,
    },
    {
      name: "Take advantage of our M-ticket feature",
      name2:
        "Lets your audience skip the box office queue and head straight to the gate.",
      image: BannerLst4,
    },
  ];

  return (
    <div>
      {/*================================== Banner Part =========================================*/}
      <div className="Mainslider outline-none bg-slate-100">
        <Slider {...bannerLst} className="">
          {/*============================== Banner1 ====================================*/}

          {sliderdata.map((val) => {
            return (
              <div className="outline-none w-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 w-auto lg:mx-2 mx-4 my-4 bg-[#2B3148]">
                  <div className="p-3 md:py-4 my-auto mx-auto">
                    <h1 className="md:text-3xl text-center xl:text-left text-2xl font-bold text-white md:px-5 md:line-clamp-2 line-clamp-1">
                      {val.name}
                    </h1>
                    <p className="text-xl  text-white md:px-5    text-center xl:text-left md:line-clamp-2 line-clamp-1">
                      {val.name2}
                    </p>

                    <button className="px-5 py-2 mt-5 bg-white text-[#EB4E62] xl:mx-5 block mx-auto mb-auto">
                      Contact us today
                    </button>
                  </div>
                  <div className="py-3 md:py-4">
                    <img
                      src={val.image}
                      alt=""
                      className="md:w-[268px] md:h-72 w-[260px] h-[180px]   xl:ml-auto mx-auto"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/*============================== what can you host ========================================= */}
      <div className="whatYouHost duration-500">
        <div className="container mx-auto">
          <h1 className="md:pt-20 pt-8 text-[#1F253A] md:text-5xl text-2xl text-center font-bold">
            What can you host?
          </h1>
          <p className="lg:px-48 px-2 py-6 lg:text-lg text-[#1F253A] leading-5 text-center">
            As the purveyor of entertainment, BookMyShow enables your event with
            end to end solutions from the time you register to the completion of
            the event. Let’s look at what you can host.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:mx-40">
            {hostdata.map((val, index) => (
              <div
                key={index}
                className="host lg:py-10 md:py-8 my-4 border rounded-md w-[90%] px-5 block m-auto bg-[#ECF5FF] hover:shadow-2xl duration-500"
              >
                <Link to={val.link}>
                  <Link onClick={() => handleItemClick(val)}>
                    <img
                      src={val.img}
                      alt=""
                      className="md:w-[96px] md:h-[80px] w-[50px] h-[50px] block m-auto my-2"
                    />
                    <h1 className="py-2 md:text-2xl font-bold text-center w-full text-[#333333] line-clamp-1">
                      {val.tittle}
                    </h1>
                    <p className="flex justify-center text-3xl text-[#EC5E71]">
                      {val.logo}
                    </p>
                  </Link>
                </Link>
              </div>
            ))}
            {selectedItem && (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-[28rem] p-5">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}

                      <div className="flex items-center justify-center md:py-5 pt-8 border-solid border-blueGray-200 ">
                        <img
                          src={selectedItem.img2}
                          alt=""
                          className="h-14 justify-center "
                        />

                        <button
                          className="text-red-500 absolute -top-2 -right-2 rounded-full bg-white font-bold uppercase p-1 border text-2xl outline-none focus:outline-none ease-linear transition-all duration-150"
                          type="button"
                          onClick={handleCloseModal}
                        >
                          <RxCross1 />
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-2 flex-auto">
                        <h1 className="text-center font-bold md:text-2xl text-xl py-2">
                          {selectedItem.tittle2}
                        </h1>
                        <p className="text-center px-1 py-2 md:text-xl">
                          {selectedItem.des2}
                        </p>
                        <h2 className="text-center md:text-lg  pt-5">
                          {selectedItem.tittle3}
                        </h2>

                        <div className="grid grid-cols-3 my-3 md:mx-5 mx-2">
                          <img
                            src={selectedItem.img3}
                            alt=""
                            className="md:h-[180px] h-[150px] md:w-[120px] w-[100px] block m-auto"
                          />
                          <img
                            src={selectedItem.img3}
                            alt=""
                            className="md:h-[180px] h-[150px] md:w-[120px] w-[100px] block m-auto"
                          />
                          <img
                            src={selectedItem.img3}
                            alt=""
                            className="md:h-[180px] h-[150px] md:w-[120px] w-[100px] block m-auto"
                          />
                        </div>
                      </div>
                      {/*footer*/}
                      <Link
                        to="/doitsignup"
                        target="_blank"
                        className="block m-auto"
                      >
                        <button className="bg-[#EC5E71] mx-20 py-3 my-3 mb-7 px-14 text-white rounded-md font-semibold">
                          List your show
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
              </>
            )}
          </div>
        </div>
      </div>
      <Link to="/doitsignup" target="_blank">
        <button className="block m-auto md:my-10 my-5 bg-[#EC5E71] px-20 py-3 rounded-lg text-white font-semibold">
          List Your Show
        </button>
      </Link>

      {/*======================= What are the Services we offer ==========================*/}
      <div className="servicesOffer duration-500">
        <div className="container mx-auto">
          <h1 className="md:pt-20 pt-8 text-[#1F253A] md:text-5xl text-2xl text-center font-bold">
            What are the Services we offer?
          </h1>
          <p className="lg:px-48 px-2 py-6 lg:text-lg text-[#1F253A] leading-5 text-center">
            After sucessful collabrations with the best event organisers over
            the past decade and a half, we're well equipped to bring your vision
            to life.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:mx-40">
            {servicesofferdata.map((val, index) => {
              return (
                <div
                  key={index}
                  className="host lg:py-10 md:py-8 my-4 border rounded-md w-[90%] p-1 block m-auto bg-[#FCF1F1] hover:shadow-2xl duration-500"
                >
                  <Link to={val.link}>
                    <Link onClick={() => handleItemClick1(val)}>
                      <img
                        src={val.img}
                        alt=""
                        className="md:w-[96px] md:h-[80px] w-[50px] h-[50px] block m-auto my-2"
                      />
                      <h1 className="p-2 md:text-2xl font-bold text-center w-full text-[#333333]  md:line-clamp-1 line-clamp-none">
                        {val.tittle}
                      </h1>
                      <p className="flex justify-center text-3xl py-2 text-[#EC5E71]">
                        {val.logo}
                      </p>
                    </Link>
                  </Link>
                </div>
              );
            })}
            {selectedItem1 && (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-[28rem] p-5">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <button
                        className="text-red-500 absolute -top-2 -right-2 rounded-full bg-white font-bold uppercase p-1 border text-2xl outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleCloseModal1}
                      >
                        <RxCross1 />
                      </button>
                      <div className="flex items-start justify-between py-2  border-solid border-blueGray-200 rounded-t">
                        <img
                          src={selectedItem1.img2}
                          alt=""
                          className="block m-auto h-14"
                        />
                      </div>
                      {/*body*/}
                      <div className="relative p-2 flex-auto">
                        <h1 className="text-center font-bold text-2xl py-2">
                          {selectedItem1.tittle2}
                        </h1>
                        <p className="text-center px-1 py-2 text-xl">
                          {selectedItem1.des2}
                        </p>

                        <h2 className="flex text-lg mx-3 mt-8">
                          <p className="mt-1 text-2xl mx-1">
                            {selectedItem1.logo1}
                          </p>
                          {selectedItem1.text1}
                        </h2>

                        <h2 className="flex text-lg mx-3 py-1">
                          <p className="mt-1 text-2xl mx-1">
                            {selectedItem1.logo2}
                          </p>
                          {selectedItem1.text2}
                        </h2>

                        <h2 className="flex text-lg mx-3 py-1">
                          <p className="mt-1 text-2xl mx-1">
                            {selectedItem1.logo3}
                          </p>
                          {selectedItem1.text3}
                        </h2>

                        <h2 className="flex text-lg mx-3 py-1">
                          <p className="mt-1 text-2xl mx-1">
                            {selectedItem1.logo4}
                          </p>
                          {selectedItem1.text4}
                        </h2>

                        <h2 className="flex text-lg mx-3 py-1">
                          <p className="mt-1 text-2xl mx-1">
                            {selectedItem1.logo5}
                          </p>
                          {selectedItem1.text5}
                        </h2>

                        <span></span>
                      </div>
                      {/*footer*/}
                      <Link
                        to="/doitsignup"
                        target="_blank"
                        className="block m-auto"
                      >
                        <button className="bg-[#EC5E71] mx-20 py-3 my-3 mb-7 px-14 text-white rounded-md font-semibold">
                          List your show
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
              </>
            )}
          </div>
          <p className="md:px-48 px-2 pt-6 md:text-lg text-[#1F253A] font-normal leading-5 text-center">
            Apart form these must haves for any event, we also support a host of
            other services like SEO for your event, custom pricing for your
            tickets and this and also this.
          </p>
          <Link to="/doitsignup" target="_blank" className="block m-auto">
            <button className="block m-auto my-10 bg-[#EC5E71] px-20 py-3 rounded-lg text-white font-semibold">
              List Your Show
            </button>
          </Link>
        </div>
      </div>
      {/*================================ Bootom Content =====================================*/}
      <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold text-center  text-[#1F233A] py-5">
        Sit back and watch your event come to life
      </h1>
      <p className="text-center text-[#1F233A]   mb-20 px-2">
        Events maybe all fun and games, but we take it seriously. We ensure our
        customer’s security so that you don’t have to.
      </p>
    </div>
  );
}
