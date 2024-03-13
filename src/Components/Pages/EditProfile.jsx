import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { healty, youlisting } from "../API";
import profile from "../../Images/user.png";
import orderimage from "../../Images/events1.png";
import { Link } from "react-router-dom";
import {
  FaCalendar,
  FaDownload,
  FaEdit,
  FaEye,
  FaImage,
  FaLaptop,
  FaLocationArrow,
  FaVideo,
} from "react-icons/fa";

function EditProfile() {
  const [openTab, setOpenTab] = React.useState(1);
  const [showhide1, setShowhide1] = React.useState("");
  const handleshow1 = (e) => {
    const getshow1 = e.target.value;
    setShowhide1(getshow1);
  };
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
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-themecolor1"
                    : " bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>

            <li className="last:mr-0  text-center border">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-4 border border-none  block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-themecolor1"
                    : " bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Stream Library
              </a>
            </li>

            <li className="last:mr-0  text-center border">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-themecolor1"
                    : " bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Your Orders
              </a>
            </li>

            <li className="last:mr-0  text-center border">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-themecolor1"
                    : " bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                Your Listing
              </a>
            </li>
            <li className="last:mr-0  text-center border">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal " +
                  (openTab === 6
                    ? "text-white bg-themecolor1"
                    : " bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                List Show
              </a>
            </li>
            <li className="last:mr-0  text-center border">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal " +
                  (openTab === 7
                    ? "text-white bg-themecolor1"
                    : " bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                KYC
              </a>
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
              <div className="tab-content tab-space px-2">
                {/*================= Tab 1 ==================*/}
                <div className={openTab === 1 ? "block " : "hidden"} id="link1">
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

                {/*================= Tab 2 ==================*/}
                <div className={openTab === 2 ? "block " : "hidden"} id="link2">
                  <div className="text-center bg-white border p-2">
                    <h1 className="font-semibold">
                      Start making your collection
                    </h1>
                    <p className="    py-4">
                      Find movie you like, relax and enjoy watching them on your
                      phone or TV App.
                    </p>
                    <div className="mb-5">
                      <Link
                        to={"/BME/event"}
                        className="bg-[#EB4E62]  text-white p-2 rounded-lg"
                      >
                        Explore Events
                      </Link>
                    </div>
                  </div>
                </div>

                {/*================= Tab 4 ==================*/}
                <div className={openTab === 4 ? "block " : "hidden"} id="link2">
                  {/*================================ NavPills ======================*/}
                  <div className="">
                    <div className="bg-white border p-2">
                      <h1 className="text-lg  p-2  text-white font-bold bg-themecolor1">
                        Your Order
                      </h1>

                      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                        <div className=" bg-slate-200 p-3 mt-2 border relative">
                          <div className="grid grid-cols-5">
                            <div className="col-span-1">
                              <img src={orderimage} alt="" />
                            </div>
                            <div className="col-span-4 ml-3">
                              <p className="font-bold">Kirtidan gadhvi</p>
                              <p className="flex items-center font-bold">
                                <FaCalendar />
                                12-12-1212
                              </p>
                              <p>
                                <b>Venue: </b>Location Name
                              </p>
                              <p>
                                <b>1</b> Ticket
                              </p>
                            </div>
                          </div>
                          <p className="border-t-2 border-black pt-2">
                            <span className="bg-green-500 text-white text-sm p-0.5   rounded mr-2">
                              CONFIRMED
                            </span>
                            | Enjoy the show
                          </p>
                          <FaEye className="absolute right-2 top-2 text-2xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*================= Tab 5 ==================*/}
                <div className={openTab === 5 ? "block " : "hidden"} id="link5">
                  <div className="bg-white border p-5">
                    <h1 className="text-lg  p-2 font-bold pt-0">
                      Your Listing
                    </h1>
                    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-5 ">
                      {youlisting.map((val, index) => {
                        return (
                          <div
                            className="bg-white lg:p-4 p-2 rounded-lg drop-shadow-md"
                            key={index}
                          >
                            <div className="relative">
                              <img
                                src={val.img}
                                alt=""
                                className="xl:h-96 lg:h-80 surface:h-80 rounded-md h-72 md:h-60 w-full "
                              />
                              <FaEdit className="absolute top-2 text-4xl p-1 rounded-lg  right-2 bg-white" />

                              <div
                                id="tooltip-default"
                                role="tooltip"
                                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                              >
                                Tooltip content
                                <div
                                  class="tooltip-arrow"
                                  data-popper-arrow
                                ></div>
                              </div>
                            </div>
                            <h1 className="lg:text-xl md:text-lg font-medium py-2">
                              {val.title}
                            </h1>

                            <div className="grid md:grid-cols-2 grid-cols-1 mb-2  gap-3">
                              <Link
                                to={"/BME/eventbook"}
                                className="  bg-themecolor1 w-full text-center   rounded-md text-white font-semibold py-2 px-5"
                              >
                                View
                              </Link>
                              <Link className="  bg-themecolor1 w-full text-center   rounded-md text-white font-semibold py-2 px-5">
                                Delete
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/*================= Tab 6 ==================*/}
                <div className={openTab === 6 ? "block " : "hidden"} id="link6">
                  <div className="bg-white border p-5">
                    <h1 className="text-lg  p-2 font-bold pt-0">List Show</h1>

                    <form action="">
                      <div className="container mx-auto ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="">
                            <h1>
                              Name <span className="text-red-600">*</span>
                            </h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="w-full border rounded-sm p-2 outline-none"
                              placeholder="Name"
                            />
                          </div>
                          <div className="">
                            <h1>
                              Email <span className="text-red-600">*</span>
                            </h1>
                            <input
                              type="email"
                              name=""
                              id=""
                              className="w-full border rounded-sm p-2 outline-none"
                              placeholder="Email"
                            />
                          </div>
                          <div className="">
                            <h1>
                              Your event's Organiser{" "}
                              <span className="text-red-600">*</span>
                            </h1>
                            <input
                              type="email"
                              name=""
                              id=""
                              className="w-full border rounded-sm p-2 outline-none"
                              placeholder="Your event's Organiser"
                            />
                          </div>
                          <div>
                            <h1 className="">
                              Registered Company Name/Brand Name
                            </h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="w-full border outline-none p-2 rounded-sm "
                              placeholder="Your Company Name"
                            />
                          </div>
                        </div>

                        {/* ===============What type of event do you want to create today? ==========*/}
                        <div className="WhatTypeOfEvent">
                          <h1 className="text-center py-3 text-2xl font-semibold">
                            What type of event do you want to create today?
                          </h1>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
                            <div className=" bg-white drop-shadow-lg p-5 rounded-lg border border-[#F84464]">
                              <input
                                type="radio"
                                name="userdetail"
                                value="yes"
                                className="text-gray-600"
                              />
                              <h1 className="bg-gray-100 block m-auto text-6xl w-24 h-24 rounded-full p-5 text-[#F84464]">
                                <FaLaptop />
                              </h1>
                              <h2 className="mt-12 my-3 text-center font-semibold text-lg">
                                Digital Event
                              </h2>
                              <h1 className="text-sm text-center text-gray-500">
                                Creted and tickets engaging digital events using
                                streams or pre recoreded videos
                              </h1>
                            </div>

                            <div className=" bg-white drop-shadow-lg p-5 rounded-lg border border-sky-400">
                              <input
                                type="radio"
                                name="userdetail"
                                value="No"
                                className="text-gray-600"
                              />
                              <h1 className="bg-gray-100 block m-auto text-6xl w-24 h-24 rounded-full p-5 text-sky-400">
                                <FaLocationArrow />
                              </h1>
                              <h2 className="mt-12 my-3 text-center font-semibold text-lg">
                                On Ground Evnet
                              </h2>
                              <h1 className="text-sm text-center text-gray-500">
                                TIcket, market and manges entries to safe events
                                hosted across India
                              </h1>
                            </div>
                          </div>
                        </div>

                        {/* ===========Create an event============= */}
                        <div className="">
                          <h1 className="text-2xl text-center font-semibold py-2">
                            Create an event
                          </h1>

                          <div class="flex items-center justify-center w-full">
                            <label
                              for="dropzone-file"
                              class="flex flex-col items-center justify-center    w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white"
                            >
                              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <h1 className="text-3xl text-gray-600">
                                  <FaImage />
                                </h1>
                                <h1 className="text-center px-5 md:text-base font-semibold text-sm">
                                  Add an image for your event
                                </h1>
                                <h1 className="text-center px-5 md:text-sm text-gray-500 text-sm py-2">
                                  (Recommended size - 840 X 460 px)
                                </h1>
                                <h1 className="text-[#EC5E71] font-semibold rounded-md ">
                                  Upload Image
                                </h1>
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                class="hidden"
                              />
                            </label>
                          </div>
                        </div>

                        <h1 className="font-semibold py-2">
                          Evnet Description
                        </h1>
                        <textarea
                          name=""
                          id=""
                          className="border w-full outline-none rounded-md p-2 h-40"
                          placeholder="Enter Event Description*"
                        ></textarea>

                        {/* =========Add Images and Add Videos =================*/}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="py-3">
                            <h1 className=" text-xl font-semibold">
                              Add Images
                            </h1>
                            <p className="text-sm text-gray-500 pb-2">
                              (.jpg, .jpeg, .png, .pdf)
                            </p>
                            <div className="border-2 border-dotted border-gray-600 rounded-md text-center pt-7 py-4 cursor-pointer">
                              <h1 className="text-3xl">
                                <FaImage className="block m-auto" />
                              </h1>
                              <h1 className="lg:text-lg px-4 lg:px-0 text-gray-600">
                                Select File here (1MB File Size Limit)
                              </h1>
                              <input
                                type="file"
                                class="block w-56 lg:w-80 text-sm text-slate-500 m-auto my-5 border border-[#F84464] bg-[#f7f7f7] rounded-lg
                  file:mr-4 file:py-3 file:px-4
                  file:border-0 file:text-sm file:font-semibold
                  file:bg-[#EC5E71] file:text-white
                  cursor-pointer"
                              />
                            </div>
                          </div>

                          <div className="py-3">
                            <h1 className=" text-xl font-semibold">
                              Add Videos
                            </h1>
                            <p className="text-sm text-gray-500 pb-2">
                              (.mp4, .mp3)
                            </p>
                            <div className="border-2 border-dotted border-gray-600 rounded-md text-center pt-7 py-4 cursor-pointer">
                              <h1 className="text-3xl">
                                <FaVideo className="block m-auto" />
                              </h1>
                              <h1 className="lg:text-lg px-4 lg:px-0 text-gray-600">
                                Select File here (2MB File Size Limit)
                              </h1>
                              <input
                                type="file"
                                class="block m-auto w-56 lg:w-80 text-sm text-slate-500 my-5 border border-[#F84464] bg-[#f7f7f7] rounded-lg
                  file:mr-4 file:py-3 file:px-4
                  file:border-0 file:text-sm file:font-semibold
                  file:bg-[#EC5E71] file:text-white
                  cursor-pointer"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                          <div className="">
                            <h1 className="font-semibold py-2">
                              Evnet Start Time
                            </h1>
                            <input
                              type="datetime-local"
                              name=""
                              id=""
                              className="border w-full p-2 rounded-sm"
                            />
                          </div>
                          <div className="">
                            <h1 className="font-semibold py-2">
                              Evnet End Time
                            </h1>
                            <input
                              type="datetime-local"
                              name=""
                              id=""
                              className="border w-full p-2 rounded-sm"
                            />
                          </div>

                          <div className="">
                            <h1 className="font-semibold py-2">City</h1>
                            <select
                              id="city"
                              name="city"
                              class="form-select"
                              className="border w-full p-2 rounded-sm"
                            >
                              <option value="">Select City</option>
                              <option value="Abrama">Abrama</option>
                              <option value="Adalaj">Adalaj</option>
                              <option value="Ahmedabad">Ahmedabad</option>
                              <option value="Ahwa">Ahwa</option>
                              <option value="Amod">Amod</option>
                              <option value="Amreli">Amreli</option>
                              <option value="Amroli">Amroli</option>
                              <option value="Anand">Anand</option>
                              <option value="Anjar">Anjar</option>
                              <option value="Ankleshwar">Ankleshwar</option>
                              <option value="Babra">Babra</option>
                              <option value="Bagasara">Bagasara</option>
                              <option value="Bagasra">Bagasra</option>
                            </select>
                          </div>
                          {/* ===================Yes OR No =========================*/}
                          <div className="">
                            <h1 className="font-semibold py-2">
                              Is Venue Decided?
                            </h1>
                            <div className="col-md-12 mt-3">
                              <div className="text-black">
                                <form action="">
                                  <input
                                    type="radio"
                                    name="userdetail"
                                    value="yes"
                                    onClick={handleshow1}
                                    className="text-gray-600"
                                  />
                                  <label htmlFor="" className="px-2">
                                    Yes
                                  </label>

                                  <input
                                    type="radio"
                                    name="userdetail"
                                    value="no"
                                    checked={showhide1 === "no"}
                                    onClick={handleshow1}
                                    className=""
                                  />
                                  <label htmlFor="" className="px-2">
                                    No
                                  </label>
                                </form>
                              </div>
                              {showhide1 === "yes" && (
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder="Enter Location"
                                  className="border w-full p-2 mt-3 rounded-sm"
                                />
                              )}
                            </div>
                          </div>

                          <div className="">
                            <h1 className="font-semibold py-2">Organiser</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border w-full p-2 rounded-sm"
                              placeholder="Your event's Organiser"
                            />
                          </div>

                          <div className="">
                            <h1 className="font-semibold py-2">Group</h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border w-full p-2 rounded-sm"
                              placeholder=""
                            />
                          </div>

                          <div className="">
                            <h1 className="font-semibold py-2">
                              GSTIN(Optional)
                            </h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border w-full p-2 rounded-sm"
                              placeholder="Your GSTIN"
                            />
                          </div>

                          <div className="">
                            <h1 className="font-semibold py-2">
                              Category/Genre
                            </h1>
                            <input
                              type="text"
                              name=""
                              id=""
                              className="border w-full p-2 rounded-sm"
                              placeholder="Your GSTIN"
                            />
                          </div>
                        </div>

                        <h1 className="font-semibold py-2">Point Of Contrat</h1>
                        <p className="text-sm">
                          Details of the person managing the event from your
                          end, it could be your or someone on your team. In case
                          we need to get in touch, we know how to reach you.
                        </p>
                        {/*=================== Details =========*/}
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-10 gap-4 my-2">
                          <div className="">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Name"
                              className="w-full border outline-none p-2 rounded-sm"
                            />
                          </div>
                          <div className="">
                            <input
                              type="email"
                              name=""
                              id=""
                              placeholder="Email"
                              className="w-full border outline-none p-2 rounded-sm"
                            />
                          </div>
                          <div className="">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Phone"
                              className="w-full border outline-none p-2 rounded-sm"
                            />
                          </div>
                        </div>

                        {/* =====Healthy and Safety Precautions ===========*/}

                        <h1 className="font-semibold py-2">
                          Healthy and Safety Precautions
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <h1 className="px-2">Social Distancing</h1>
                          </div>
                          <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <h1 className="px-2">Social Distancing</h1>
                          </div>
                          <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <h1 className="px-2">Social Distancing</h1>
                          </div>
                          <div className="flex">
                            <input type="checkbox" name="" id="" />
                            <h1 className="px-2">Social Distancing</h1>
                          </div>
                        </div>
                      </div>

                      <button className="bg-[#EC5E71] block m-auto my-5 text-white font-semibold px-12 p-2 rounded-md">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>

                {/*================= Tab 6 ==================*/}
                <div className={openTab === 7 ? "block " : "hidden"} id="link7">
                  <div className="bg-white border p-5">
                    <div className="flex mb-2">
                      <h1 className="text-lg  p-2 pt-0">My KYC</h1>
                      <Link
                        to={"/BME/kyc-1"}
                        className="block ms-auto bg-themecolor2  rounded-md text-white font-semibold py-2 px-5"
                      >
                        Edit
                      </Link>
                    </div>
                    <h1 className="bg-[#FFF3CD] border border-[#FFECB5] px-5 py-4 rounded-lg text-[#664D03] font-medium lg:mx-0">
                      Your KYC status is Pending
                    </h1>

                    {/*------------------GENERAL INFORMATION------------------*/}
                    <h1 className="text-lg  p-2 mt-4 text-white font-bold bg-themecolor1">
                      General Informmation
                    </h1>

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">GSTIN </th>
                            <td class="px-6 py-4 w-1/2 text-base">
                              1234567981
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">PAN </th>
                            <td class="px-6 py-4 w-1/2 text-base">
                              ABCDE1212H
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">
                              Registered Company Name{" "}
                            </th>
                            <td class="px-6 py-4 w-1/2 text-base">Test</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">
                              Registered Company Address{" "}
                            </th>
                            <td class="px-6 py-4 w-1/2 text-base">Test</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">State </th>
                            <td class="px-6 py-4 w-1/2 text-base">Gujarat</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">Contact No </th>
                            <td class="px-6 py-4 w-1/2 text-base">12345612</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">Email </th>
                            <td class="px-6 py-4 w-1/2 text-base">Gujarat</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/*------------------GENERAL INFORMATION------------------*/}
                    <h1 className="text-lg  p-2 mt-4 text-white font-bold bg-themecolor1">
                      Bank Account Details
                    </h1>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">Account Type </th>
                            <td class="px-6 py-4 w-1/2 text-base">Saving</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">Beneficiary Names </th>
                            <td class="px-6 py-4 w-1/2 text-base">Test</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">Account Number </th>
                            <td class="px-6 py-4 w-1/2 text-base">123231321</td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">IFSC </th>
                            <td class="px-6 py-4 w-1/2 text-base">
                              BARBOAFD21
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/*------------------Documnet------------------*/}
                    <h1 className="text-lg  p-2 mt-4 text-white font-bold bg-themecolor1">
                      Bank Account Details
                    </h1>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">Pan </th>
                            <td class="px-6 py-4 w-1/2 text-base">
                              <a
                                href="javascript:void(0)"
                                className="flex items-center"
                              >
                                <FaDownload className="mr-2" />
                                Download
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">Cancelled Cheque </th>
                            <td class="px-6 py-4 w-1/2 text-base">
                              <a
                                href="javascript:void(0)"
                                className="flex items-center"
                              >
                                <FaDownload className="mr-2" />
                                Download
                              </a>
                            </td>
                          </tr>
                          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th class="px-6 py-4 w-1/2 ">Agreement </th>
                            <td class="px-6 py-4 w-1/2 text-base">
                              <a
                                href="javascript:void(0)"
                                className="flex items-center"
                              >
                                <FaDownload className="mr-2" />
                                Download
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
