import React from "react";
import { GiBarracksTent } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoTicketOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const eventincitiesdata = [
    { des: "Events in Mumbai", link: "/BME/event" },
    { des: "Events in Delhi-NCR", link: "/BME/event" },
    { des: "Events in Chennai", link: "/BME/event" },
    { des: "Events in Bengaluru", link: "/BME/event" },
    { des: "Events in Hyderabad", link: "/BME/event" },
    { des: "Events in Pune", link: "/BME/event" },
    { des: "Events in Ahmedabad", link: "/BME/event" },
    { des: "Events in Kolkata", link: "/BME/event" },
    { des: "Events in Kochi", link: "/BME/event" },
  ];

  const countriesdata = [
    { des: "Indonesia", link: "" },
    { des: "Singapore", link: "" },
    { des: "UAE", link: "" },
    { des: "Sri Lanka", link: "" },
    { des: "West Indies", link: "" },
  ];

  const helpdata = [
    { des: "About Us", link: "/BME/about" },
    { des: "Contact Us", link: "/BME/contact" },
    { des: "Current Opening", link: "" },
    { des: "Press Release", link: "" },
    { des: "Press Coverage", link: "" },
    { des: "Sitemap", link: "" },
    { des: "FAQS", link: "/BME/faq" },
    { des: "Terms and Conditions", link: "" },
    { des: "Privacy Policy", link: "" },
  ];
  return (
    <div className="mb-16 lg:mb-0">
      {/* ===============================Footer ==================================*/}
      <footer className="lg:list-item bg-[#333338]">
        <div className="container mx-auto lg:flex ">
          {/*=========================== List Your Shows================================ */}

          <div className=" py-6 lg:flex text-center">
            <GiBarracksTent className="text-white text-2xl mx-auto" />
            <h1 className="mx-3 md:mx-2 lg:mx-3 mt-1 font-bold text-white">
              List your Show
            </h1>
            <p className="mt-1 text-white px-3">
              Got a show, event, activity or a great experience? Parter with us
              & get listed on BookMyEvent{" "}
            </p>
          </div>
          <div className="lg:ml-auto lg:mx-0 flex justify-center lg:block">
            <button className="bg-themecolor1 text-white my-5   py-2 px-3   rounded-lg">
              Contact today
            </button>
          </div>
        </div>
        {/*===================================== Customer=================================== */}
        <section className="  bg-[#404043] py-5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-16">
              <div className="part1 hover:text-white text-[#A5A5A5]">
                <Link>
                  <RiCustomerService2Line className="text-5xl block m-auto " />
                  <h1 className="text-center text-sm">24/7 CUSTOMER CARE</h1>
                </Link>
              </div>

              <div className="part1 hover:text-white text-[#A5A5A5]">
                <Link>
                  <IoTicketOutline className="text-5xl m-auto" />
                  <h1 className="text-center text-sm">
                    RESEND BOOKING CONFIRMATION
                  </h1>
                </Link>
              </div>

              <div className="part1 hover:text-white text-[#A5A5A5]">
                <Link>
                  <IoMailOutline className="text-5xl block m-auto" />
                  <h1 className="text-center text-sm">
                    SUBSCRIBE TO THE NEWSLETTER
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3 container mx-auto">
          {/*================================EVENTS In Top cities=========================== */}
          <div className="container mx-auto mt-6 lg:mt-0">
            <h1 className="text-sm lg:my-6 lg:px-0 md:px-4 px-2 font-semibold text-[#A5A5A5]">
              EVENTS IN TOP CITIES
            </h1>
            <div className="grid lg:flex my-2">
              {eventincitiesdata.map((val, index) => {
                return (
                  <div key={index}>
                    <a
                      href={val.link}
                      className="mx-2 md:mx-4 lg:mx-0 border-l border-[#7F7F7F] text-[#7F7F7F] px-1 lg:px-1 text-sm hover:text-white"
                    >
                      {val.des}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/*================================Countries=========================== */}
          <div className="container mx-auto mt-5 lg:mt-0">
            <h1 className="my-2 text-sm lg:px-0 md:px-4 px-2 font-semibold text-[#A5A5A5]">
              COUNTRIES
            </h1>
            <div className="grid lg:flex my-2">
              {countriesdata.map((val, index) => {
                return (
                  <div key={index}>
                    <a
                      href={val.link}
                      className="mx-2 md:mx-4 lg:mx-0 border-l border-[#7F7F7F] text-[#7F7F7F] pl-1 lg:px-1 text-sm hover:text-white"
                    >
                      {val.des}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/*================================Help=========================== */}
          <div className="container mx-auto mt-5 lg:mt-0">
            <h1 className="my-2 text-sm lg:px-0 md:px-4 px-2 font-semibold text-[#A5A5A5]">
              Help
            </h1>
            <div className="grid lg:flex my-2">
              {helpdata.map((val, index) => {
                return (
                  <div key={index}>
                    <a
                      href={val.link}
                      className="mx-2 md:mx-4 lg:mx-0 border-l border-[#7F7F7F] text-[#7F7F7F] px-1 lg:px-1 text-sm hover:text-white"
                    >
                      {val.des}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-b border-[#666666] pt-10"></div>

        <div className="social flex mt-8 justify-center pb-8 ">
          <Link>
            <FaFacebookF className="mx-1 bg-[#666666] hover:bg-white text-4xl p-2 rounded-full" />
          </Link>
          <Link>
            <FaXTwitter className="mx-1 bg-[#666666] hover:bg-white text-4xl p-2 rounded-full" />
          </Link>
          <Link>
            <FaInstagram className="mx-1 bg-[#666666] hover:bg-white text-4xl p-2 rounded-full" />
          </Link>
          <Link>
            <FaYoutube className="mx-1 bg-[#666666] hover:bg-white text-4xl p-2 rounded-full" />
          </Link>
          <Link>
            <FaPinterestP className="mx-1 bg-[#666666] hover:bg-white text-4xl p-2 rounded-full" />
          </Link>
          <Link>
            <FaLinkedinIn className="mx-1 bg-[#666666] hover:bg-white text-4xl p-2 rounded-full" />
          </Link>
        </div>
        <div className="text-center pb-8 text-white">
          © Book My Event Design and Develop By {"  "}
          <Link
            to={"www.seawindsolution.com"}
            className="text-themecolor1"
            target="_blank"
          >
            Seawind Solution Pvt. Ltd.
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
