import React, { useState } from "react";
import ContactusImg from "../../Images/contactus.jpg";
import Breadcrumb from "../Breadcumb/Breadcumb";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      message: "",
      receiveEmails: false,
      receiveCalls: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(/^[a-zA-Z]+$/, "Invalid first name")
        .required("First name is Required"),
      lastName: Yup.string()
        .matches(/^[a-zA-Z]+$/, "Invalid last name")
        .required("Last name is Required"),
      email: Yup.string().email("Invalid email").required("Email is Required"),
      contact: Yup.string()
        .matches(/^[0-9]+$/, "Invalid mobile number")
        .required("Number is Required"),
      message: Yup.string()
        .required("Message is Required")
        .max(250, "Message is too long"),
    }),
    onSubmit: (values) => {
      // Save data to localStorage
      sessionStorage.setItem("BMEcontactFormData", JSON.stringify(values));

      // Clear form values
      formik.resetForm();
    },
  });

  const breadcrumbItems = [
    {
      text: "Contact Us",
    },
  ];
  const backgroundImage = ContactusImg;
  return (
    <div className="bg-[#F4F8FC] ">
      <Breadcrumb items={breadcrumbItems} backgroundImage={backgroundImage} />
      <div className="container mx-auto py-5 ">
        <p className="lg:text-2xl text-center lg:px-52 px-4 mt-3">
          Fill out the form and a member from our sales team will get back to
          you within 24 hours, or scroll down for more ways to get in touch.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:mt-8 bg-white p-3 rounded-md lg:gap-5">
          {/*=================== Form Part =======================*/}
          <div className="col-span-2 mx-1 lg:mx-0">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                <div className="">
                  <h1 className="py-2 font-bold">First Name</h1>
                  <input
                    type="text"
                    name="firstName"
                    className="border outline-none w-full p-2 rounded-md"
                    placeholder="First Name*"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="">
                  <h1 className="py-2 font-bold">Last Name</h1>
                  <input
                    type="text"
                    name="lastName"
                    className="border outline-none w-full p-2 rounded-md"
                    placeholder="Last Name*"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div className="text-red-500">{formik.errors.lastName}</div>
                  ) : null}
                </div>
                <div className="">
                  <h1 className="py-2 font-bold">Email Address</h1>
                  <input
                    type="email"
                    name="email"
                    className="border outline-none w-full p-2 rounded-md"
                    placeholder="Email Id*"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="">
                  <h1 className="py-2 font-bold">Contact No.</h1>
                  <input
                    type="text"
                    name="contact"
                    className="border outline-none w-full p-2 rounded-md"
                    placeholder="Contact*"
                    value={formik.values.contact}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.contact && formik.errors.contact ? (
                    <div className="text-red-500">{formik.errors.contact}</div>
                  ) : null}
                </div>
              </div>
              <div className="">
                <h1 className="py-2 font-bold">Message</h1>
                <textarea
                  rows="3"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border outline-none p-2 rounded-md w-full"
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="text-red-500">{formik.errors.message}</div>
                ) : null}
              </div>
              <div className="flex mt-5">
                <input
                  type="checkbox"
                  name="receiveEmails"
                  value={formik.values.receiveEmails}
                  onChange={formik.handleChange}
                />
                <p className="text-sm px-2">
                  Yes, I would like to receive news and offers from ACTIVE via
                  email
                </p>
              </div>
              <div className="flex mt-2">
                <input
                  type="checkbox"
                  name="receiveCalls"
                  value={formik.values.receiveCalls}
                  onChange={formik.handleChange}
                />
                <p className="text-sm px-2">
                  Yes, I agree to receive phone calls from ACTIVE
                </p>
              </div>
              <button
                className="bg-themecolor1 text-white mt-5 py-2 px-4 rounded-md"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>

          {/*===================== Image Part ====================*/}
          <div className="relative">
            <h1 className="text-4xl">Get in touch</h1>
            <div className="grid grid-cols-3 gap-4 shadow-lg my-3 h-28">
              <div className="col-span-1 my-auto">
                <FaMap className="text-5xl mx-auto" />
              </div>
              <div className="col-span-2 my-auto">
                <p className="break-all">Ahmedabad,Ahmedabad,Ahmedabad</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 shadow-lg my-3 h-28">
              <div className="col-span-1 my-auto">
                <FaPhone className="text-5xl mx-auto" />
              </div>
              <div className="col-span-2 my-auto">
                <p className="break-all">1235468790</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 shadow-lg my-3 h-28">
              <div className="col-span-1 my-auto">
                <FaEnvelope className="text-5xl mx-auto" />
              </div>
              <div className="col-span-2 my-auto">
                <p className="break-all">bookmyevent@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
