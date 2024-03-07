import React from "react";
import { IoIosLaptop } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { MdMonitor } from "react-icons/md";
import LogoImg from "../../Images/logo.png";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-200 ">
        {/*============================================== Content ================================================*/}

        <div className="bg-white py-12 ">
          <h1 className="lg:text-4xl md:text-xl text-xl text-center xl:mx-32 lg:mx-14 md:mx-6 mx-3 font-bold">
            Benefits of using-Do It Yourself our new event management tool
          </h1>

          <div className="flex border-2 border-themecolor1 rounded my-5 xl:mx-32 lg:mx-14 md:mx-6 mx-3 p-2">
            <div className="text-7xl my-auto">
              <IoIosLaptop className="" />
            </div>
            <div className="mx-8 my-auto">
              <h1 className="text-2xl font-bold">Qucik & easy registration</h1>
              <p className=" ">
                complete your registration with just your PAN card and bank
                details
              </p>
            </div>
          </div>

          <div className="flex border-2 border-themecolor1 rounded my-5  xl:mx-32 lg:mx-14 md:mx-6 mx-3 p-2">
            <div className="text-7xl my-auto">
              <GoClock className="" />
            </div>
            <div className="mx-8 my-auto">
              <h1 className="text-2xl font-bold">
                Take your events live superfast!
              </h1>
              <p className=" ">
                Publish your event within just 15 minutes! Add event details,
                dates and ticket and BAM! Your evnet is ready
              </p>
            </div>
          </div>

          <div className="flex border-2 border-themecolor1 rounded my-5  xl:mx-32 lg:mx-14 md:mx-6 mx-3 p-2">
            <div className="text-7xl my-auto">
              <MdMonitor className="" />
            </div>
            <div className="mx-8 my-auto">
              <h1 className="text-2xl font-bold">
                Monitor analytics & insights
              </h1>
              <p className=" ">
                Track event sales, daily ticketing, get daily insights and more
                in real time.
              </p>
            </div>
          </div>
        </div>

        {/*========================= Form Part====================================== */}

        <div className="py-12 my-auto ">
          <div className=" shadow[0px 3px 10px -3px] border-2 border-themecolor1 xl:mx-72 surface:mx-28  mx-5 rounded-3xl bg-white py-5   px-3">
            <img src={LogoImg} alt="" className="p-2 w-[30%] mx-auto mb-10" />

            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Enter your mobile no"
              className="outline-none py-2 px-2 mb-4 w-full rounded-md border bg-slate-100"
            />
            <input
              type="tel"
              required
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Enter your Password"
              className="outline-none py-2 px-2  w-full rounded-md border bg-slate-100"
            />

            <div className="grid grid-cols-1 gap-2 ">
              <Link
                to={"/doitotp"}
                className="py-2 bg-[#3E6EEA]  text-white text-center font-bold rounded-md mt-6 "
              >
                Procced
              </Link>
            </div>

            <div className="text-center mt-10">
              <p>
                <Link to={"/doitsignin"} className="text-[#3E6EEA] font-bold">
                  Login with OTP
                </Link>
              </p>
              <p>
                <Link
                  to={"/doitsignin/forgotpass"}
                  className="text-[#3E6EEA] font-bold"
                >
                  Forgot Password
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
