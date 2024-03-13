import React, { useState } from "react";
import { Link } from "react-router-dom";

const Kyc1 = () => {
  const [showhide1, setShowhide1] = useState("yes");
  const handleshow1 = (e) => {
    const getshow1 = e.target.value;
    setShowhide1(getshow1);
  };
  return (
    <div className="">
      <div className="container lg:w-2/3 px-4 mx-auto my-10">
        {/*================= General Informmation ====================*/}
        <h1 className="lg:text-3xl text-center font-semibold">
          General Informmation
        </h1>
        <h1 className="bg-[#FFF3CD] border border-[#FFECB5] px-5 py-4 rounded-lg text-[#664D03] font-medium my-4 mx-4 lg:mx-0">
          Your KYC status is Pending
        </h1>
        <form action="lg:mx-44 mx-4">
          <div className="border">
            <h1 className="text-lg  p-2 text-white font-bold bg-themecolor1">
              General Informmation
            </h1>
            <div className=" bg-white p-4">
              <h1 className="font-semibold md:text-lg">
                Do you have a GST registration?
              </h1>
              {/* ===================Yes and No ====================*/}
              <div className="col-md-12 mt-5">
                <div className="text-black">
                  <form action="">
                    <input
                      type="radio"
                      name="userdetail"
                      value="yes"
                      checked={showhide1 === "yes"}
                      onClick={handleshow1}
                      className="text-gray-600"
                    />
                    <label htmlFor="" className="px-2">
                      Yes
                    </label>
                    <input
                      type="radio"
                      name="userdetail"
                      value="no"
                      onClick={handleshow1}
                      className=""
                    />
                    <label htmlFor="" className="px-2">
                      No
                    </label>
                  </form>
                </div>
                {showhide1 === "yes" && (
                  <form action="" className="my-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-4">
                      <div className="">
                        <h1 htmlFor="" className="text-sm font-medium ">
                          GSTIN <span className="text-red-600">*</span>
                        </h1>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="outline-none p-2 mt-2 border w-full rounded-md"
                          placeholder="GSTIN"
                        />
                      </div>
                      <div className="">
                        <h1 htmlFor="" className="text-sm font-medium ">
                          PAN <span className="text-red-600">*</span>
                        </h1>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="outline-none p-2 mt-2 border w-full rounded-md"
                          placeholder="PAN"
                        />
                      </div>
                    </div>
                  </form>
                )}
                <h1 className="font-semibold mt-4">
                  Registered Company Name/Organiser's name
                </h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Company Name Pvt.Ltd. or Your Company Name LLP"
                  className="w-full outline-none border rounded-md p-2 mt-2 line-clamp-1"
                />
                <h1 className="font-semibold lg:mt-8 mt-4">
                  Registered Company Address
                </h1>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Registered Address"
                  className="w-full outline-none border rounded-md p-2 mt-2"
                />
                <h1 className="font-semibold lg:mt-8 mt-4">
                  Select state <span className="text-red-600">*</span>
                </h1>
                <select
                  id="country-state"
                  name="country-state"
                  className="w-full border p-2 outline-none rounded-md mt-2"
                >
                  <option value="">Select state</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CH">Chandigarh</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="LA">Ladakh</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PY">Puducherry</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
                </select>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 md:gap-4">
                  <div className="">
                    <h1 className="font-semibold lg:mt-8 mt-4">
                      Contact Number
                    </h1>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Contact Number"
                      className="w-full border p-2 outline-none rounded-md mt-2"
                    />
                  </div>
                  <div className="">
                    <h1 className="font-semibold lg:mt-8 mt-4">
                      Email <span className="text-red-600">*</span>
                    </h1>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Email"
                      className="w-full border p-2 outline-none rounded-md mt-2"
                    />
                  </div>
                </div>
                <div className="flex lg:mt-8 mt-4">
                  <input type="checkbox" name="" id="" />
                  <h1 className="px-2 text-sm">
                    I declare that TDS on Payment Made to e-Commerce
                    Participants(Section 1940-TDS) is not applicable to us, as
                    the gross amount of sales or services both facilitated
                    during the current financial year, does not exceed Rs. 5
                    lakhs.
                  </h1>
                </div>
              </div>
            </div>

            {/*================= Bank Account Details ====================*/}
            <h1 className="text-lg p-2 text-white font-bold bg-themecolor1">
              Bank Account Details
            </h1>
            <div className=" bg-white p-4">
              <h1 className="font-semibold lg:mt-8 mt-4">
                Account Type <span className="text-red-600">*</span>
              </h1>
              <select
                id="country-state"
                name="country-state"
                className="w-full border p-2 outline-none rounded-md mt-2"
              >
                <option value="SA">Savings</option>
                <option value="CU">Current</option>
              </select>
              <h1 className="font-semibold mt-4">
                Beneficiary Names <span className="text-red-600">*</span>
              </h1>
              <p className="text-sm">
                Please ensure the beneficiary name matches the registered
                company name. If that's not the case, write to abc@email stating
                the reason
              </p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Beneficiary Names"
                className="w-full outline-none border rounded-md p-2 mt-2"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 md:gap-4">
                <div className="">
                  <h1 className="font-semibold lg:mt-8 mt-4">
                    Account Number <span className="text-red-600">*</span>
                  </h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Contact Number"
                    className="w-full border p-2 outline-none rounded-md mt-2"
                  />
                </div>
                <div className="">
                  <h1 className="font-semibold lg:mt-8 mt-4">
                    IFSC <span className="text-red-600">*</span>
                  </h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email"
                    className="w-full border p-2 outline-none rounded-md mt-2"
                  />
                </div>
              </div>
            </div>
            <Link to={"/BME/kyc-2"}>
              <button className="block m-auto bg-themecolor1 lg:px-10 px-5 p-2 rounded-md text-white font-semibold my-5">
                Proceed to Upload Documents
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Kyc1;
