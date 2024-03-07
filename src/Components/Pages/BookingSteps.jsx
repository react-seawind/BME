import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdCurrencyRupee } from "react-icons/md";
import { FaEarthAsia, FaMinus, FaPlus } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";

function UserDetails() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
      {/*============================= Venue ================================*/}
      <div className="mx-auto w-full px-0 py-5 bg-gray-100 relative ">
        <h1 className="font-semibold px-5">Snapper Film City: Ahmedabad</h1>
        <p className="px-5 ">11 Feb 2024 8:30pm</p>
        <p className="px-5 ">
          100 Feet Road, Sardar Patel Ring Rd, off New Science City, Ahmedabad,
          Gujarat 380060
        </p>
        <input
          type="radio"
          name="show"
          value="1"
          className="absolute top-3 right-3 "
        />
      </div>
      <div className="mx-auto w-full px-0 py-5 bg-gray-100 relative ">
        <h1 className="font-semibold px-5">Snapper Film City: Ahmedabad</h1>
        <p className="px-5 ">11 Feb 2024 8:30pm</p>
        <p className="px-5 ">
          100 Feet Road, Sardar Patel Ring Rd, off New Science City, Ahmedabad,
          Gujarat 380060
        </p>
        <input
          type="radio"
          name="show"
          value="2"
          className="absolute top-3 right-3 "
        />
      </div>
      <div className="mx-auto w-full px-0 py-5 bg-gray-100 relative ">
        <h1 className="font-semibold px-5">Snapper Film City: Ahmedabad</h1>
        <p className="px-5 ">11 Feb 2024 8:30pm</p>
        <p className="px-5 ">
          100 Feet Road, Sardar Patel Ring Rd, off New Science City, Ahmedabad,
          Gujarat 380060
        </p>
        <input
          type="radio"
          name="show"
          value="3"
          className="absolute top-3 right-3 "
        />
      </div>

      <div className="mx-auto w-full px-0 py-5 bg-gray-100 relative ">
        <h1 className="font-semibold px-5">Gift City: Ahmedabad</h1>
        <p className="px-5 ">20 Feb 2024 8:30pm</p>
        <p className="px-5 ">
          100 Feet Road, Sardar Patel Ring Rd, off New Science City, Ahmedabad,
          Gujarat 380060
        </p>

        <input
          type="radio"
          name="show"
          value="4"
          className="absolute top-3 right-3 "
        />
      </div>
    </div>
  );
}

//========================= Date and Time============================
function Payment() {
  let [count, setCount] = useState(0);

  const incNum = () => {
    setCount(count + 1);
  };

  const decNum = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div>
      <div className="Container mx-auto w-full lg:w-[40%]  py-5 bg-gray-100">
        <div className="grid grid-cols-2">
          <div className="">
            <h1 className="px-5 font-semibold">EARLY BIRD</h1>
            <p className="px-5 text-gray-500 flex">
              <MdCurrencyRupee className="mt-1" />
              1000
            </p>
          </div>
          <div className="flex justify-end items-center">
            <button
              onClick={incNum}
              className="border text-thebg-themecolor1 text-xl rounded-full mx-2 h-8 w-8 border-themecolor1"
            >
              <FaPlus className="ml-[5px]" />
            </button>
            <div className=" mt-1 ">{count}</div>
            <button
              onClick={decNum}
              className="border text-thebg-themecolor1 text-xl rounded-full mx-2 h-8 w-8 border-themecolor1"
            >
              <FaMinus className=" ml-[5px] " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===========================Confirmation===========================
function Confirmation() {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

  return (
    <div>
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2 bg-gray-100  px-5">
            <h1 className="py-4 text-gray-500 font-medium">
              Please select from the following option(s)
            </h1>
            <div className="flex mb-2">
              <input type="radio" name="" id="" className="" checked />
              <h1 className=" ml-3">M-Ticket</h1>
            </div>

            <div className="container bg-sky-100 p-3">
              <h1 className="font-semibold ">M-Ticket Information</h1>
              <p className="py-2 ">
                1. Customer(s) can access their tickets(s) from the 'My Profile'
                section on the app/mobile-web.
              </p>
              <p className="">
                2. It is mandatory to present the ticket(s) in my profile
                section via app/mobile-web at the venue.
              </p>
              <p className="py-2 ">
                3. No physical ticket(s) are required to enter the venue
              </p>
            </div>
          </div>

          <div className="bg-gray-100 lg:mx-5 pt-8 mt-0 py-5">
            <div className="grid grid-cols-2 md:grid-cols-2 border border-gray-300 mx-2 rounded-md  ">
              <div className="text-black py-2 px-5 border-b w-40 md:w-0 lg:w-full">
                <h1 className="font-semibold">Kirtidan Gadhvi</h1>
                <p className="text-sm text-gray-500">1 Ticket</p>
              </div>

              <h1 className="py-2 pr-5 border-b flex justify-end ">
                <MdCurrencyRupee className="mt-1" />
                1000.00
              </h1>

              <div className="py-2 pl-5 text-sm">
                <h1>Sun, 11 Feb, 2024</h1>
                <h1>08:30 PM</h1>
                <p className="mt-3">Venue</p>
                <p className="md:w-[150%] w-48 pb-2">
                  Snapper Film City: Ahmedabad
                </p>
                <h1 className="text-lg border-t py-2 w-48 md:w-[200%]">
                  PRICE(1000):1 ticket(s)
                </h1>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-4">
              <p className="px-5">sub-total</p>
              <p className="flex justify-end px-5">
                {" "}
                <MdCurrencyRupee className="mt-1" />
                1000.00
              </p>
            </div>

            <div className="card py-2 px-5">
              <button
                onClick={toggleReadMoreLess}
                className="flex w-full border-b pb-2"
              >
                Booking Fee
                {isShowMore ? (
                  <MdKeyboardArrowUp className="mt-1" />
                ) : (
                  <MdKeyboardArrowDown className="mt-1" />
                )}
                <h1 className="flex ml-auto">
                  {" "}
                  <MdCurrencyRupee className="mt-1" />
                  50.00
                </h1>
              </button>
              {isShowMore && (
                <div className="border-b pb-1">
                  <div className="flex pt-2">
                    <p className="text-sm w-full">Base Price</p>
                    <h1 className="flex">
                      <MdCurrencyRupee className="mt-1" />
                      44.93
                    </h1>
                  </div>
                  <div className="flex pb-5">
                    <p className="text-xs w-full">Integrated GST(IGST)@18%</p>
                    <h1 className="flex">
                      <MdCurrencyRupee className="mt-1" />
                      6.23
                    </h1>
                  </div>
                </div>
              )}
            </div>
            <div className="flex px-5 pb-4 border-b">
              <h1 className="w-full">Total Amount</h1>
              <h1 className="flex">
                <MdCurrencyRupee className="mt-1" />
                1050
              </h1>
            </div>

            <label
              for="countries"
              className="block mb-2 mt-3 px-5 text-xs font-medium text-gray-400 dark:text-white"
            >
              Select State
            </label>
            <select
              id="countries"
              className="bg-gray-50 border-b hover:border-b-2 outline-none text-gray-900 text-lg  focus:ring-thebg-themecolor1  focus:border-thebg-themecolor1block w-[88%] block m-auto py-2 dark:bg-gray-700 dark:border-thebg-themecolor1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-thebg-themecolor1dark:focus:border-blue-500 "
            >
              <option value="GJ">Gujarat</option>
              <option value="RJ">Rajesthan</option>
              <option value="MH">Maharashtra</option>
              <option value="GOA">Goa</option>
            </select>
            <h1 className="flex text-xs px-2 text-gray-400 mt-5 border-b pb-4">
              <IoIosInformationCircleOutline className="text-2xl mx-2" />
              By proceeding, I express my consent to complete this transaction
            </h1>
            <button className="bg-themecolor1 text-white w-[90%] block m-auto mt-5 py-2 rounded-md">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Steps() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "Venue" },
    { label: "Date,Time & Ticket" },
    { label: "Confirmations" },
  ];

  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <UserDetails />;
      case 1:
        return <Payment />;
      case 2:
        return <Confirmation />;
      default:
        return null;
    }
  }

  return (
    <div className="container mx-auto">
      <Stepper steps={steps} activeStep={activeStep} />
      <div style={{ padding: "10px", marginBottom: "4rem" }}>
        {getSectionComponent()}

        <div className="flex justify-between">
          <div>
            {activeStep !== 0 && activeStep !== steps.length - 0 && (
              <button
                onClick={() => setActiveStep(activeStep - 1)}
                className="my-2 py-2 px-4 rounded-md flex mx-auto bg-themecolor1 text-white"
              >
                Previous
              </button>
            )}
          </div>
          <div>
            {activeStep !== steps.length - 1 && (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="my-2 py-2 px-4 rounded-md flex mx-auto bg-themecolor1 text-white"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
