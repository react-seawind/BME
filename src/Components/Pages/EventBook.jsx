import React, { useState } from "react";
import EventBookImg from "../../Images/eventinnerbanner.jpeg";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import Artist1 from "../../Images/artist1.png";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Slider from "react-slick";
import { popularEventsdata } from "../API";

function EventBook() {
  // ==============================About Part=======================================
  const [about, setAbout] = useState(false);

  const toggleAbout = () => {
    setAbout(!about);
  };
  // ==================================Terms and condition================================
  const [termsAcondi, setTermsAcondi] = useState(false);

  const toggletermsAcondi = () => {
    setTermsAcondi(!termsAcondi);
  };

  // ======================================= Location======================================
  const [location, setLocation] = useState(true);

  const toggleLocation = () => {
    setLocation(!location);
  };
  //=======================================You may also like================================

  const popular = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2, // Adjust the number of slides to show at this breakpoint
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
    <div className="bg-gray-100">
      {/*===================================== Banner Part =========================================*/}
      <div className="container  px-5 mx-auto pb-8 ">
        <img
          src={EventBookImg}
          alt=""
          className="block w-full md:h-[450px] object-fill h-[200px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 shadow-md bg-white pb-4">
          <div className="col-span-2">
            <h1 className="text-2xl font-bold py-2 px-4">
              Kirtidan Gadhvi Live Concert - Ahmedabad
            </h1>
            <div className="flex ">
              <p className="border-r border-black ml-3 py-0 px-1">Gujarati</p>
              <p className="border-r border-black px-1 py-0">3hrs</p>
            </div>
          </div>
          <div className="flex justify-end py-2 px-4 md:py-3 md:px-3 -mt-9 md:-mt-0">
            <Link to="/BME/bookingsteps">
              <button className=" bg-themecolor1 px-8 md:py-4 py-1 md:px-14 md:font-semibold rounded-md md:rounded-lg text-lg md:text-xl text-white ">
                Book
              </button>
            </Link>
          </div>
        </div>
        <div className="grid md:flex border-t shadow-md border-gray-400 bg-white py-4 ">
          <h1 className="px-4">Sun 18 Feb 2024 at 6:00 PM</h1>
          <h1 className="flex border-r border-black px-2">
            <FaLocationDot className="text-yellow-400 text-xl mt-1 mx-1" />
            Snapper Film City: Ahmedabad Concerts
          </h1>
          <h1 className="flex px-4">
            <FaRupeeSign className="mt-1" />
            1000 <span className="tetx-xs">onwards</span>
          </h1>
        </div>

        {/*=================================== Artist Data ====================================*/}
        <div className="lg:grid lg:grid-cols-4 lg:gap-4 my-9">
          <div className="w-full ">
            <div className="p-5 bg-white">
              <h1 className="border-b text-lg font-semibold">Artist</h1>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 mx-auto grid-cols-1  ">
                <img
                  src={Artist1}
                  alt=""
                  className="rounded-full w-40 p-3 mx-auto"
                />
                <h1 className="px-5   font-semibold flex justify-center items-center">
                  Kirtidan Gadhvi{" "}
                </h1>
              </div>
            </div>

            <div className="p-3 bg-white mt-5">
              <h1 className="border-b text-lg font-semibold">
                Share this event
              </h1>
              <div className="flex bg-white mt-2">
                <Link>
                  <FaFacebookF className="bg-themecolor1 text-3xl text-white p-1 rounded-full" />
                </Link>
                <Link>
                  <FaXTwitter className="bg-themecolor1 text-3xl text-white p-1 rounded-full mx-2" />
                </Link>
              </div>
            </div>
          </div>

          {/*=================================== Interested Part ====================================*/}

          <div className="-mx-0 col-span-2 md:w-full ">
            <div className="p-5 bg-white mt-5 lg:mt-0">
              <h1 className="font-semibold ">
                Click on Interested to stay updated about this event.
              </h1>
              <div className="grid grid-cols-2">
                <div className="">
                  <h1 className="flex   font-semibold">
                    <BiSolidLike className="text-green-500 text-2xl" />
                    576
                  </h1>
                  <p className="text-xs mt-2">
                    People have show interest recently
                  </p>
                </div>
                <div className="flex ml-auto">
                  <button className="block m-auto text-themecolor1 border border-thtext-themecolor1 rounded-md py-1 px-5">
                    Interested?
                  </button>
                </div>
              </div>
            </div>

            {/*=================================== About Part ====================================*/}

            <h1 className="mt-6 bg-white font-semibold py-3 px-5 border-b text-lg">
              About
            </h1>
            <div className="card bg-white">
              <p className="px-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                numquam quia delectus quo vero quod iusto corrupti illum
                accusamus odit hic ut ab minus eveniet, corporis ullam tempora
                debitis iure. Repellat, molestias
              </p>
              {about && (
                <p className="px-5">
                  sapiente exercitationem odio quia, animi eos distinctio
                  tempora, ipsum hic vitae modi eum nostrum id perspiciatis
                  impedit dolores.
                </p>
              )}

              <button
                onClick={toggleAbout}
                className="text-themecolor1 text-xs px-5 py-3"
              >
                {about ? "Read Less" : "Read More"}
              </button>
            </div>

            {/*========================== Terms & condition Part ===============================*/}

            <div className="card bg-white w-full">
              <button
                onClick={toggletermsAcondi}
                className=" text-base px-5 py-3 flex"
              >
                Terms & Condition
                {termsAcondi ? (
                  <MdKeyboardArrowUp className="mt-1" />
                ) : (
                  <MdKeyboardArrowDown className="mt-1" />
                )}
              </button>
              {termsAcondi && (
                <p className="px-5 text-sm">
                  <li className="py-1">Age Limit: Open to all</li>
                  <li className="py-1">
                    Tickets once booked cannot be exchanged or refunded.
                  </li>
                  <li className="py-1">
                    An Internet handling fee per ticket may be levied. Please
                    check the total amount before payment.{" "}
                  </li>
                  <li className="py-1">
                    We recommend that you arrive at-least 30 minutes prior at
                    the venue for a seamless entry.
                  </li>

                  <h1 className="font-bold py-4">COVID SAFETY GUIDELINES</h1>
                  <li className="py-1">
                    Owing to the recent conditions surrounding the COVID – 19
                    pandemic, as a pre-condition to gaining access to the venue
                    (events and theatres) you are required to be fully
                    vaccinated and may be required to display your COVID – 19
                    certificate at the venue as per the various norms
                    /regulations prevailing in the said State. The venue
                    provider and governing authorities reserve the right to
                    exclude any user from the venue if there are sufficient
                    grounds to believe so for failure to abide by the protocols.
                    You agree to exit without protest or refund. Users are
                    required to check the restrictions as applicable in their
                    State
                  </li>
                  <li className="py-1">
                    Use of masks is mandatory at all times and the visitors are
                    required to maintain social distancing norms. The venue and
                    Bigtree reserve the right to change/modify the terms and
                    conditions.
                  </li>
                  <li className="py-1">
                    Bigtree does not assume any responsibility with regards to
                    any injury or complications due to COVID – 19 accrued as a
                    result of your participation.
                  </li>
                  <li className="py-1">
                    The above guidelines are currently mandatory for Delhi/NCR,
                    Maharashtra and Karnataka. These terms and conditions may
                    vary depending on the state where the event is held and are
                    subject to changes
                  </li>
                </p>
              )}

              {/*=================================== You May Also Liken Part ====================================*/}

              <h1 className="py-2 px-5 font-bold">You May Also Like</h1>
              <Slider {...popular} className="mx-2 md:mx-4">
                {popularEventsdata.map((val, index) => {
                  return (
                    <>
                      <div key={index}>
                        <div className="max-w-sm rounded overflow-hidden mt-3 px-2">
                          <img
                            className="rounded-sm h-[300px] w-full lg:w-full"
                            src={val.img}
                            alt="Sunset in the mountains"
                          />
                          <div className="px-1S py-4">
                            <div className="font-bold text-sm mb-2 text-black">
                              <h1 className="line-clamp-1">{val.tittle}</h1>
                            </div>
                            <p className="text-black text-sm line-clamp-1">
                              {val.des}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>

          {/*========================================= Location Part =================================*/}
          <div className="">
            <h1 className="bg-white font-semibold py-2 px-5">Ahmedabad</h1>
            <div className="card bg-white shadow-md">
              <button
                onClick={toggleLocation}
                className=" text-sm font-semibold flex text-gray-500 px-5 py-1"
              >
                Snapper Film City
                {location ? (
                  <MdKeyboardArrowUp className="mt-1 ml-auto" />
                ) : (
                  <MdKeyboardArrowDown className="mt-1 ml-auto" />
                )}
              </button>
              {location && (
                <p className="px-5">
                  <p className="text-sm text-gray-500">
                    100 Feet Road, Sardar Patel Ring Rd, off New Science City,
                    Ahmedabad, Gujarat 380060
                  </p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.920724867529!2d72.50407637428803!3d23.099997679119532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d30e266f9bd%3A0x8579d8a7d7cb8b74!2sSnapper%20Film%20City!5e0!3m2!1sen!2sin!4v1707220672535!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="w-full py-4"
                  ></iframe>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBook;
