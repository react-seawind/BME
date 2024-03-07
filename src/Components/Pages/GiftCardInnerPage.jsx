import React from "react";

function GiftCardInnerPage() {
  return (
    <div className="bg-gray-100">
      <div className="  relative  container mx-auto w-full">
        <div className="grid grid-cols-1  ">
          {/* =======================Form Part =======================================*/}
          <div className="col-span-2 bg-white md:border py-5   lg:mb-10 md:mb-20">
            <form action="">
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-3">
                <div>
                  <label className="py-2">*From</label>
                  <input
                    type="text"
                    placeholder="Please Enter Sender's Name"
                    className="border border-gray-400 rounded-md py-2 px-2 outline-none w-full"
                  />
                </div>

                <div>
                  <label className="py-2">*To</label>
                  <input
                    type="text"
                    placeholder="Please Enter Recipient Name"
                    className="border border-gray-400 rounded-md py-2 px-2 outline-none w-full"
                  />
                </div>

                <div>
                  <label className="py-2">*Email</label>
                  <input
                    type="text"
                    placeholder="Please Enter Recipient Email Id"
                    className="border border-gray-400 rounded-md py-2 px-2 outline-none w-full"
                  />
                </div>

                <div>
                  <label className="py-2">*Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Please Enter Mobile Number"
                    className="border border-gray-400 rounded-md py-2 px-2 outline-none w-full"
                  />
                </div>
                <div>
                  <label className=" pt-5">
                    When do you wish to send your card?
                  </label>

                  <input
                    type="datetime-local"
                    className="border border-gray-400 rounded-md py-2 px-2 outline-none w-full"
                  />
                </div>
                <div>
                  <label className=" pt-5">Amount</label>

                  <input
                    type="text"
                    className="border border-gray-400 rounded-md py-2 px-2 outline-none w-full"
                  />
                </div>
                <div>
                  <label className="py-2">Add your personal message...</label>
                  <textarea
                    rows="2"
                    placeholder="Message"
                    className="border border-gray-400 rounded-md py-2 px-2 outline-none w-full"
                  ></textarea>
                  <p className="text-xs text-gray-400">250 Character allowed</p>
                </div>
              </div>

              <div className=" mt-5 ">
                <button className="  mx-auto px-1 py-2 flex rounded-md text-white bg-[#Eb4E62]">
                  Make Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftCardInnerPage;
