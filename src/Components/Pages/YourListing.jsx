import React, { useEffect, useState } from "react";

import profile from "../../Images/user.png";
import { Link } from "react-router-dom";
import { youlisting } from "../API";
import { FaChevronDown } from "react-icons/fa";

const YourListing = () => {
  const [showMenu, setShowMenu] = useState({});

  const handleMenuToggle = (itemId) => {
    setShowMenu((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <div className="bg-white border p-5">
                  <h1 className="text-lg  p-2 font-bold pt-0">Your Listing</h1>

                  <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse border border-slate-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="border-b-2 border-slate-400">
                          <th
                            scope="col"
                            class="px-6 py-3 border-collapse border border-slate-400"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 border-collapse border border-slate-400"
                          >
                            Image
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 border-collapse border border-slate-400"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            class="px-6 py-3 border-collapse border border-slate-400"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {youlisting.map((val) => {
                          return (
                            <tr class=" border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-slate-300">
                              <th
                                scope="row"
                                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border-collapse border border-slate-400"
                              >
                                {val.title}
                              </th>
                              <td class="px-6 py-4 border-collapse border border-slate-400">
                                <img
                                  src={val.img}
                                  alt=""
                                  className="h-40 w-32"
                                />
                              </td>
                              <td class="px-6 py-4 border-collapse border border-slate-400">
                                <span className="badge bg-green-400 text-white px-2 ">
                                  Active
                                </span>
                              </td>
                              <td className="    px-4 py-2">
                                <div key={val.Id} className="relative">
                                  <button
                                    className="bg-themecolor1 text-white px-4 py-2 rounded-md   flex items-center"
                                    onClick={() => handleMenuToggle(val.Id)}
                                  >
                                    Action <FaChevronDown className="ml-4" />
                                  </button>
                                  {showMenu[val.Id] && (
                                    <div className="absolute z-50 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                      <div className="py-1">
                                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                          View Event
                                        </button>
                                        <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                          Edit
                                        </button>
                                        <Link
                                          to={"/BME/bookingview"}
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        >
                                          View Booking
                                        </Link>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
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
  );
};

export default YourListing;
