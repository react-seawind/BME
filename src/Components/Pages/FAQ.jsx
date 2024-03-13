import React, { useState } from "react";
import bgimage from "../../Images/faqbanner.jpg";
import { IoChevronDownOutline } from "react-icons/io5";

import Breadcrumb from "../Breadcumb/Breadcumb";
import { FaUser } from "react-icons/fa";

const FAQ = () => {
  const breadcrumbItems = [{ text: "FAQ" }];
  const backgroundImage = bgimage;

  const faqdata = [
    { id: 1, que: "test 1", ans: "answer 1" },
    { id: 2, que: "test 2", ans: "answer 2" },
    { id: 3, que: "test 3", ans: "answer 3" },
    { id: 4, que: "test 4", ans: "answer 4" },
    { id: 5, que: "test 5", ans: "answer 5" },
  ];

  const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        className={`transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 ${
          isOpen ? "open" : ""
        }`}
      >
        <button
          type="button"
          className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex text-lg font-semibold text-black">
            {question}
          </span>
          <IoChevronDownOutline
            className={`w-6 h-6 text-gray-400 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${isOpen ? "" : "hidden"}`}>
          <p>{answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} backgroundImage={backgroundImage} />
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
            {faqdata.map((faq) => (
              <AccordionItem key={faq.id} question={faq.que} answer={faq.ans} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
