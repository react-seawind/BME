import React from "react";
import GiftCardImg from "../../Images/giftcard.png";
import GenricImg from "../../Images/genricimg.png";
import OccasionImg from "../../Images/occasion.png";
import comboImg from "../../Images/combo.png";
import "./GiftCards.css";
import { MdCurrencyRupee } from "react-icons/md";
import { Link } from "react-router-dom";

const GiftCards = () => {
  const [openTab, setOpenTab] = React.useState(1);
  const [openTab1, setOpenTab1] = React.useState(1);

  const alldata = [
    {
      link: "/BME/giftcardinnerpage",
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: GiftCardImg,
    },
    {
      link: "/BME/giftcardinnerpage",
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: GiftCardImg,
    },
    {
      link: "/BME/giftcardinnerpage",
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: GiftCardImg,
    },
    {
      link: "/BME/giftcardinnerpage",
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: GiftCardImg,
    },
  ];

  const grnricdata = [
    {
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: GenricImg,
      link: "/BME/giftcardinnerpage",
    },
    {
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: GenricImg,
      link: "/BME/giftcardinnerpage",
    },
    {
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: GenricImg,
      link: "/BME/giftcardinnerpage",
    },
    {
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: GenricImg,
      link: "/BME/giftcardinnerpage",
    },
  ];

  const occasiondata = [
    {
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: OccasionImg,
      link: "/BME/giftcardinnerpage",
    },
    {
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: OccasionImg,
      link: "/BME/giftcardinnerpage",
    },
    {
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: OccasionImg,
      link: "/BME/giftcardinnerpage",
    },
    {
      title: "Gift Name",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: OccasionImg,
      link: "/BME/giftcardinnerpage",
    },
  ];

  const combodata = [
    {
      img: comboImg,
      hovertext: "BMS and The Beer Cafe combo",
      rupee: "1000",
      hoverdes: "The Beer Cafe Gift Card (RS.500)",
      rupee2: "500",
      hoverdes2: "BookMyShow Instant Gift Card",
      rupee3: "500.00",
      btn: "Buy Now",
    },
    {
      img: comboImg,
      hovertext: "BMS and The Beer Cafe combo",
      rupee: "1000",
      hoverdes: "The Beer Cafe Gift Card (RS.500)",
      rupee2: "500",
      hoverdes2: "BookMyShow Instant Gift Card",
      rupee3: "500.00",
      btn: "Buy Now",
    },
    {
      img: comboImg,
      hovertext: "BMS and The Beer Cafe combo",
      rupee: "1000",
      hoverdes: "The Beer Cafe Gift Card (RS.500)",
      rupee2: "500",
      hoverdes2: "BookMyShow Instant Gift Card",
      rupee3: "500.00",
      btn: "Buy Now",
    },
    {
      img: comboImg,
      hovertext: "BMS and The Beer Cafe combo",
      rupee: "1000",
      hoverdes: "The Beer Cafe Gift Card (RS.500)",
      rupee2: "500",
      hoverdes2: "BookMyShow Instant Gift Card",
      rupee3: "500.00",
      btn: "Buy Now",
    },
  ];

  return (
    <div>
      <div className="flex w-full flex-wrap">
        <div className="w-full bg-gray-100">
          {/* =======================================Nav Pilss data ==============================================*/}
          <div className="lg:relative flex  flex-col min-w-0 break-words bg-white w-full rounded">
            <div className=" flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <h1 className="text-center text-xl text-gray-600 my-5">
                    Pick a card from one of our themes
                  </h1>
                  <div className="flex w-full flex-wrap">
                    {/*===================================== Inner NavPills Data =================================*/}
                    <div className="w-full">
                      <ul
                        className="InnerNavPills flex mb-0 list-none md:w-[50%] lg:w-[30%] flex-wrap pt-3 pb-4 flex-row ml-auto mr-auto"
                        role="tablist"
                      >
                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-xs font-bold w-full py-3 border rounded-full block leading-normal " +
                              (openTab1 === 1
                                ? "text-white bg-[#Eb4e62]"
                                : "text-black bg-white")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab1(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                          >
                            All
                          </a>
                        </li>

                        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-xs font-bold   w-full py-3 border rounded-full block leading-normal " +
                              (openTab1 === 2
                                ? "text-white bg-[#Eb4e62]"
                                : "text-black bg-white")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab1(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                          >
                            Generic
                          </a>
                        </li>

                        <li className="-mb-px mr-2  last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-xs font-bold  w-full py-3 border rounded-full block leading-normal " +
                              (openTab1 === 3
                                ? "text-white bg-[#Eb4e62]"
                                : "text-black bg-white")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab1(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                          >
                            Occasion
                          </a>
                        </li>

                        {/*<li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                          <a
                            className={
                              "text-xs font-bold  w-full py-3 border rounded-full block leading-normal " +
                              (openTab1 === 4
                                ? "text-white bg-[#Eb4e62]"
                                : "text-black bg-white")
                            }
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenTab1(4);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                          >
                            Combos
                          </a>
                          </li>*/}
                      </ul>

                      {/* =======================================E-gift card ==============================================*/}
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-full rounded">
                        <div className=" flex-auto">
                          <div className="tab-content tab-space">
                            {/* ====================================All Card======================================== */}

                            <div
                              className={openTab1 === 1 ? "block" : "hidden"}
                              id="link1"
                            >
                              <div className="container mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4 px-11">
                                  {alldata.map((val, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="mx-2 p-3 rounded-lg  my-5 shadow-md"
                                      >
                                        <Link to={val.link}>
                                          <img
                                            src={val.img}
                                            alt=""
                                            className=""
                                          />
                                          <h1 className="text-2xl font-bold py-1">
                                            {val.title}
                                          </h1>
                                          <p className="py-1">{val.desc}</p>

                                          <Link to={"/BME/giftcardinnerpage"}>
                                            <button
                                              type=""
                                              className="bg-themecolor1 w-full py-2 text-white font-bold mt-2"
                                            >
                                              Book
                                            </button>
                                          </Link>
                                        </Link>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>

                            {/* ===========================================Genric ========================================*/}
                            <div
                              className={openTab1 === 2 ? "block" : "hidden"}
                              id="link2"
                            >
                              <div className="container mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4 px-11">
                                  {grnricdata.map((val, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="mx-2 p-3 rounded-lg  my-5 shadow-md"
                                      >
                                        <Link to={val.link}>
                                          <img
                                            src={val.img}
                                            alt=""
                                            className=""
                                          />
                                          <h1 className="text-2xl font-bold py-1">
                                            {val.title}
                                          </h1>
                                          <p className="py-1">{val.desc}</p>

                                          <Link to={"/BME/giftcardinnerpage"}>
                                            <button
                                              type=""
                                              className="bg-themecolor1 w-full py-2 text-white font-bold mt-2"
                                            >
                                              Book
                                            </button>
                                          </Link>
                                        </Link>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                            {/* =========================================== Occasion ========================================*/}
                            <div
                              className={openTab1 === 3 ? "block" : "hidden"}
                              id="link3"
                            >
                              <div className="container mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4  px-11">
                                  {occasiondata.map((val, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className="mx-2 p-3 rounded-lg  my-5 shadow-md"
                                      >
                                        <Link to={val.link}>
                                          <img
                                            src={val.img}
                                            alt=""
                                            className=""
                                          />
                                          <h1 className="text-2xl font-bold py-1">
                                            {val.title}
                                          </h1>
                                          <p className="py-1">{val.desc}</p>

                                          <Link to={"/BME/giftcardinnerpage"}>
                                            <button
                                              type=""
                                              className="bg-themecolor1 w-full py-2 text-white font-bold mt-2"
                                            >
                                              Book
                                            </button>
                                          </Link>
                                        </Link>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>

                            {/* =========================================== combos ========================================

                            <div
                              className={openTab1 === 4 ? "block" : "hidden"}
                              id="link4"
                            >
                              <div className="container mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-4 pl-3 pr-5">
                                  {combodata.map((val, index) => {
                                    return (
                                      <div key={index}>
                                        <Link to={val.link}>
                                          <div
                                            className="contain bg-white relative w-[95%] mx-4 shadow-sm"
                                            key={index}
                                          >
                                            <img
                                              src={val.img}
                                              alt="Avatar"
                                              className="image w-full block rounded-sm my-5"
                                            />

                                            <div className="overlay absolute  w-full inset-x-0 inset-y-0 opacity-0 rounded-lg">
                                              <h1 className="text absolute top-[6%] py-4 mt-4 left-[50%] px-1 text-lg font-semibold text-white w-full flex">
                                                {val.hovertext}
                                                <MdCurrencyRupee className="mt-2" />
                                                {val.rupee}
                                              </h1>

                                              <p className="text absolute left-[50%] top-[40%] px-2 text-base text-white w-full flex">
                                                {val.hoverdes}
                                                <MdCurrencyRupee className="mt-1 ml-4" />
                                                {val.rupee2}
                                              </p>

                                              <p className="text absolute left-[50%] top-[55%] px-2 text-base text-white w-full flex">
                                                {val.hoverdes2}
                                                <MdCurrencyRupee className="mt-1 ml-2" />
                                                {val.rupee3}
                                              </p>

                                              <button className="text absolute left-[50%] top-[80%] w-[70%] px-10 rounded-lg bg- text-base text-white py-2 bg-[#Eb4e62] ">
                                                {val.btn}
                                              </button>
                                            </div>
                                          </div>
                                        </Link>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>*/}
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
      </div>
    </div>
  );
};

export default GiftCards;
