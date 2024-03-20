import React, { useEffect } from "react";

import profile from "../../Images/user.png";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

const Kyc = () => {
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
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal"
                }
              >
                Profile
              </Link>
            </li>

            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal"
                }
                to={"/BME/stream"}
              >
                Stream Library
              </Link>
            </li>

            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal"
                }
                to={"/BME/your-booking"}
              >
                Your Booking
              </Link>
            </li>

            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal"
                }
                to={"/BME/your-listing"}
              >
                Your Listing
              </Link>
            </li>
            <li className="last:mr-0  text-center border">
              <Link
                className={
                  "text-xs font-bold uppercase px-0 py-4 border-none  block leading-normal"
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
                          <td class="px-6 py-4 w-1/2 text-base">1234567981</td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <th class="px-6 py-4 w-1/2 ">PAN </th>
                          <td class="px-6 py-4 w-1/2 text-base">ABCDE1212H</td>
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
                          <td class="px-6 py-4 w-1/2 text-base">BARBOAFD21</td>
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
  );
};

export default Kyc;
