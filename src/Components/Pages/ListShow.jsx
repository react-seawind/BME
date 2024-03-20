import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import {
  FaCalendar,
  FaEdit,
  FaImage,
  FaLaptop,
  FaLocationArrow,
  FaRegTrashAlt,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import * as Yup from "yup";
import { FaLocationDot } from "react-icons/fa6";

const validationSchema = Yup.object().shape({
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  language: Yup.string().required("Language is required"),
  age: Yup.string().required("Age is required"),
  eventtype: Yup.string().required("Event type is required"),
  location: Yup.string().required("Location is required"),
  aname: Yup.string().required("Artist name is required"),
  aimage: Yup.string().required("Artist image is required"),
  Ticketdata: Yup.array().of(
    Yup.object().shape({
      tname: Yup.string().required("Ticket name is required"),
      tamt: Yup.string().required("Ticket amount is required"),
      tqty: Yup.string().required("Ticket quantity is required"),
    })
  ),
});

const ListShow = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // -----------------------------Add addresspopup-----------------------------
  const [addadd, setaddadd] = useState(false);

  const addclick = (e) => {
    e.preventDefault();
    setaddadd(true);
  };

  // --------------------form------------------------
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    city: "",
    state: "",
    language: "",
    age: "",
    eventtype: "",
    location: "",
    aname: "",
    aimage: "",
  });
  const [Ticketdata, setTicketdata] = useState([
    { tname: "", tamt: "", tqty: "" },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };
    delete newErrors[name];
    setErrors(newErrors);

    setFormData({ ...formData, [name]: value });
  };

  const handleticketChange = (index, e) => {
    const { name, value } = e.target;
    const newTickets = [...Ticketdata];
    newTickets[index][name] = value;
    setTicketdata(newTickets);
    setErrors({ ...errors, [name]: undefined }); // Clear errors for the changed field
  };

  const handleAddForm = (e) => {
    e.preventDefault();
    setTicketdata([...Ticketdata, { tname: "", tamt: "", tqty: "" }]);
    setErrors({}); // Clear errors when adding a new form
  };

  const handleDeleteForm = (e, index) => {
    e.preventDefault();
    const newTickets = [...Ticketdata];
    newTickets.splice(index, 1);
    setTicketdata(newTickets);
    setErrors({}); // Clear errors when deleting a form
  };

  const submitFormData = () => {
    // Here, you can submit the form data to your backend or perform any other action
    console.log("Submitting form data:", formData, Ticketdata);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    validationSchema
      .validate({ ...formData, Ticketdata }, { abortEarly: false })
      .then(() => {
        console.log("Form is valid");
        setFormData({
          city: "",
          state: "",
          language: "",
          age: "",
          eventtype: "",
          location: "",
          aname: "",
          aimage: "",
        });
        setTicketdata([{ tname: "", tamt: "", tqty: "" }]);
        setErrors({});
        submitFormData();
      })
      .catch((error) => {
        const validationErrors = {};
        error.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      });
  };

  const preventdefault1 = (e) => {
    e.preventDefault();
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
              <Link
                to={"/BME/profile"}
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal "
                }
              >
                Profile
              </Link>
            </li>

            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal "
                }
                to={"/BME/stream"}
              >
                Stream Library
              </Link>
            </li>

            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal "
                }
                to={"/BME/your-booking"}
              >
                Your Booking
              </Link>
            </li>

            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal "
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
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal "
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
                <div className="bg-white border p-5">
                  <h1 className="text-lg  font-bold pt-0">List Show</h1>

                  <form action="">
                    <div className="container mx-auto ">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="">
                          <h1>
                            Event Name <span className="text-red-600">*</span>
                          </h1>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="w-full border rounded-sm p-2 outline-none"
                            placeholder="Event Name"
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
                          <label
                            for="radio0"
                            className=" bg-white drop-shadow-lg p-5 rounded-lg border border-[#F84464] cursor-pointer"
                          >
                            <input
                              type="radio"
                              id="radio0"
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
                          </label>

                          <label
                            for="radio1"
                            className=" bg-white drop-shadow-lg p-5 rounded-lg border border-sky-400 cursor-pointer"
                          >
                            <input
                              type="radio"
                              id="radio1"
                              name="userdetail"
                              value="No"
                              className="text-gray-600"
                            />
                            <h1 className="bg-gray-100 block m-auto text-6xl w-24 h-24 rounded-full p-5 text-sky-400">
                              <FaLocationArrow />
                            </h1>
                            <h2 className="mt-12 my-3 text-center font-semibold text-lg">
                              On Ground Event{" "}
                            </h2>
                            <h1 className="text-sm text-center text-gray-500">
                              TIcket, market and manges entries to safe events
                              hosted across India
                            </h1>
                          </label>
                        </div>
                      </div>

                      <h1 className="font-semibold py-2">Event Description</h1>
                      <textarea
                        name=""
                        id=""
                        className="border w-full outline-none rounded-md p-2 h-40"
                        placeholder="Enter Event Description*"
                      ></textarea>

                      {/* =========Add Images and Add Videos =================*/}
                      <div className="mt-4">
                        <h1 className="text-lg p-2 py-1  text-white font-bold bg-themecolor1">
                          Image Section
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="py-3">
                            <h1 className=" text-base font-semibold">
                              Add Banner Image
                            </h1>
                            <p className="text-sm text-gray-500 pb-2">
                              (.jpg, .jpeg, .png, .pdf)
                            </p>
                            <div className="border-2 border-dotted border-gray-600 rounded-md text-center pt-7 py-4 cursor-pointer">
                              <h1 className="text-3xl">
                                <FaImage className="block m-auto" />
                              </h1>
                              <h1 className="lg:text-lg px-4 lg:px-0 text-gray-600">
                                Select File here (below 1 MB)
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
                            <h1 className=" text-base font-semibold">
                              Add Thumb Image
                            </h1>
                            <p className="text-sm text-gray-500 pb-2">
                              (.jpg, .jpeg, .png, .pdf)
                            </p>
                            <div className="border-2 border-dotted border-gray-600 rounded-md text-center pt-7 py-4 cursor-pointer">
                              <h1 className="text-3xl">
                                <FaImage className="block m-auto" />
                              </h1>
                              <h1 className="lg:text-lg px-4 lg:px-0 text-gray-600">
                                Select File here (below 1 MB)
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
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                        <div className="">
                          <h1 className="font-semibold py-2">
                            Event Start Time
                          </h1>
                          <input
                            type="datetime-local"
                            name=""
                            id=""
                            className="border w-full p-2 rounded-sm"
                          />
                        </div>
                        <div className="">
                          <h1 className="font-semibold py-2">Event End Time</h1>
                          <input
                            type="datetime-local"
                            name=""
                            id=""
                            className="border w-full p-2 rounded-sm"
                          />
                        </div>
                        <div className="">
                          <h1 className="font-semibold py-2">
                            Select Main Category
                          </h1>
                          <select
                            id="Language"
                            name="Language"
                            class="form-select"
                            className="border w-full p-2 rounded-sm"
                          >
                            <option value="">Select Main Category</option>
                            <option value="Cat1">Cat1</option>
                            <option value="Cat2">Cat2</option>
                          </select>
                        </div>
                        <div className="">
                          <h1 className="font-semibold py-2">
                            Select Sub Category
                          </h1>
                          <select
                            id="Language"
                            name="Language"
                            class="form-select"
                            className="border w-full p-2 rounded-sm"
                          >
                            <option value="">Select Sub Category</option>
                            <option value="Cat1">Cat1</option>
                            <option value="Cat2">Cat2</option>
                          </select>
                        </div>
                      </div>

                      <div className="my-5">
                        <h1 className="text-lg p-2 py-1  text-white font-bold bg-themecolor1">
                          Point Of Contact
                        </h1>
                        <p className="text-sm mt-2">
                          Details of the person managing the event from your
                          end, it could be your or someone on your team. In case
                          we need to get in touch, we know how to reach you.
                        </p>
                        {/*=================== Details =========*/}
                        <div className="grid grid-cols-1 md:grid-cols-3  gap-4 my-2">
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
                    <h1 className="text-lg p-2 py-1 mt-4  text-white font-bold bg-themecolor1">
                      Address Listing
                    </h1>
                    <div className="flex mt-4">
                      <button
                        onClick={addclick}
                        type=""
                        className="bg-themecolor3 py-2 px-5 ml-auto text-white"
                      >
                        Add Address+
                      </button>
                    </div>

                    <div className="grid  gap-4">
                      <div className="shadow-md p-5 border  mt-5">
                        <div className="flex items-center">
                          <p className="m-0">
                            <span className="bg-themecolor1  text-white px-2.5 py-1 rounded-full mr-2">
                              1
                            </span>
                            Location 1
                          </p>
                          <p className="flex  items-center ml-auto">
                            <FaCalendar /> 12-12-1212
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="mt-5">
                            <h1 className="text-lg p-2 py-1  text-white font-bold bg-themecolor1">
                              Location detail
                            </h1>
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th class="px-6 py-4 w-1/2 ">City </th>
                                    <td class="px-6 py-4 w-1/2 text-base">
                                      Ahmedabad
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th class="px-6 py-4 w-1/2 ">State </th>
                                    <td class="px-6 py-4 w-1/2 text-base">
                                      Gujarat
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th class="px-6 py-4 w-1/2 ">language </th>
                                    <td class="px-6 py-4 w-1/2 text-base">
                                      Hindi / English
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th class="px-6 py-4 w-1/2 ">Location</th>
                                    <td class="px-6 py-4 w-1/2 text-base">
                                      <a
                                        href="https://maps.app.goo.gl/wn4crXqnhCoZZXsU7"
                                        target="_blank"
                                        className="flex items-center"
                                      >
                                        <FaLocationDot />
                                        View
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="mt-5">
                            <h1 className="text-lg p-2 py-1  text-white font-bold bg-themecolor1">
                              Ticket detail
                            </h1>
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                                <thead>
                                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                    <th class="px-6 py-4 w-1/3 ">
                                      Ticket Name{" "}
                                    </th>
                                    <th class="px-6 py-4 w-1/3 ">
                                      Ticket Price{" "}
                                    </th>
                                    <th class="px-6 py-4 w-1/3 ">
                                      Ticket Quantity{" "}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4 w-1/3 text-base">
                                      Gold
                                    </td>
                                    <td class="px-6 py-4 w-1/3 text-base">
                                      500
                                    </td>
                                    <td class="px-6 py-4 w-1/3 text-base">
                                      100
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4 w-1/3 text-base">
                                      Silver
                                    </td>
                                    <td class="px-6 py-4 w-1/3 text-base">
                                      1000
                                    </td>
                                    <td class="px-6 py-4 w-1/3 text-base">
                                      100
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td class="px-6 py-4 w-1/3 text-base">
                                      Dimond
                                    </td>
                                    <td class="px-6 py-4 w-1/3 text-base">
                                      5000
                                    </td>
                                    <td class="px-6 py-4 w-1/3 text-base">
                                      100
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div className="flex md:justify-end justify-center mt-3">
                          <button
                            className="bg-themecolor2 py-2 px-5 mr-5 flex items-center  text-white"
                            onClick={preventdefault1}
                          >
                            Edit <FaEdit className="ml-2" />
                          </button>
                          <button
                            className="bg-red-700 py-2 px-5 flex items-center text-white"
                            onClick={preventdefault1}
                          >
                            Delete <FaRegTrashAlt className="ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {addadd ? (
                      <div className="">
                        <div className="mx-5 justify-center items-center flex overflow-x-hidden  overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative  mx-auto ">
                            <div className="border-0 rounded-lg shadow-lg relative  flex flex-col w-full  bg-white px-5 outline-none focus:outline-none">
                              <div className="overflow-auto max-h-[400px] md:max-h-[500px] lg:max-h-[700px]">
                                <div className="flex items-start  justify-between  py-3 border-b border-solid border-blueGray-200 rounded-t">
                                  <h3 className="text-xl  block font-semibold">
                                    ADD ADDRESS
                                  </h3>
                                  <button
                                    className="text-themecolor1 background-transparent font-bold uppercase  text-3xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setaddadd(false)}
                                  >
                                    <RxCross2 />
                                  </button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                  <div>
                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                                      <div className="">
                                        <h1 className="font-semibold py-2">
                                          City
                                        </h1>
                                        <select
                                          id="city"
                                          name="city"
                                          value={formData.city}
                                          onChange={handleChange}
                                          class="form-select"
                                          className="border w-full p-2 rounded-sm"
                                        >
                                          <option value="">Select City</option>
                                          <option value="Abrama">Abrama</option>
                                          <option value="Adalaj">Adalaj</option>
                                          <option value="Ahmedabad">
                                            Ahmedabad
                                          </option>
                                          <option value="Ahwa">Ahwa</option>
                                          <option value="Amod">Amod</option>
                                          <option value="Amreli">Amreli</option>
                                          <option value="Amroli">Amroli</option>
                                          <option value="Anand">Anand</option>
                                          <option value="Anjar">Anjar</option>
                                          <option value="Ankleshwar">
                                            Ankleshwar
                                          </option>
                                          <option value="Babra">Babra</option>
                                          <option value="Bagasara">
                                            Bagasara
                                          </option>
                                          <option value="Bagasra">
                                            Bagasra
                                          </option>
                                        </select>
                                        {errors.city && (
                                          <span className="text-red-500">
                                            {errors.city}
                                          </span>
                                        )}
                                      </div>
                                      <div className="">
                                        <h1 className="font-semibold py-2">
                                          State
                                        </h1>
                                        <input
                                          type="text"
                                          name="state"
                                          value={formData.state}
                                          onChange={handleChange}
                                          className="border w-full p-2 rounded-sm"
                                          placeholder="State"
                                        />
                                        {errors.state && (
                                          <span className="text-red-500">
                                            {errors.state}
                                          </span>
                                        )}
                                      </div>
                                      <div className="">
                                        <h1 className="font-semibold py-2">
                                          Event language
                                        </h1>
                                        <input
                                          type="text"
                                          name="language"
                                          value={formData.language}
                                          onChange={handleChange}
                                          className="border w-full p-2 rounded-sm"
                                          placeholder="Event language"
                                        />
                                        {errors.language && (
                                          <span className="text-red-500">
                                            {errors.language}
                                          </span>
                                        )}
                                      </div>
                                      <div className="">
                                        <h1 className="font-semibold py-2">
                                          Age Restriction
                                        </h1>
                                        <input
                                          type="text"
                                          value={formData.age}
                                          name="age"
                                          onChange={handleChange}
                                          className="border w-full p-2 rounded-sm"
                                          placeholder="Age Restriction"
                                        />
                                        {errors.age && (
                                          <span className="text-red-500">
                                            {errors.age}
                                          </span>
                                        )}
                                      </div>
                                      <div className="">
                                        <h1 className="font-semibold py-2">
                                          Select Type of Event
                                        </h1>
                                        <select
                                          id="type"
                                          name="eventtype"
                                          value={formData.eventtype}
                                          onChange={handleChange}
                                          class="form-select"
                                          className="border w-full p-2 rounded-sm"
                                        >
                                          <option value="">
                                            Select Type of Event
                                          </option>
                                          <option value="Indoor">Indoor</option>
                                          <option value="Outdoor">
                                            Outdoor
                                          </option>
                                        </select>
                                        {errors.eventtype && (
                                          <span className="text-red-500">
                                            {errors.eventtype}
                                          </span>
                                        )}
                                      </div>

                                      <div className="">
                                        <h1 className="font-semibold py-2">
                                          Location Iframe
                                        </h1>
                                        <input
                                          type="text"
                                          name="location"
                                          value={formData.location}
                                          onChange={handleChange}
                                          className="border w-full p-2 rounded-sm"
                                          placeholder="Location Iframe"
                                        />
                                        {errors.location && (
                                          <span className="text-red-500">
                                            {errors.location}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                    <div className="mt-4 my-3">
                                      <h1 className="text-lg p-2 py-1  text-white font-bold bg-themecolor1">
                                        Artist
                                      </h1>

                                      {/*=================== Details =========*/}
                                      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 my-2">
                                        <div className="">
                                          <label for="">Artist Name</label>
                                          <input
                                            type="text"
                                            name="aname"
                                            value={formData.aname}
                                            onChange={handleChange}
                                            placeholder="Artist Name"
                                            className="w-full border outline-none p-2 rounded-sm"
                                          />
                                          {errors.aname && (
                                            <span className="text-red-500">
                                              {errors.aname}
                                            </span>
                                          )}
                                        </div>
                                        <div className="">
                                          <label for="">Artist Image</label>
                                          <input
                                            type="file"
                                            name="aimage"
                                            value={formData.aimage}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            className="block w-full  text-sm text-slate-500 m-auto  border border-[#F84464] bg-[#f7f7f7] rounded-lg
                   file:mr-4 file:py-2.5 file:px-4
                   file:border-0 file:text-sm file:font-semibold
                   file:bg-[#EC5E71] file:text-white
                   cursor-pointer"
                                          />
                                          {errors.aimage && (
                                            <span className="text-red-500">
                                              {errors.aimage}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    {/* ===============ticket ==========*/}
                                    <div className="mt-4 mb-2">
                                      <h1 className="text-lg p-2 py-1 mb-4  text-white font-bold bg-themecolor1">
                                        Tickets
                                      </h1>
                                      <div>
                                        {Ticketdata.map((data, index) => (
                                          <div key={index}>
                                            <div className="grid lg:grid-cols-10 md:grid-cols-7 grid-cols-1 gap-3 border p-2 my-6 relative">
                                              <div className="lg:col-span-3 md:col-span-2">
                                                <h1 className="font-semibold py-2">
                                                  Ticket Name
                                                </h1>
                                                <input
                                                  type="text"
                                                  id={`tname${index}`}
                                                  name="tname"
                                                  value={data.tname}
                                                  onChange={(e) =>
                                                    handleticketChange(index, e)
                                                  }
                                                  className="border w-full p-2 rounded-sm"
                                                  placeholder="Ticket Name"
                                                />
                                                {errors &&
                                                  errors.Ticketdata &&
                                                  errors.Ticketdata[index] &&
                                                  errors.Ticketdata[index]
                                                    .tname && (
                                                    <span className="text-red-500">
                                                      {
                                                        errors.Ticketdata[index]
                                                          .tname
                                                      }
                                                    </span>
                                                  )}
                                              </div>
                                              <div className="lg:col-span-3 md:col-span-2">
                                                <h1 className="font-semibold py-2">
                                                  Ticket Price
                                                </h1>
                                                <input
                                                  type="text"
                                                  id={`tamt${index}`}
                                                  name="tamt"
                                                  value={data.tamt}
                                                  onChange={(e) =>
                                                    handleticketChange(index, e)
                                                  }
                                                  className="border w-full p-2 rounded-sm"
                                                  placeholder="Ticket Price"
                                                />
                                                {errors &&
                                                  errors.Ticketdata &&
                                                  errors.Ticketdata[index] &&
                                                  errors.Ticketdata[index]
                                                    .tamt && (
                                                    <span className="text-red-500">
                                                      {
                                                        errors.Ticketdata[index]
                                                          .tamt
                                                      }
                                                    </span>
                                                  )}
                                              </div>
                                              <div className="lg:col-span-3 md:col-span-2">
                                                <h1 className="font-semibold py-2">
                                                  Ticket Quantity
                                                </h1>
                                                <input
                                                  type="text"
                                                  id={`tqty${index}`}
                                                  name="tqty"
                                                  value={data.tqty}
                                                  onChange={(e) =>
                                                    handleticketChange(index, e)
                                                  }
                                                  className="border w-full p-2 rounded-sm"
                                                  placeholder="Ticket Quantity"
                                                />
                                                {errors &&
                                                  errors.Ticketdata &&
                                                  errors.Ticketdata[index] &&
                                                  errors.Ticketdata[index]
                                                    .tqty && (
                                                    <span className="text-red-500">
                                                      {
                                                        errors.Ticketdata[index]
                                                          .tqty
                                                      }
                                                    </span>
                                                  )}
                                              </div>
                                              <div className=" lg:col-span-1 md:col-span-1">
                                                <h1 className="font-semibold py-2">
                                                  Action
                                                </h1>
                                                <button
                                                  onClick={(e) =>
                                                    handleDeleteForm(e, index)
                                                  }
                                                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                                                >
                                                  Delete
                                                </button>
                                              </div>
                                              <h1 className="absolute bg-themecolor2 text-white px-2 -top-3">
                                                {index + 1}
                                              </h1>
                                            </div>
                                          </div>
                                        ))}

                                        <div className=" mt-3">
                                          <button
                                            onClick={handleAddForm}
                                            className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
                                          >
                                            Add ticket
                                          </button>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex items-start  justify-between px-5 py-3 border-t border-solid border-blueGray-200 rounded-t">
                                      <button
                                        onClick={preventdefault1}
                                        className="bg-themecolor3 text-white px-4 py-2 rounded-md mx-auto"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                      </div>
                    ) : null}

                    <button
                      className="bg-[#EC5E71] block m-auto my-5 text-white font-semibold px-12 p-2 rounded-md"
                      onClick={preventdefault1}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListShow;
