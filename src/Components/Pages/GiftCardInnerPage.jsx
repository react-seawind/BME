import React from "react";
import GiftCardImg from "../../Images/giftcard.png";

const GiftCardInnerPage = () => {
  return (
    <div className="=">
      <div className="  relative  container mx-auto w-full">
        <div className="grid grid-cols-1 bg-white shadow-lg  p-5 my-5 border-2">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-1">
              <img src={GiftCardImg} alt="" />
            </div>
            <div className="col-span-2 my-auto">
              <h1 className="text-2xl font-bold py-1">Gift Title</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          {/* =======================Form Part =======================================*/}
          <div className=" bg-white py-5   ">
            <form action="">
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
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
};

export default GiftCardInnerPage;
