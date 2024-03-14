import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
const TEST = () => {
  const [showhide1, setShowhide1] = useState("yes");
  const handleshow1 = (e) => {
    const getshow1 = e.target.value;
    setShowhide1(getshow1);
  };
  const formik = useFormik({
    initialValues: {
      userdetail: "yes",
      gstin: "",
      pan: "",
      companyName: "",

      tdsDeclaration: false,
    },
    validationSchema: Yup.object({
      gstin: Yup.string().when("userdetail", {
        is: "yes",
        then: Yup.string().required("GSTIN is required"),
        otherwise: Yup.string(),
      }),
      pan: Yup.string().when("userdetail", {
        is: "yes",
        then: Yup.string().required("PAN is required"),
        otherwise: Yup.string(),
      }),
      companyName: Yup.string().required("Company Name is required"),

      tdsDeclaration: Yup.boolean().oneOf(
        [true],
        "You must agree to the terms"
      ),
    }),
    onSubmit: (values) => {
      localStorage.setItem("TESTDATA", JSON.stringify(values));
      console.log("Form data saved to localStorage:", values);
      // Perform any other actions upon form submission
    },
  });

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
        <form onSubmit={formik.handleSubmit}>
          <div className="border">
            <h1 className="text-lg  p-2 text-white font-bold bg-themecolor1 ">
              General Informmation
            </h1>
            <div className=" bg-white p-4">
              <h1 className="font-semibold md:text-lg">
                Do you have a GST registration?
              </h1>
              {/* ===================Yes and No ====================*/}
              <div className="col-md-12 mt-5">
                <div className="text-black">
                  <input
                    type="radio"
                    name="userdetail"
                    value="yes"
                    checked={showhide1 === "yes"}
                    onChange={handleshow1}
                    className="text-gray-600"
                  />
                  <label htmlFor="" className="px-2">
                    Yes
                  </label>
                  <input
                    type="radio"
                    name="userdetail"
                    value="no"
                    onChange={handleshow1}
                    className=""
                  />
                  <label htmlFor="" className="px-2">
                    No
                  </label>
                </div>
                {showhide1 === "yes" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-4 my-5">
                    <div className="">
                      <h1 htmlFor="" className="text-sm font-medium ">
                        GSTIN <span className="text-red-600">*</span>
                      </h1>
                      <input
                        type="text"
                        name="gstin"
                        value={formik.values.gstin}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="outline-none p-2 mt-2 border w-full rounded-md"
                        placeholder="GSTIN"
                      />
                      {formik.touched.gstin && formik.errors.gstin ? (
                        <div className="text-red-600">
                          {formik.errors.gstin}
                        </div>
                      ) : null}
                    </div>
                    <div className="">
                      <h1 htmlFor="" className="text-sm font-medium ">
                        PAN <span className="text-red-600">*</span>
                      </h1>
                      <input
                        type="text"
                        name="pan"
                        value={formik.values.pan}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="outline-none p-2 mt-2 border w-full rounded-md"
                        placeholder="PAN"
                      />
                      {formik.touched.pan && formik.errors.pan ? (
                        <div className="text-red-600">{formik.errors.pan}</div>
                      ) : null}
                    </div>
                  </div>
                )}
                <h1 className="font-semibold mt-4">
                  Registered Company Name/Organiser's name
                </h1>
                <input
                  type="text"
                  name="companyName"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Your Company Name Pvt.Ltd. or Your Company Name LLP"
                  className="w-full outline-none border rounded-md p-2 mt-2 line-clamp-1"
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <div className="text-red-600">
                    {formik.errors.companyName}
                  </div>
                ) : null}

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

            <Link to={"/BME/kyc-2"}>
              <button
                type="submit"
                className="block m-auto bg-themecolor1 lg:px-10 px-5 p-2 rounded-md text-white font-semibold my-5"
              >
                Proceed to Upload Documents
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TEST;
