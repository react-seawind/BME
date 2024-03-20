import React, { useEffect, useState } from "react";

import profile from "../../Images/user.png";
import { Link } from "react-router-dom";
import { FaCalendar, FaEye } from "react-icons/fa";
import TICKET from "../../Images/ticketqr.png";
import { RxCross2 } from "react-icons/rx";
import orderimage from "../../Images/events1.png";

const YourBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // tickitpopup--------------
  const [ticketpopup, setticket] = useState(false);
  const handleProfileClick = () => {
    setticket(true);
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
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal "
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
                        <FaEye
                          className="absolute right-2 top-2 text-2xl cursor-pointer"
                          onClick={handleProfileClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {ticketpopup ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-auto w-96">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start  justify-between p-2 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl  block font-semibold">Ticket</h3>
                  <button
                    className="text-themecolor1 background-transparent font-bold uppercase  text-3xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setticket(false)}
                  >
                    <RxCross2 />
                  </button>
                </div>
                <div className="  p-3 mt-2  relative">
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
                  <p className="pt-2">
                    <span className="bg-green-500 text-white text-sm p-0.5 px-3   rounded mr-2">
                      CONFIRMED
                    </span>
                    | Enjoy the show
                  </p>
                </div>

                <div className="border-t-2 border-black p-3 flex items-center">
                  <img src={TICKET} alt="" className="w-32" />
                  <div className="mx-auto">
                    <p className="text-center">
                      <b>BOOKING ID: </b> <br></br>123123123
                    </p>
                  </div>
                </div>
                <div className="border-t-2 border-black p-3 flex items-center">
                  <p className="text-center mx-auto">
                    Cancellation not available for this venue
                  </p>
                </div>
                <div className="border-t-2 border-black p-3 flex items-center font-bold">
                  <p>Total Amount</p>

                  <p className="ml-auto">Rs. 1041.06</p>
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

export default YourBooking;
