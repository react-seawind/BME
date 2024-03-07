import React from "react";
import "./Offers.css";
import { MdLaptop } from "react-icons/md";
import { ImMobile2 } from "react-icons/im";
import { CiCreditCard1 } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";
import { IoWalletOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { FaGooglePay, FaSearch } from "react-icons/fa";
import {
  bookmyeventdata,
  creditcarddata,
  debitcarddata,
  paylaterdata,
  rewardsdata,
  walletdata,
} from "../API";
import { Link } from "react-router-dom";

const Offers = () => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <div>
      {/*================================================== Search Bar======================================== */}
      <div className="container mx-auto mt-4 ">
        <input
          type="text"
          className="border-2 p-2 mx-3 w-80 rounded-md"
          placeholder="Search"
        />
      </div>

      {/*================================================Filter Navpills =======================================*/}
      <div className="container  mx-auto">
        <h1 className=" text-[#666666] text-xl font-normal text-center pt-10">
          FILTER OFFERS BY
        </h1>
        <div className=" ">
          <div className="m-auto">
            <ul
              className="container grid grid-cols-6 mb-0 list-none  flex-wrap pt-3 pb-4 flex-row ml-auto mr-auto"
              role="tablist"
            >
              {/* ===============================Credit Card ===================================*/}
              <li className="  justify-center   text-center">
                <a
                  className={
                    "text-xs font-semibold hover:text-[#EB4E62] text-center px-0 py-3 rounded block m-auto leading-normal "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <CiCreditCard1 className="block m-auto text-6xl border text-gray-500 py-3 rounded-lg border-gray-300 hover:text-white hover:border-0 hover:bg-[#EB4E62] mb-2" />
                  Credit Card
                </a>
              </li>

              {/* ===============================Debit card ===================================*/}

              <li className="text-center">
                <a
                  className={
                    "text-xs font-semibold text-black bg-white hover:text-[#EB4E62] px-0 py-3 rounded block m-auto leading-normal "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <CiCreditCard1 className="blocl m-auto text-6xl border text-gray-500 py-3 mb-2 rounded-lg border-gray-300 hover:text-white hover:border-0 hover:bg-[#EB4E62]" />
                  Debit Card
                </a>
              </li>

              {/* ===============================BookMyEvent ===================================*/}
              <li className="text-center">
                <a
                  className={
                    "text-xs font-semibold text-black bg-white hover:text-[#EB4E62] px-0 py-3 rounded block leading-normal "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <IoTicketOutline className="blocl m-auto text-6xl border text-gray-500 py-3 mb-2 rounded-lg border-gray-300 hover:text-white hover:border-0 hover:bg-[#EB4E62]" />
                  BookMyEvent
                </a>
              </li>

              {/* ===============================Wallet ===================================*/}

              <li className="text-center">
                <a
                  className={
                    "text-xs font-semibold text-black bg-white hover:text-[#EB4E62] px-0 py-3 rounded block leading-normal "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <IoWalletOutline className="blocl m-auto text-6xl border text-gray-500 py-3 mb-2 rounded-lg border-gray-300 hover:text-white hover:border-0 hover:bg-[#EB4E62]" />
                  Wallet
                </a>
              </li>
              {/* =============================== Rewards ===================================*/}

              <li className="text-center">
                <a
                  className={
                    "text-xs font-semibold text-black bg-white hover:text-[#EB4E62] px-0 py-3 rounded block leading-normal "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(5);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <GoTrophy className="blocl m-auto text-6xl border text-gray-500 py-3 mb-2 rounded-lg border-gray-300 hover:text-white hover:border-0 hover:bg-[#EB4E62]" />
                  Rewards
                </a>
              </li>

              {/* =============================== Pay Later ===================================*/}

              <li className="text-center">
                <a
                  className={
                    "text-xs font-semibold text-black bg-white hover:text-[#EB4E62] px-0 py-3 rounded block leading-normal "
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(6);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <FaGooglePay className="blocl m-auto text-6xl border text-gray-500 py-3 mb-2 rounded-lg border-gray-300 hover:text-white hover:border-0 hover:bg-[#EB4E62]" />
                  Pay Later
                </a>
              </li>
            </ul>

            {/* =======================================Nav Pilss data ==============================================*/}
            <div className="w-full  rounded ">
              <div className="container mx-auto">
                <div className="tab-content tab-space ">
                  {/*===================================== CreditCard ===============================================*/}
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <div className="container mx-auto">
                      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 mb-6 mx-4">
                        {creditcarddata.map((val, index) => {
                          return (
                            <div>
                              <Link to={val.link}>
                                <div
                                  className="contain bg-white relative shadow-lg"
                                  key={index}
                                >
                                  <img
                                    src={val.img}
                                    alt="Avatar"
                                    className="image w-full block md:h-72 h-48 rounded-sm"
                                  />
                                  <img
                                    src={val.bankimg}
                                    alt=""
                                    className="rounded-full w-14 -mt-[28px] ml-4 absolute z-10"
                                  />
                                  <h1 className="text-sm text-center py-8">
                                    {val.tittle}
                                  </h1>
                                  <p className="text-sm text-center pb-5">
                                    {val.des}
                                  </p>

                                  <div className="overlay absolute md:h-72 h-48 w-full inset-x-0 inset-y-0 opacity-0 rounded-sm">
                                    <h1 className="text absolute top-[9%] border-y md:py-4 py-2 left-[50%] text-center text-sm font-bold text-white w-full">
                                      {val.hovertext}
                                    </h1>
                                    <p className="text absolute left-[50%] top-[50%] text-center px-2 text-white w-full">
                                      {val.hoverdes}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/*======================================= Debit Card ========================================== */}
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="container mx-auto">
                      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:mx-8 mx-2 my-5">
                        {debitcarddata.map((val, index) => {
                          return (
                            <div>
                              <Link to={val.link}>
                                <div
                                  className="contain bg-white relative shadow-lg"
                                  key={index}
                                >
                                  <img
                                    src={val.img}
                                    alt="Avatar"
                                    className="image w-full block md:h-72 h-48 rounded-sm"
                                  />
                                  <img
                                    src={val.bankimg}
                                    alt=""
                                    className="rounded-full w-14 -mt-[28px] ml-4 absolute z-10"
                                  />
                                  <h1 className="text-sm text-center py-8">
                                    {val.tittle}
                                  </h1>
                                  <p className="text-sm text-center pb-5 text-gray-500">
                                    Valid till
                                    <span className="text-black">
                                      {val.des}
                                    </span>
                                  </p>

                                  <div className="overlay absolute md:h-72 h-48 w-full inset-x-0 inset-y-0 opacity-0 rounded-sm">
                                    <h1 className="text absolute top-[9%] border-y py-4 left-[50%] text-center text-sm font-bold text-white w-full">
                                      {val.hovertext}
                                    </h1>
                                    <p className="text absolute left-[50%] top-[50%] text-center px-2 text-white w-full">
                                      {val.hoverdes}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/*======================================= BookMyEvent ========================================== */}
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="container mx-auto">
                      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:mx-8 mx-2 my-5">
                        {bookmyeventdata.map((val, index) => {
                          return (
                            <div>
                              <Link to={val.link}>
                                <div
                                  className="contain bg-white relative shadow-lg"
                                  key={index}
                                >
                                  <img
                                    src={val.img}
                                    alt="Avatar"
                                    className="image w-full block md:h-72 h-48 rounded-sm"
                                  />
                                  <img
                                    src={val.bankimg}
                                    alt=""
                                    className="rounded-full bg-white w-14 -mt-[28px] ml-4 absolute z-10"
                                  />
                                  <h1 className="text-sm text-center py-8">
                                    {val.tittle}
                                  </h1>
                                  <p className="text-sm text-center pb-5 text-gray-500">
                                    Valid till
                                    <span className="text-black">
                                      {val.des}
                                    </span>
                                  </p>

                                  <div className="overlay absolute md:h-72 h-48 w-full inset-x-0 inset-y-0 opacity-0 rounded-sm">
                                    <h1 className="text absolute top-[9%] border-y py-4 left-[50%] text-center text-sm font-bold text-white w-full">
                                      {val.hovertext}
                                    </h1>
                                    <p className="text absolute left-[50%] top-[50%] text-center px-2 text-white w-full">
                                      {val.hoverdes}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/*======================================= Wallet ========================================== */}
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="container mx-auto">
                      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:mx-8 mx-2 my-5">
                        {walletdata.map((val, index) => {
                          return (
                            <div>
                              <Link to={val.link}>
                                <div
                                  className="contain bg-white relative shadow-lg"
                                  key={index}
                                >
                                  <img
                                    src={val.img}
                                    alt="Avatar"
                                    className="image w-full block md:h-72 h-48 rounded-sm"
                                  />
                                  <img
                                    src={val.bankimg}
                                    alt=""
                                    className="rounded-full bg-white w-14 -mt-[28px] ml-4 absolute z-10"
                                  />
                                  <h1 className="text-sm text-center py-8">
                                    {val.tittle}
                                  </h1>
                                  <p className="text-sm text-center pb-5 text-gray-500">
                                    Valid till
                                    <span className="text-black">
                                      {val.des}
                                    </span>
                                  </p>

                                  <div className="overlay absolute md:h-72 h-48 w-full inset-x-0 inset-y-0 opacity-0 rounded-sm">
                                    <h1 className="text absolute top-[9%] border-y py-4 left-[50%] text-center text-sm font-bold text-white w-full">
                                      {val.hovertext}
                                    </h1>
                                    <p className="text absolute left-[50%] top-[50%] text-center px-2 text-white w-full">
                                      {val.hoverdes}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/*=======================================Rewards ========================================== */}
                  <div
                    className={openTab === 5 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="container mx-auto">
                      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:mx-8 mx-2 my-5">
                        {rewardsdata.map((val, index) => {
                          return (
                            <div>
                              <Link to={val.link}>
                                <div
                                  className="contain bg-white relative shadow-lg"
                                  key={index}
                                >
                                  <img
                                    src={val.img}
                                    alt="Avatar"
                                    className="image w-full block md:h-72 h-48 rounded-sm"
                                  />
                                  <img
                                    src={val.bankimg}
                                    alt=""
                                    className="rounded-full bg-white w-14 -mt-[28px] ml-4 absolute z-10"
                                  />
                                  <h1 className="text-sm text-center py-8">
                                    {val.tittle}
                                  </h1>
                                  <p className="text-sm text-center pb-5 text-gray-500">
                                    Valid till
                                    <span className="text-black">
                                      {val.des}
                                    </span>
                                  </p>

                                  <div className="overlay absolute md:h-72 h-48 w-full inset-x-0 inset-y-0 opacity-0 rounded-sm">
                                    <h1 className="text absolute top-[9%] border-y py-4 left-[50%] text-center text-sm font-bold text-white w-full">
                                      {val.hovertext}
                                    </h1>
                                    <p className="text absolute left-[50%] top-[50%] text-center px-2 text-white w-full">
                                      {val.hoverdes}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/*=======================================Pay Later ========================================== */}
                  <div
                    className={openTab === 6 ? "block" : "hidden"}
                    id="link2"
                  >
                    <div className="container mx-auto">
                      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:mx-8 mx-2 my-5">
                        {paylaterdata.map((val, index) => {
                          return (
                            <div>
                              <Link to={val.link}>
                                <div
                                  className="contain bg-white relative shadow-lg"
                                  key={index}
                                >
                                  <img
                                    src={val.img}
                                    alt="Avatar"
                                    className="image w-full block md:h-72 h-48 rounded-sm"
                                  />
                                  <img
                                    src={val.bankimg}
                                    alt=""
                                    className="rounded-full bg-white w-14 -mt-[28px] ml-4 absolute z-10"
                                  />
                                  <h1 className="text-sm text-center py-8">
                                    {val.tittle}
                                  </h1>
                                  <p className="text-sm text-center pb-5 text-gray-500">
                                    Valid till
                                    <span className="text-black">
                                      {val.des}
                                    </span>
                                  </p>

                                  <div className="overlay absolute md:h-72 h-48 w-full inset-x-0 inset-y-0 opacity-0 rounded-sm">
                                    <h1 className="text absolute top-[9%] border-y py-4 left-[50%] text-center text-sm font-bold text-white w-full">
                                      {val.hovertext}
                                    </h1>
                                    <p className="text absolute left-[50%] top-[50%] text-center px-2 text-white w-full">
                                      {val.hoverdes}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
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
};

export default Offers;
