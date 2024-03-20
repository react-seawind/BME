import React, { useEffect, useState } from "react";
import { FaCalendar, FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

import * as Yup from "yup";

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

const Ticket = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // -----------------------------Add addresspopup-----------------------------
  const [addadd, setaddadd] = useState(false);

  const addclick = () => {
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
    // Remove error message for the field if it exists
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

  return (
    <div className="my-10 mx-auto container px-2 sm:px-6 lg:px-2 ">
      <div className="flex ">
        <h1 className="text-2xl  ">Address Listing</h1>
        <button
          onClick={addclick}
          type=""
          className="bg-themecolor3 py-2 px-5 ml-auto text-white"
        >
          Add +
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
                      <td class="px-6 py-4 w-1/2 text-base">Ahmedabad</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th class="px-6 py-4 w-1/2 ">State </th>
                      <td class="px-6 py-4 w-1/2 text-base">Gujarat</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th class="px-6 py-4 w-1/2 ">language </th>
                      <td class="px-6 py-4 w-1/2 text-base">Hindi / English</td>
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
                      <th class="px-6 py-4 w-1/3 ">Ticket Name </th>
                      <th class="px-6 py-4 w-1/3 ">Ticket Price </th>
                      <th class="px-6 py-4 w-1/3 ">Ticket Quantity </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4 w-1/3 text-base">Gold</td>
                      <td class="px-6 py-4 w-1/3 text-base">500</td>
                      <td class="px-6 py-4 w-1/3 text-base">100</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4 w-1/3 text-base">Silver</td>
                      <td class="px-6 py-4 w-1/3 text-base">1000</td>
                      <td class="px-6 py-4 w-1/3 text-base">100</td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <td class="px-6 py-4 w-1/3 text-base">Dimond</td>
                      <td class="px-6 py-4 w-1/3 text-base">5000</td>
                      <td class="px-6 py-4 w-1/3 text-base">100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex md:justify-end justify-center mt-3">
            <button
              type=""
              className="bg-themecolor2 py-2 px-5 mr-5 flex items-center  text-white"
            >
              Edit <FaEdit className="ml-2" />
            </button>
            <button
              type=""
              className="bg-red-700 py-2 px-5 flex items-center text-white"
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
                          <h1 className="font-semibold py-2">City</h1>
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
                          {errors.city && (
                            <span className="text-red-500">{errors.city}</span>
                          )}
                        </div>
                        <div className="">
                          <h1 className="font-semibold py-2">State</h1>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="border w-full p-2 rounded-sm"
                            placeholder="State"
                          />
                          {errors.state && (
                            <span className="text-red-500">{errors.state}</span>
                          )}
                        </div>
                        <div className="">
                          <h1 className="font-semibold py-2">Event language</h1>
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
                            <span className="text-red-500">{errors.age}</span>
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
                            <option value="">Select Type of Event</option>
                            <option value="Indoor">Indoor</option>
                            <option value="Outdoor">Outdoor</option>
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
                                    errors.Ticketdata[index].tname && (
                                      <span className="text-red-500">
                                        {errors.Ticketdata[index].tname}
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
                                    errors.Ticketdata[index].tamt && (
                                      <span className="text-red-500">
                                        {errors.Ticketdata[index].tamt}
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
                                    errors.Ticketdata[index].tqty && (
                                      <span className="text-red-500">
                                        {errors.Ticketdata[index].tqty}
                                      </span>
                                    )}
                                </div>
                                <div className=" lg:col-span-1 md:col-span-1">
                                  <h1 className="font-semibold py-2">Action</h1>
                                  <button
                                    onClick={(e) => handleDeleteForm(e, index)}
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
                          type="submit"
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
    </div>
  );
};

export default Ticket;
