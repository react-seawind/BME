import React from "react";
import pdf from "../../Images/dummy.pdf";
import { Link } from "react-router-dom";

const Kyc3 = () => {
  return (
    <div className="container lg:w-2/3 px-4 mx-auto my-10">
      <div className=" bg-white p-5">
        <h1 className="lg:text-3xl text-center font-semibold">
          Sign Agreement
        </h1>
        <h1 className="bg-[#FFF3CD] border border-[#FFECB5] px-5 py-4 rounded-lg text-[#664D03] font-medium my-4 mx-4 lg:mx-0">
          Your KYC status is Pending
        </h1>

        <div className="py-3">
          <p className="text-gray-500 pb-2">
            Upload signed agreement,click on{" "}
            <a href={pdf} download className="text-themecolor1">
              Download agreement
            </a>{" "}
            to download the agreement and upload agreemenr.
          </p>
          <div className="border-2 border-dotted border-gray-600 rounded-md text-center pt-7 py-4">
            <h1 className="text-lg text-gray-600">
              Select File here (1MB File Size Limit)
            </h1>
            <input
              type="file"
              class="block m-auto w-56 lg:w-80 text-sm text-slate-500 my-5 border border-[#F84464] bg-[#F7F7F7] rounded-lg
                  file:mr-4 file:py-3 file:px-4
                  file:border-0 file:text-sm file:font-semibold
                  file:bg-themecolor1 file:text-white"
            />
          </div>
        </div>

        <div className="flex mb-2">
          <Link
            to={"/BME/kyc-2"}
            className="block  bg-themecolor1  rounded-md text-white font-semibold py-2 px-5"
          >
            Back
          </Link>
          <Link
            to={"/BME/editprofile"}
            className="block ms-auto bg-themecolor1  rounded-md text-white font-semibold py-2 px-5"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kyc3;
