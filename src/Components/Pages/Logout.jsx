import React from "react";

import profile from "../../Images/user.png";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <div className="w-full container mx-auto">
        <div className="w-full  lg:grid grid-cols-5 my-10 px-3">
          {/*================================ NavPills ======================*/}
          <ul
            className="flex mb-0 list-none  flex-col lg:col-span-1 col-span-2 px-2 py-3"
            role="tablist"
          >
            <li className="last:mr-0  text-center border">
              <Link
                to={"/BME/profile"}
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal text-white bg-themecolor1"
                }
              >
                Profile
              </Link>
            </li>

            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal text-white bg-themecolor1"
                }
                to={"/BME/stream"}
              >
                Stream Library
              </Link>
            </li>

            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal text-white bg-themecolor1"
                }
                to={"/BME/your-booking"}
              >
                Your Booking
              </Link>
            </li>

            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal text-white bg-themecolor1"
                }
                to={"/BME/your-listing"}
              >
                Your Listing
              </Link>
            </li>
            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal text-white bg-themecolor1"
                }
                to={"/BME/list-show"}
              >
                List Show
              </Link>
            </li>
            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal text-white bg-themecolor1"
                }
                to={"/BME/kyc"}
              >
                KYC
              </Link>
            </li>
            <li className="last:mr-0  text-center border">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal "
                }
              >
                log Out
              </a>
            </li>
          </ul>

          {/* ===============================Nav Pilss data ====================================*/}
          <div className="relative flex h-full flex-col min-w-0 break-words  w-full rounded col-span-4 py-3">
            <div className=" flex-auto">
              <div className=" px-2">
                {/* ===============Account Details =============*/}
                <div className="bg-white border p-2">
                  <div className="grid grid-cols-1">
                    <div class="bg-gradient-to-r from-black to-red-800 p-8 relative">
                      <h1 className="text-white text-xl font-bold">
                        Hi, Guest
                      </h1>
                      <div className="absolute top-2 bg-white rounded-full right-3">
                        <div className="p-2">
                          <img src={profile} alt="" className="h-16" />
                        </div>
                      </div>
                    </div>

                    <form className="">
                      <div className="block ">
                        <h1 className="text-lg mt-5 p-2 text-white font-bold bg-themecolor1">
                          Account Details
                        </h1>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
                          <div className="py-2 ">
                            <h1>Name</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border border-gray-400 py-2 px-2 w-full "
                              placeholder="test"
                            />
                          </div>
                          <div className="py-2 ">
                            <h1>Email Address</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border border-gray-400 py-2 px-2 w-full "
                              placeholder="abc@gmail.com"
                            />
                          </div>
                          <div className="py-2 ">
                            <h1>Phone number</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border border-gray-400 py-2 px-2 w-full "
                              placeholder="1324567980"
                            />
                          </div>
                          <div className="py-2 ">
                            <h1>Profile Image</h1>
                            <input
                              type="file"
                              name=""
                              id=""
                              className="border border-gray-400 py-2 px-2 w-full "
                              placeholder="1324567980"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="block">
                        <h1 className="text-lg mt-5 p-2 text-white font-bold bg-themecolor1">
                          Personal Details
                        </h1>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                          <div className="py-2 ">
                            <h1>City</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border border-gray-400 py-2 px-2 w-full "
                              placeholder="City"
                            />
                          </div>
                          <div className="py-2 ">
                            <h1>State</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border border-gray-400 py-2 px-2 w-full "
                              placeholder="State"
                            />
                          </div>
                          <div className="py-2 ">
                            <h1>Pin code</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border border-gray-400 py-2 px-2 w-full "
                              placeholder="Pin code"
                            />
                          </div>
                          <div className="py-2 ">
                            <h1>Password</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border border-gray-400 py-2 px-2 w-full "
                              placeholder="Password"
                            />
                          </div>
                          <div className="py-2 ">
                            <h1>Confirm Password</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border border-gray-400 py-2 px-2 w-full "
                              placeholder="Confirm Password"
                            />
                          </div>
                        </div>
                      </div>
                      <button className="block m-auto bg-themecolor1 text-white p-2 px-16 my-5 rounded-sm">
                        save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
