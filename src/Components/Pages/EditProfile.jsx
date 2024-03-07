import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function EditProfile() {
  const [openTab, setOpenTab] = React.useState(4);
  const [yourOrder, setYourOrder] = React.useState(1);

  const [showModal, setShowModal] = React.useState(false);
  const quickplaydata = [
    {
      title: "CC/Debit Card",
      des: "You do not have any Credit/Debit Cards added to QucikPay",
    },
    {
      title: "NetBanking",
      des: "You do not have any Credit/Debit Cards added to QucikPay",
    },
    {
      title: "Gift Voucher",
      des: "You do not have any Credit/Debit Cards added to QucikPay",
    },
    {
      title: "UPI",
      des: "You do not have any Credit/Debit Cards added to QucikPay",
    },
    {
      title: "Other Wallets",
      des: "You do not have any Credit/Debit Cards added to QucikPay",
    },
    {
      title: "Redeem Points",
      des: "You do not have any Credit/Debit Cards added to QucikPay",
    },
  ];
  return (
    <div>
      <div className="w-full container mx-auto">
        <div className="w-full bg-[#E5E5E5]">
          {/*================================ NavPills ======================*/}
          <ul
            className="flex mb-0 list-none max-w-96 flex-wrap flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold uppercase px-0 py-2 block  rounded leading-normal " +
                  (openTab === 1
                    ? "text-white bg-themecolor1"
                    : "text-gray-500 bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Your Orders
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-2 border rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-themecolor1"
                    : "text-gray-500 bg-transparent")
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
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-2 border rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-themecolor1"
                    : "text-gray-500 bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                QuickPay
              </a>
            </li>

            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-0 py-2 border rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-themecolor1"
                    : "text-gray-500 bg-transparent")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Profile
              </a>
            </li>
          </ul>

          {/* ===============================Nav Pilss data ====================================*/}
          <div className="relative flex h-full flex-col min-w-0 break-words  w-full rounded">
            <div className=" flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  {/*================================ NavPills ======================*/}
                  <div className="flex w-full flex-wrap">
                    <div className="w-full bg-white">
                      <div className="flex mb-0 list-none w-80 " role="tablist">
                        <li className=" flex-auto text-center">
                          <a
                            className={
                              "text-xs font-semibold uppercase py-3 block " +
                              (yourOrder === 1
                                ? "text-[#f84464] bg-white border-b-4 border-[#f84464]"
                                : "text-black bg-transparent")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setYourOrder(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                          >
                            Recent Bookings
                          </a>
                        </li>
                      </div>

                      {/* ================================Nav Pilss data =======================================*/}
                      <div className="relative flex h-auto flex-col min-w-0 break-words w-full rounded bg-gray-200">
                        <div className="flex-auto">
                          <div className="tab-content tab-space">
                            <div
                              className={
                                yourOrder === 1 ? "block mx-14" : "hidden"
                              }
                              id="link1"
                            >
                              <h1 className="py-14">
                                You don't seem to have any recent booking
                              </h1>
                            </div>

                            <div
                              className={
                                yourOrder === 2 ? "block mx-14" : "hidden"
                              }
                              id="link2"
                            >
                              <h1 className="py-14">
                                You don't seem to have any pre booking data
                              </h1>
                            </div>

                            <div
                              className={
                                yourOrder === 3 ? "block mx-14" : "hidden"
                              }
                              id="link2"
                            >
                              <h1 className="py-14">
                                You don't seem to have any add ons
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={openTab === 2 ? "block bg-white py-5" : "hidden"}
                  id="link2"
                >
                  <div className="text-center">
                    <h1 className="  pt-10 font-semibold">
                      Start making your collection
                    </h1>
                    <p className="    py-4">
                      Find movie you like, relax and enjoy watching them on your
                      phone or TV App.
                    </p>
                    <button className="bg-[#EB4E62]  text-white p-2 rounded-lg">
                      Explore Events
                    </button>
                  </div>
                </div>

                <div
                  className={
                    openTab === 3 ? "block py-5 bg-gray-100" : "hidden"
                  }
                  id="link2"
                >
                  <div className="container mx-auto">
                    <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                      {quickplaydata.map((val, index) => {
                        return (
                          <div
                            className="bg-white rounded-md mx-5 md:mx-0"
                            key={index}
                          >
                            <h1 className="font-medium p-6 w-full flex text-gray-500">
                              {val.title}{" "}
                              <span
                                onClick={() => setShowModal(true)}
                                className="text-[#EB4E62] text-sm font-normal ml-auto mt-1 cursor-pointer"
                              >
                                +Add
                              </span>
                            </h1>
                            <p className="text-sm pb-10 p-6 text-gray-400">
                              {val.des}
                            </p>

                            {showModal ? (
                              <div>
                                <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
                                  <div className="relative my-6 mx-auto w-[25rem]">
                                    {/*content*/}
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                      {/*header*/}
                                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                        <h3 className="lg:text-2xl text-lg text-center font-semibold">
                                          Enter Your Card Details
                                        </h3>
                                        <button
                                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                          type="button"
                                          onClick={() => setShowModal(false)}
                                        >
                                          <AiOutlineClose />
                                        </button>
                                      </div>
                                      {/*body*/}
                                      <div className="relative p-6 flex-auto">
                                        <h1 className="text-center text-sm">
                                          Card Name
                                        </h1>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          placeholder="Name of the Card(eg.FAMILY CARD)"
                                          className="border border-gray-400 rounded-md p-2 w-full focus:text-5xl"
                                        />

                                        <h1 className="text-center mt-4 my-1 text-sm">
                                          *Card Number
                                        </h1>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          placeholder="Card Number"
                                          className="border border-gray-400 rounded-md p-2 w-full focus:text-5xl"
                                        />

                                        <h1 className="text-center mt-4 my-1 text-sm">
                                          *Expiry Date (MMYY)
                                        </h1>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          placeholder="Expiry (MMYY)"
                                          className="border border-gray-400 rounded-md p-2 w-full focus:text-5xl"
                                        />

                                        <h1 className="text-center mt-4 my-1 text-sm">
                                          *Name of the Card
                                        </h1>
                                        <input
                                          type="text"
                                          name=""
                                          id=""
                                          placeholder="Name on the Card"
                                          className="border border-gray-400 rounded-md p-2 w-full focus:text-5xl"
                                        />
                                      </div>
                                      {/*footer*/}
                                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                          className="bg-emerald-500 text-white active:bg-emerald-600 font-medium text-lg lg:px-20 px-10 py-2 rounded shadow outline-none focus:outline-none mb-1 ease-linear transition-all duration-150 block m-auto"
                                          type="button"
                                        >
                                          Verfiy & continue
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link2">
                  <div className="bg-[#F2F5F9] py-5">
                    {/* ===============Account Details =============*/}
                    <div className="lg:mx-40 xl:mx-80 rounded-lg bg-white">
                      <div className="grid grid-cols-1">
                        <div class="bg-gradient-to-r from-black to-red-800 p-8">
                          <h1 className="text-white text-xl font-bold">
                            Hi, Guest
                          </h1>
                        </div>

                        <form>
                          <div className="block">
                            <h1 className="text-xl font-semibold px-8 pt-5">
                              Account Details
                            </h1>
                            <div className="py-2  p-8">
                              <h1>Email Address</h1>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="border border-gray-400 py-2 px-2 w-full rounded-md "
                                placeholder="abc@gmail.com"
                              />
                            </div>
                            <div className="py-2  p-8">
                              <h1>Phone number</h1>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="border border-gray-400 py-2 px-2 w-full rounded-md "
                                placeholder="1324567980"
                              />
                            </div>
                          </div>
                          <div className="block">
                            <h1 className="text-xl font-semibold px-8">
                              Personal Details
                            </h1>
                            <div className="py-2  p-8">
                              <h1>City</h1>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="border border-gray-400 py-2 px-2 w-full rounded-md "
                                placeholder="City"
                              />
                            </div>
                            <div className="py-2  p-8">
                              <h1>State</h1>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="border border-gray-400 py-2 px-2 w-full rounded-md "
                                placeholder="State"
                              />
                            </div>
                            <div className="py-2  p-8">
                              <h1>Pin code</h1>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="border border-gray-400 py-2 px-2 w-full rounded-md "
                                placeholder="Pin code"
                              />
                            </div>
                            <div className="py-2  p-8">
                              <h1>Password</h1>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="border border-gray-400 py-2 px-2 w-full rounded-md "
                                placeholder="Password"
                              />
                            </div>
                            <div className="py-2  p-8">
                              <h1>Confirm Password</h1>
                              <input
                                type="text"
                                name=""
                                id=""
                                className="border border-gray-400 py-2 px-2 w-full rounded-md "
                                placeholder="Confirm Password"
                              />
                            </div>
                          </div>
                          <button className="block m-auto bg-[#EC5E71] text-white p-2 px-16 my-5 rounded-sm">
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
      </div>
    </div>
  );
}

export default EditProfile;
