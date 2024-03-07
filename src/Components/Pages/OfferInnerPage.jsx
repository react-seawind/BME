import React, { useState } from "react";
import OfferInnerPageImg from "../../Images/offerinerpage.png";
import BankImg1 from "../../Images/bank1.png";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

function OfferInnerPage() {
  const [termsCond, setTermsCond] = useState(false);
  const toggletermsCond = () => {
    setTermsCond(!termsCond);
  };

  const [maxnum, setMaxnum] = useState(false);
  const togglemaxnum = () => {
    setMaxnum(!maxnum);
  };
  const offerdata = [
    {
      des: "1. Get 2 free movie tickets per month or INR 500 off whichever is less with SBI Signature/Elite credit card",
    },
    {
      des: "2. Get 2 free movie tickets per month or INR 500 off whichever is less with SBI Signature/Elite credit card",
    },
    {
      des: "3. Get 2 free movie tickets per month or INR 500 off whichever is less with SBI Signature/Elite credit card",
    },
    {
      des: "4. Get 2 free movie tickets per month or INR 500 off whichever is less with SBI Signature/Elite credit card",
    },
  ];

  const allofferdata = [
    {
      des: "1. Go through the regular ticketing flow for selecting the movie, cinema, and show of your choice",
    },
    {
      des: "2. Go through the regular ticketing flow for selecting the movie, cinema, and show of your choice",
    },
    {
      des: "3. Go through the regular ticketing flow for selecting the movie, cinema, and show of your choice",
    },
    {
      des: "4. Go through the regular ticketing flow for selecting the movie, cinema, and show of your choice",
    },
  ];
  return (
    <div>
      <img src={OfferInnerPageImg} alt="" className="w-full" />

      {/* ============================================valid On ============================================*/}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-1">
          <div className="text-center py-5 bg-gray-100 mx-[1px] my-[1px] w-full">
            <h1 className="text-sm text-gray-600 font-semibold">VALID ON</h1>
            <p className="text-sm py-2">Web & App</p>
          </div>
          <div className="text-center py-5 bg-gray-100 mx-[1px] my-[1px]">
            <h1 className="text-sm text-gray-600 font-semibold">QUOTAS</h1>
            <p className="text-sm py-2">No Quotas</p>
          </div>
          <div className="text-center py-5 bg-gray-100 mx-[1px] my-[1px]">
            <h1 className="text-sm text-gray-600 font-semibold">VALID TILL</h1>
            <p className="text-sm py-2">31-Mar-2026 23:59</p>
          </div>
          <div className="text-center py-5 bg-gray-100 mx-[1px] my-[1px]">
            <h1 className="text-sm text-gray-600 font-semibold">
              OTHER CONDITIONS
            </h1>
            <p className="text-sm py-2">Available all days of the week</p>
          </div>
          <div className="text-center py-5 bg-gray-100 mx-[1px]">
            <button className="bg-[#EB4E62] text-white px-8 py-3 rounded-md">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* ============================================valid On ============================================*/}
      <div className="container mx-auto">
        <div className="md:flex mt-7 mx-3">
          <img src={BankImg1} alt="" className="rounded-full" />
          <h1 className="md:px-8 my-auto text-lg">
            SBI SIGNATURE/ELITE CREDIT CARD OFFER
          </h1>
        </div>

        <div className="mb-8 mx-3">
          {/*=============================================== FAQS ==============================================*/}
          <div className=" mt-10">
            <h1 className="underline">FAQS</h1>

            <button
              onClick={togglemaxnum}
              className="mt-5 flex   font-semibold border-2 border-themecolor1 p-2 rounded"
            >
              {maxnum ? (
                <CiCircleMinus className="text-xl my-auto mr-3" />
              ) : (
                <CiCirclePlus className="text-xl my-auto mr-3" />
              )}
              what are the maximum number of free tickets one call avail?
            </button>
            {maxnum && (
              <p className=" mt-2">
                sapiente exercitationem odio quia, animi eos distinctio tempora,
                ipsum hic vitae modi eum nostrum id perspiciatis impedit
                dolores.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferInnerPage;
