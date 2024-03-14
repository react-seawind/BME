// import React from "react";
// import { Link } from "react-router-dom";

// const Kyc2 = () => {
//   return (
//     <div>
//       <div className="container lg:w-2/3 px-4 mx-auto my-10">
//         <div className=" bg-white p-5">
//           <h1 className="lg:text-3xl text-center font-semibold">
//             Upload Docments
//           </h1>
//           <h1 className="bg-[#FFF3CD] border border-[#FFECB5] px-5 py-4 rounded-lg text-[#664D03] font-medium my-4 mx-4 lg:mx-0">
//             Your KYC status is Pending
//           </h1>
//           <div className="border px-5">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               <div className="py-3">
//                 <h1 className="pt-4 text-2xl font-semibold">
//                   Pan <span className="text-red-600">*</span>
//                 </h1>
//                 <p className="text-sm text-gray-500 pb-2">
//                   (.jpg, .jpeg, .png, .pdf)
//                 </p>
//                 <div className="border-2 border-dotted border-gray-600 rounded-md text-center pt-7 py-4">
//                   <h1 className="text-lg text-gray-600">
//                     Select File here (1MB File Size Limit)
//                   </h1>
//                   <input
//                     type="file"
//                     class="block w-56 lg:w-80 text-sm text-slate-500 m-auto my-5 border border-[#F84464] bg-[#F7F7F7] rounded-lg
//                   file:mr-4 file:py-3 file:px-4
//                   file:border-0 file:text-sm file:font-semibold
//                   file:bg-themecolor1 file:text-white"
//                   />
//                 </div>
//               </div>
//               <div className="py-3">
//                 <h1 className="pt-4 text-2xl font-semibold">
//                   Cancelled Cheque <span className="text-red-600">*</span>
//                 </h1>
//                 <p className="text-sm text-gray-500 pb-2">
//                   (.jpg, .jpeg, .png, .pdf)
//                 </p>
//                 <div className="border-2 border-dotted border-gray-600 rounded-md text-center pt-7 py-4">
//                   <h1 className="text-lg text-gray-600">
//                     Select File here (1MB File Size Limit)
//                   </h1>
//                   <input
//                     type="file"
//                     class="block m-auto w-56 lg:w-80 text-sm text-slate-500 my-5 border border-[#F84464] bg-[#F7F7F7] rounded-lg
//                   file:mr-4 file:py-3 file:px-4
//                   file:border-0 file:text-sm file:font-semibold
//                   file:bg-themecolor1 file:text-white"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex mb-2 px-5">
//           <Link
//             to={"/BME/kyc-1"}
//             className="block  bg-themecolor1  rounded-md text-white font-semibold py-2 px-5"
//           >
//             Back
//           </Link>
//           <Link
//             to={"/BME/kyc-3"}
//             className="block ms-auto bg-themecolor1  rounded-md text-white font-semibold py-2 px-5"
//           >
//             Proceed to Sign Declaration
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Kyc2;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Kyc2 = () => {
  const mynav = useNavigate();
  const formik = useFormik({
    initialValues: {
      panFile: "",
      chequeFile: "",
    },
    validationSchema: Yup.object({
      panFile: Yup.mixed().required("Pan file is required"),
      chequeFile: Yup.mixed().required("Cancelled Cheque file is required"),
    }),
    onSubmit: (values) => {
      sessionStorage.setItem("BMEKYC2", JSON.stringify(values));
      mynav("/BME/kyc-3"); // Corrected the navigation to kyc-3
      // Clear form values
      formik.resetForm();
    },
  });

  return (
    <div>
      <div className="container lg:w-2/3 px-4 mx-auto my-10">
        <div className=" bg-white p-5">
          <h1 className="lg:text-3xl text-center font-semibold">
            Upload Documents
          </h1>
          <h1 className="bg-[#FFF3CD] border border-[#FFECB5] px-5 py-4 rounded-lg text-[#664D03] font-medium my-4 mx-4 lg:mx-0">
            Your KYC status is Pending
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="border px-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="py-3">
                  <h1 className="pt-4 text-2xl font-semibold">
                    Pan <span className="text-red-600">*</span>
                  </h1>
                  <p className="text-sm text-gray-500 pb-2">
                    (.jpg, .jpeg, .png, .pdf)
                  </p>
                  <div className="border-2 border-dotted border-gray-600 rounded-md text-center pt-7 py-4">
                    <h1 className="text-lg text-gray-600">
                      Select File here (1MB File Size Limit)
                    </h1>
                    <input
                      type="file"
                      name="panFile"
                      // onChange={(event) => {
                      //   formik.setFieldValue(
                      //     "panFile",
                      //     event.currentTarget.files[0]
                      //   );
                      // }}
                      onChange={formik.handleChange}
                      class="block m-auto w-56 lg:w-80 text-sm text-slate-500 my-5 border border-[#F84464] bg-[#F7F7F7] rounded-lg
                          file:mr-4 file:py-3 file:px-4
                          file:border-0 file:text-sm file:font-semibold
                          file:bg-themecolor1 file:text-white"
                    />
                    {formik.errors.panFile && formik.touched.panFile && (
                      <div className="text-red-600">
                        {formik.errors.panFile}
                      </div>
                    )}
                  </div>
                </div>
                <div className="py-3">
                  <h1 className="pt-4 text-2xl font-semibold">
                    Cancelled Cheque <span className="text-red-600">*</span>
                  </h1>
                  <p className="text-sm text-gray-500 pb-2">
                    (.jpg, .jpeg, .png, .pdf)
                  </p>
                  <div className="border-2 border-dotted border-gray-600 rounded-md text-center pt-7 py-4">
                    <h1 className="text-lg text-gray-600">
                      Select File here (1MB File Size Limit)
                    </h1>
                    <input
                      type="file"
                      name="chequeFile"
                      // onChange={(event) => {
                      //   formik.setFieldValue(
                      //     "chequeFile",
                      //     event.currentTarget.files[0]
                      //   );
                      // }}
                      onChange={formik.handleChange}
                      class="block m-auto w-56 lg:w-80 text-sm text-slate-500 my-5 border border-[#F84464] bg-[#F7F7F7] rounded-lg
 file:mr-4 file:py-3 file:px-4
 file:border-0 file:text-sm file:font-semibold
 file:bg-themecolor1 file:text-white"
                    />
                    {formik.errors.chequeFile && formik.touched.chequeFile && (
                      <div className="text-red-600">
                        {formik.errors.chequeFile}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex mb-2">
                <Link
                  to={"/BME/kyc-1"}
                  className="block bg-themecolor1 rounded-md text-white font-semibold py-2 px-5"
                >
                  Back
                </Link>
                <button
                  type="submit"
                  className="block ms-auto bg-themecolor1 rounded-md text-white font-semibold py-2 px-5"
                >
                  Proceed to Sign Declaration
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kyc2;
