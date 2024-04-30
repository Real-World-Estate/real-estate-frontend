import React from "react";
import { faqs } from "../assets";
import Question from "./Question";

const faqsEls = [
  {
    question: "How do I start the process of buying a house?",
    answer:
      "The first step in buying a house is to assess your financial situation and determine how much you can afford to spend. After that, you can start working with a real estate agent to search for homes that meet your criteria.",
  },
  {
    question: "What is a down payment, and how much do I need?",
    answer:
      "A down payment is a percentage of the purchase price that you pay upfront when buying a house. The amount required varies depending on the type of mortgage you qualify for and your lender's requirements, but it typically ranges from 3% to 20% of the purchase price.",
  },
  {
    question: " Do I need a home inspection, and who pays for it?",
    answer:
      "While a home inspection is not required, it is highly recommended to uncover any potential issues with the property. Typically, the buyer pays for the home inspection, and it is conducted after an offer has been accepted but before the closing. The findings of the inspection can be used to negotiate repairs or credits with the seller",
  },
  {
    question: "What services does your cleaning and fumigation company offer",
    answer:
      "Our company offers a wide range of cleaning and fumigation services tailored to meet the needs of both residential and commercial clients. Our services include general cleaning, deep cleaning, disinfection, pest control, fumigation for insects and rodents, odor removal, and more.",
  },
  {
    question: "Are your cleaning products safe for pets and children?",
    answer:
      "Yes, we prioritize the safety of our clients, their families, and their pets. We use eco-friendly cleaning products that are non-toxic and safe for use around children and pets. Our team is trained to follow proper application procedures to minimize any potential risks associated with cleaning products.",
  },
  {
    question: "How long does a typical cleaning or fumigation service take?",
    answer:
      "The duration of a cleaning or fumigation service depends on various factors such as the size of the property, the scope of work, and the level of contamination or infestation. Our team will assess your specific needs and provide you with an estimated time frame for completing the service before beginning the work.",
  },
  {
    question: "What types of detergents does your company produce?",
    answer:
      "Our company specializes in manufacturing a wide range of detergents tailored to meet the needs of both household and commercial applications. Our product line includes laundry detergents, dishwashing detergents, multi-purpose cleaners, fabric softeners, and specialty detergents for specific cleaning tasks.",
  },
];

function Faqs() {
  return (
    <div className="faqs" id="faqs">
      <div className="title">
        <img src={faqs.faqsMain} alt="Faqs Icon" />
        <h4>Frequently Asked Questions</h4>
      </div>
      <div className="faqs-content mg-top-lg">
        {faqsEls.map((faq, i) => (
          <Question key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <img src={faqs.iconBrownDown} alt="down icon" className="icon-down" />
      <img src={faqs.iconBrownUp} alt="down icon" className="icon-up" />
    </div>
  );
}

export default Faqs;
