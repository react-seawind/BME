import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import MainLogo from "../../Images/newlogo.png";
import { RxCross2 } from "react-icons/rx";
import { MdChevronLeft } from "react-icons/md";
import Mumbai from "../../Images/cities1.png";
import Delhi from "../../Images/cities2.png";
import Bengaluru from "../../Images/cities3.png";
import Hyderabad from "../../Images/cities4.png";
import Chandigarh from "../../Images/cities5.png";
import Ahmedabad from "../../Images/cities6.png";
import Chennai from "../../Images/cities7.png";
import Pune from "../../Images/cities8.png";
import Kolkata from "../../Images/cities9.png";
import Kochi from "../../Images/cities10.png";
import { IoIosRefresh, IoMdHome } from "react-icons/io";
import { MdEventAvailable } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiBellOn, CiMail } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { CiCreditCard2 } from "react-icons/ci";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";
import { FaBars, FaChevronDown, FaSearch } from "react-icons/fa";
import { FaAngleRight, FaLocationDot } from "react-icons/fa6";
import Country from "../../Images/indianflag.png";
import { Link } from "react-router-dom";

export default function Example({ color }) {
  const [showModal, setShowModal] = React.useState(false);
  const [openTab, setOpenTab] = React.useState(1);

  const navigation1 = [
    { name: "Events", href: "/BME/event", current: true },
    { name: "Plays", href: "#", current: false },
    { name: "Sports", href: "#", current: false },
    { name: "Activites", href: "#", current: false },
  ];

  const navigation2 = [
    { name: "ListYourShow", href: "/BME/listyourshow", current: true },
    { name: "Offers", href: "/BME/offers", current: false },
    { name: "Gift Cards", href: "/BME/giftcard", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const filterdata = [
    {
      name: "hindi",
      subdata: [
        { link: "", des: "12th Fail(U)" },
        { link: "", des: "Animal(A)" },
        { link: "", des: "Argylle (Hindi) (UA)" },
        { link: "", des: "Dil To Pagal Hai(U)" },
        { link: "", des: "Dunki(UA)" },
        { link: "", des: "Fighter" },
        { link: "", des: "Hanu-Man (Hindi) (UA)" },
        { link: "", des: "Karma (1986) (UA)" },
        { link: "", des: "Merry Christmas (UA)" },
      ],
    },
    {
      name: "Gujarati",
      subdata: [
        { link: "", des: "Chaal Jeevi Laiye (U)" },
        { link: "", des: "Danny Jigar - Ek Matra (UA)" },
        { link: "", des: "Hurry Om Hurry (UA)" },
        { link: "", des: "Itta Kitta (U)" },
        { link: "", des: "Jigia E to Jamaavat Kari (UA)" },
        { link: "", des: "Kamthaan (UA)" },
        { link: "", des: "Mara Papa Superhero (U)" },
        { link: "", des: "My Dear Pappa (UA)" },
      ],
    },
    {
      name: "Tamil",
      subdata: [{ link: "", des: "Vadakkupatti Ramasamy (U)" }],
    },
    {
      name: "English",
      subdata: [
        { link: "", des: "Anatomy Of A Fail (UA)" },
        { link: "", des: "Argylle" },
        { link: "", des: "Next Goal Wins (UA)" },
        { link: "", des: "The Beekeeper (A)" },
      ],
    },
    {
      name: "Telugu",
      subdata: [{ link: "", des: "Ambajipeta Marriage Band (UA)" }],
    },
  ];

  const [showModal2, setShowModal2] = React.useState(false);

  const citiesdata = [
    { img: Mumbai, tittle: "Mumbai" },
    { img: Delhi, tittle: "Delhi-NCR" },
    { img: Bengaluru, tittle: "Bengaluru" },
    { img: Hyderabad, tittle: "Hyderabad" },
    { img: Chandigarh, tittle: "Chandigarh" },
    { img: Ahmedabad, tittle: "Ahmedabad" },
    { img: Chennai, tittle: "Chennai" },
    { img: Pune, tittle: "Pune" },
    { img: Kolkata, tittle: "Kolkata" },
    { img: Kochi, tittle: "Kochi" },
  ];

  const [viewAllCt, setViewAllCt] = useState(false);

  const toggleviewAllCt = () => {
    setViewAllCt(!viewAllCt);
  };

  const areadata = [
    { link: "", tittle: "abc" },
    { link: "", tittle: "abc" },
    { link: "", tittle: "abc" },
    { link: "", tittle: "abc" },
    { link: "", tittle: "abc" },
    { link: "", tittle: "abc" },
  ];

  const [active, setActive] = useState("1");
  const clickedEvent = (id) => {
    setActive(id);
  };

  const bottomNavdata = [
    { id: "1", link: "/BME", label: "Home", icons: <IoMdHome /> },
    {
      id: "2",
      link: "/BME/event",
      label: "Event",
      icons: <MdEventAvailable />,
    },
    { id: "3", link: "/BME/offers", label: "Offers", icons: <BiSolidOffer /> },
    {
      id: "4",
      // link: "/BME/editprofile",
      label: "Profile",
      icons: <MdAccountCircle />,
    },
  ];
  const menuItems = [
    { logo1: <CiBellOn />, logo2: <FaAngleRight />, text: "Notifications" },
    {
      logo1: <IoBagOutline />,
      logo2: <FaAngleRight />,
      text: "Your Booking",
      des: "view all your boking & purchase",
    },
    {
      logo1: <RiComputerLine />,
      logo2: <FaAngleRight />,
      text: "Stream Library",
      des: "Retend & Purcahse Movies",
    },
    {
      logo1: <CiCreditCard2 />,
      logo2: <FaAngleRight />,
      text: "Play Credit Card",
      des: "View Your Play Credit Card details and Offers",
    },
    {
      logo1: <BiMessageRoundedDots />,
      logo2: <FaAngleRight />,
      text: "Help & Support",
      des: "View commonly asked queries and Chat",
    },
    {
      logo1: <IoSettingsOutline />,
      logo2: <FaAngleRight />,
      text: "Accounts & Settings",
      des: "Locations, Payments, Permissions & More",
    },
    {
      logo1: <GoGift />,
      logo2: <FaAngleRight />,
      text: "Rewards",
      des: "View your rewards & unlock new ones",
    },
  ];
  const [nav, setNav] = useState(false);

  const [loginpopup, setloginpopup] = useState(false);
  const handleProfileClick = () => {
    setloginpopup(true);
  };
  const [showOTP, setShowOTP] = useState(false);

  return (
    <div>
      <section>
        {/* ===========================NavBar 1 ===============================*/}

        <div>
          <Disclosure as="nav" className="">
            {({ open }) => (
              <div>
                <div className="container mx-auto px-2 sm:px-6 lg:px-2">
                  <div className="relative flex h-20 items-center justify-between ">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ml-[7px] md:ml-0">
                      {/* Mobile menu button*/}
                    </div>

                    {/* ================================Logo Part ===========================================*/}
                    <div className="flex  items-center justify-center   ">
                      <Link to="/BME">
                        <img
                          className="h-16 w-auto absolute -mt-8"
                          src={MainLogo}
                          alt="Your Company"
                        />
                      </Link>
                    </div>

                    <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="hidden xl:block">
                        <button className="border-themecolor3 border-2  mx-3 rounded-full py-2 px-4">
                          Popular event
                        </button>
                        <button className="border-themecolor3 border-2  mx-3 rounded-full py-2 px-4">
                          Free event
                        </button>
                        <button className="border-themecolor3 border-2  mx-3 rounded-full py-2 px-4">
                          Today event
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <button className="border-2 rounded relative">
                          <input
                            type="text"
                            name=""
                            value=""
                            onClick={() => setShowModal(true)}
                            className="pl-7 py-2 px-4 xl:w-[28rem] lg:w-[24rem] md:w-[22rem] surface:w-[22rem]"
                            placeholder="Search for Events, Plays, Sports and Activites"
                          />
                          <FaSearch className="absolute top-3 left-2" />
                        </button>
                      </div>
                      <div className="hidden md:block">
                        <button
                          className="border-themecolor1 border-2  mx-3 rounded-full py-2 px-4 flex items-center "
                          onClick={() => setShowModal2(true)}
                        >
                          <FaLocationDot className="mr-2 text-xl text-themecolor3" />{" "}
                          Ahmedabad <FaChevronDown className="ml-2" />
                        </button>
                      </div>

                      <div className="absolute inset-y-0 right-0 lg:flex grid items-center pr-2 sm:static sm:inset-auto ">
                        <button
                          type="button"
                          className="relative ml-4 rounded-md bg-[#F84464] py-2 px-6 md:px-4 text-white duration-200 hidden lg:block"
                          onClick={() => setloginpopup(true)}
                        >
                          Sign In
                        </button>

                        {/*======================= mobile Menu =======================*/}
                        <div className="max-w-[1640px] pl-3 ml-auto flex items-center">
                          <div className="flex">
                            <div
                              onClick={() => setNav(!nav)}
                              className="cursor-pointer flex"
                            >
                              <FaBars size={30} />
                            </div>
                          </div>

                          {nav ? (
                            <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
                          ) : (
                            ""
                          )}
                          <div
                            className={
                              nav
                                ? "fixed top-0 right-0 w-[320px] h-screen bg-white z-10 duration-300"
                                : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                            }
                          >
                            <AiOutlineClose
                              onClick={() => setNav(!nav)}
                              size={30}
                              className="absolute right-4 text-black top-4 cursor-pointer"
                            />
                            <div className="p-4">
                              <h2 className="text-2xl  font-bold flex">
                                Hey!
                                <MdAccountCircle className="mt-2 text-gray-600" />
                              </h2>
                              <Link
                                to="/BME/editprofile"
                                onClick={() => setNav(false)}
                              >
                                <p className="flex text-sm">
                                  Edit Profile
                                  <FaAngleRight className="mt-1" />
                                </p>
                              </Link>
                            </div>

                            <nav>
                              <ul className="flex flex-col p-0 text-gray-800">
                                <div className="flex bg-[#FFF3D2] pt-2">
                                  <h2 className="mt-1 text-xl px-2">
                                    <IoIosInformationCircleOutline />
                                  </h2>
                                  <h1 className="text-base flex cursor-pointer w-full mx-auto">
                                    Get tickets on whatsapp/sms{" "}
                                  </h1>
                                  <h2 className="mt-1 justify-end ml-auto">
                                    <FaAngleRight />
                                  </h2>
                                </div>
                                <p className="border-b bg-[#FFF3D2] text-xs px-3 pb-2">
                                  Add your Mobile Number
                                </p>

                                {menuItems.map(
                                  ({ logo1, logo2, text, des }, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="py-2 border-b"
                                      >
                                        <h1
                                          className="text-base flex cursor-pointer w-full mx-auto"
                                          onClick={() => setNav(false)}
                                        >
                                          <span className="mt-1 text-xl px-2">
                                            {logo1}
                                          </span>{" "}
                                          {text}{" "}
                                          <span className="mt-1 justify-end ml-auto">
                                            {logo2}
                                          </span>
                                        </h1>
                                        <p className="text-xs px-3">{des}</p>
                                      </div>
                                    );
                                  }
                                )}
                                <button className="border border-[#F84464] mx-2 p-2 text-[#F84464] font-bold rounded-md my-2">
                                  Sign Out
                                </button>
                              </ul>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation1.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>

        {/* ====================================NavBar 2 ==========================================*/}
        <div className="md:mb-0 mb-10  md:mt-0 mt-5">
          <Disclosure as="nav" className="bg-gray-100  ">
            {({ open }) => (
              <div>
                <div className="mx-auto container px-2 sm:px-6 lg:px-2 ">
                  <div className="relative  items-center justify-between w-full md:w-full ">
                    <div className="absolute inset-y-0 left-0 flex items-center justify-center sm:hidden ">
                      {/* Mobile menu button*/}
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-1 ">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-10 text-black w-10"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-10 text-black w-10"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>

                      <button className="border-2 rounded relative">
                        <input
                          type="text"
                          name=""
                          value=""
                          onClick={() => setShowModal(true)}
                          className="pl-7 py-2 px-4 w-[20.5rem]"
                          placeholder="Search for Events, Plays, Sports and Activites"
                        />
                        <FaSearch className="absolute top-3 left-1" />
                      </button>
                    </div>
                    <div className="flex flex-1 sm:items-stretch ">
                      <div className="hidden sm:block mr-auto">
                        <div className="flex space-x-4">
                          {navigation1.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current ? " text-black " : "text-black  ",
                                "rounded-md px-2 py-3 text-[0.975rem] font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div className="hidden sm:block ml-auto justify-end">
                        <div className="flex space-x-4 justify-end">
                          {navigation2.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current ? " text-black" : "text-black ",
                                "rounded-md px-2 py-3 text-[0.975rem] font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*=======================desktop=====================*/}
                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-10 md:pt-0">
                    {navigation1.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current ? "text-gray-500" : "text-gray-500",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                    {navigation2.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current ? " text-gray-500" : "text-gray-500",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      </section>
      {/*============================= Bottom Navbar ==========================================*/}

      <div className="bottomNavbar lg:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          {bottomNavdata.map(({ id, label, icons, link }) => (
            <div key={id} className="block m-auto">
              <Link
                to={link}
                onClick={
                  id === "4" ? handleProfileClick : () => clickedEvent(id)
                }
                className={`focus:outline-none ${
                  active === id ? "text-themecolor1" : "text-black"
                }`}
              >
                <h1 className="flex justify-center text-xl">{icons}</h1>
                {label}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {loginpopup ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-auto w-96">
              <div className="border-0 rounded-lg shadow-lg relative h-96 flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start  justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl  block font-semibold">Login</h3>
                  <button
                    className="text-themecolor1 background-transparent font-bold uppercase  text-3xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setloginpopup(false)}
                  >
                    <RxCross2 />
                  </button>
                </div>

                <div className="relative p-6 flex-auto w-full">
                  <button className="text-gray-600 flex border w-full border-gray-500 hover:bg-gray-100 hover:border-white duration-500 py-2 px-3 rounded-md">
                    <CiMail className="mt-1 mx-2 text-xl" />
                    Continue with Email
                  </button>
                </div>

                <h1 className="block m-auto">OR</h1>
                <div className="p-6 border-solid border-blueGray-200 pb-10 rounded-b">
                  <div className="flex">
                    <img src={Country} alt="" className="px-2 py-2" />
                    <p className="">+91</p>
                    <input
                      type="tel"
                      name=""
                      id="mobileNo"
                      placeholder="Continue with mobile number"
                      className="px-2 border-b border-gray-300 outline-none  w-full"
                    />
                  </div>
                </div>
                <button
                  className="bg-themecolor1 mx-14 p-2 text-white rounded-md"
                  onClick={() => setShowOTP(true)}
                >
                  Continue
                </button>
                <p className="text-xs block m-auto text-gray-500 py-5">
                  I agree to the{" "}
                  <a
                    href="javascript:void(0)"
                    className="underline decoration-1"
                  >
                    Terms & conditions
                  </a>{" "}
                  &{" "}
                  <a
                    href="javascript:void(0)"
                    className="underline decoration-1"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
      {/* -----------------------OTP Section ---------------------------- */}
      {showOTP ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  mx-auto w-96">
              <div className="border-0 rounded-lg shadow-lg relative  h-96 flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start  justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl  block font-semibold">OTP</h3>
                  <button
                    className="text-themecolor1 background-transparent font-bold uppercase  text-3xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowOTP(false)}
                  >
                    <RxCross2 />
                  </button>
                </div>

                <div className="my-auto">
                  <div className="p-6  w-full flex justify-center">
                    <input
                      type="text"
                      placeholder="1"
                      className="border text-center w-16 h-16 mx-2"
                    />
                    <input
                      type="text"
                      placeholder="1"
                      className="border text-center w-16 h-16 mx-2"
                    />
                    <input
                      type="text"
                      placeholder="1"
                      className="border text-center w-16 h-16 mx-2"
                    />
                    <input
                      type="text"
                      placeholder="1"
                      className="border text-center w-16 h-16 mx-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 text-center mb-2">
                    <p className="mx-5 p-2   rounded-md">01:00</p>
                    <p className="mx-5 p-2  rounded-md flex justify-center items-center">
                      <IoIosRefresh />
                      Resend OTP
                    </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <button
                      className="bg-themecolor1 mx-5 p-2 text-white  rounded-md"
                      onClick={() => setShowOTP(false)}
                    >
                      Back
                    </button>
                    <Link
                      to={"/BME/editprofile"}
                      className="bg-themecolor1 mx-5 p-2 text-white  text-center rounded-md"
                    >
                      Verify OTP
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}

      {/* ================================Event search popup============================================ */}

      {showModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full h-full ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-full">
                {/*header*/}
                <div className="flex items-start justify-between md:p-5 py-2 md:py-12 border-b border-solid border-blueGray-200 rounded-t bg-gray-200">
                  <button
                    className=" text-emerald-600 background-transparent font-bold uppercase px-0 md:px-6  text-4xl flex justify-end outline-none focus:outline-none mr-1 mt-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <MdChevronLeft />
                  </button>
                  <input
                    className="peer py-3 w-full md:w-[65%] block m-auto border px-0 md:px-5 outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search for Events, Plays, Sports and Activites"
                  />
                  <button
                    className="text-red-500 background-transparent mt-1 font-bold uppercase px-0 md:px-6 text-4xl flex justify-end outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <RxCross2 />
                  </button>
                </div>
                {/*body*/}
                <div className="  px-0 lg:px-28 md:px-8 w-full p-6 overflow-y-auto flex-auto">
                  <p className="w-full text-blueGray-500 text-lg leading-relaxed">
                    {/* ====================================Nav Pills Tabs================================== */}
                    <div className="px-10 md:px-0">
                      <ul
                        className="mb-0 list-none w-80 pt-3 pb-4"
                        role="tablist"
                      >
                        <li className=" mr-2   text-center">
                          <a
                            className={
                              "text-xs font-semibold uppercase px-0 py-3 shadow-lg rounded block leading-normal " +
                              (openTab === 1
                                ? "text-black bg-white"
                                : "text-gray-500 bg-gray-200")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                          >
                            EVENTS
                          </a>
                        </li>
                      </ul>

                      {/* ============================Nav Pilss data =======================================*/}
                      <div className="h-full  min-w-0 break-words bg-white w-full rounded">
                        <div className="tab-content tab-space">
                          <div
                            className={openTab === 1 ? "block" : "hidden"}
                            id="link1"
                          >
                            <div className="container  ">
                              <div className="md:grid grid-cols-5  gap-3">
                                {filterdata.map((val, index) => (
                                  <div className="">
                                    <div key={index}>
                                      <h1 className="text-lg mt-7 mb-2 text-themecolor1">
                                        {val.name}
                                      </h1>
                                      {val.subdata.map((subVal, subIndex) => (
                                        <div key={subIndex}>
                                          <Link
                                            to={subVal.link}
                                            className="text-xs md:text-sm py-1 hover:underline"
                                          >
                                            {subVal.des}
                                          </Link>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* ====================================city dropdown==========================================*/}

      {showModal2 ? (
        <div>
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-6 mx-auto   px-6 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                <RxCross2
                  className="text-red-500 absolute -right-4 -top-4 bg-white rounded-full cursor-pointer font-bold uppercase px-0   text-4xl   justify-end  md:mt-1 ease-linear transition-all duration-150  "
                  type="button"
                  onClick={() => setShowModal2(false)}
                />
                <div className="md:flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  {/*========================= search bar======================================== */}
                  <div className="w-full border border-gray-400  md:ml-0 mt-0  mr-0   rounded-md">
                    <div className="relative flex items-center h-full rounded-lg focus-within:shadow-lg bg-white overflow-hidden w-[15rem] md:w-full">
                      <div className="grid place-items-center h-12 w-12 text-gray-300">
                        <FaSearch />
                      </div>

                      <input
                        className="h-full   w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search for Movies, Events, Plays, Sports and Activites"
                        onClick={() => setShowModal2(true)}
                      />
                    </div>
                  </div>
                </div>

                {/*body*/}
                <div className="relative w-full p-5 md:p-6 flex-auto">
                  <p className="my-4 w-full text-blueGray-500 text-sm font-semibold text-center leading-relaxed">
                    Popular Cities
                  </p>
                  <div className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-4 md:mx-4">
                    {citiesdata.map((val, index) => {
                      return (
                        <div className="citie" key={index}>
                          <img
                            src={val.img}
                            alt=""
                            className="hover:brightness-50 m-auto block px-2 "
                          />
                          <h1 className="text-center px-2 md:text-sm text-xs">
                            {val.tittle}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  {/*============================= View All Cities========================== */}
                  <div className="card bg-white mx-10  py-2 w-full">
                    <div className="card w-full">
                      {viewAllCt && (
                        <p>
                          <h1 className="text-center py-2">Other Cities</h1>
                          <div className="container mx-auto">
                            <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1">
                              {areadata.map((val, index) => {
                                return (
                                  <Link
                                    key={index}
                                    to={val.link}
                                    className="text-sm w-full text-gray-500 hover:text-black"
                                  >
                                    {val.tittle}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </p>
                      )}

                      <button
                        onClick={toggleviewAllCt}
                        className="text-center m-auto block text-[#DC3548]"
                      >
                        {viewAllCt ? "Hide All Cities" : "View All Cities"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
}
