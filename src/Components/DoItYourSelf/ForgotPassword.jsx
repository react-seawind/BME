import React, { useEffect } from "react";
import { IoIosLaptop } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { MdMonitor } from "react-icons/md";
import LogoImg from "../../Images/newlogo.png";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-gray-200 ">
        {/*============================================== Content ================================================*/}

        <div className="bg-white py-12">
          <h1 className="lg:text-4xl md:text-xl text-xl text-center xl:mx-32 lg:mx-14 md:mx-6 mx-3 font-bold">
            Benefits of using-Do It Yourself our new event management tool
          </h1>

          <div className="flex shadow-lg rounded my-5 xl:mx-32 lg:mx-14 md:mx-6 mx-3 p-4">
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

          <div className="flex shadow-lg rounded my-5  xl:mx-32 lg:mx-14 md:mx-6 mx-3 p-4">
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

          <div className="flex shadow-lg rounded my-5  xl:mx-32 lg:mx-14 md:mx-6 mx-3 p-4">
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
        {/*============================================ Form Part=================================================== */}

        <div className="py-12 my-auto ">
          <div className=" shadow[0px 3px 10px -3px] border-2 border-themecolor1 xl:mx-72 surface:mx-28  mx-5 rounded-xl bg-white py-5   px-3">
            <img src={LogoImg} alt="" className="p-2 w-[30%] mx-auto mb-10" />

            <label for="phone">Enter Email Address</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Enter Email Address"
              className="outline-none py-2 px-2  w-full rounded-md border bg-slate-100 mt-2"
            />

            <div className="grid grid-cols-2 gap-2 ">
              <Link
                to={"/BME/doitsignin"}
                className="py-2 bg-[#3E6EEA]  text-white text-center  font-bold rounded-md mt-6 "
              >
                Back
              </Link>
              <Link className="py-2 bg-[#3E6EEA]  text-white text-center font-bold rounded-md mt-6 ">
                Submit
              </Link>
            </div>

            <div className="text-center mt-10">
              <p>
                Already Have Account ?{" "}
                <Link
                  to={"/BME/doitsignin"}
                  className="text-[#3E6EEA] font-bold"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
